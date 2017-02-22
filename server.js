var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    formidable = require('formidable'),
    readChunk = require('read-chunk'),
    fileType = require('file-type'),
    uuid = require('uuid-base62'),
    bodyParser = require('body-parser'),
    firebase = require('firebase')

var app = express();

var config = {
    apiKey: "AIzaSyAjj15ONmvLc9IJ19FWPdHvDiZ9pyKHXiM",
    authDomain: "pwmpage.firebaseapp.com",
    databaseURL: "https://pwmpage.firebaseio.com",
    storageBucket: "pwmpage.appspot.com",
    messagingSenderId: "1086273728382"
  };
  
  firebase.initializeApp(config);

app.set('port', (process.env.PORT || 3000));

app.use(express.static('global'))
app.use(express.static('web/assets'))
app.use(express.static('web/pages'))

app.use(bodyParser.json()) //para aplicaciones json
app.use(bodyParser.urlencoded({extended:true})) //para realizar peticiones tradicionales

app.use('/uploads', express.static('uploads'));

app.get('/', function (req, res) {
   
    var template = fs.readFileSync("index.html", "utf8")
	res.send(template)
});

app.post('/upload_photos', function (req, res) {
    var photos = [],
        form = new formidable.IncomingForm(),
        idsArray = new Array()

    // Tells formidable that there will be multiple files sent.
    form.multiples = true;
    // Upload directory for the images
    form.uploadDir = path.join(__dirname, 'tmp_uploads');

    // Invoked when a file has finished uploading.
    form.on('file', function (name, file) {
        // Allow only 3 files to be uploaded.
        if (photos.length === 12) {
            fs.unlink(file.path);
            return true;
        }

        var buffer = null,
            type = null,
            filename = '';

        buffer = readChunk.sync(file.path, 0, 262);
        type = fileType(buffer);

        // Check the file type, must be either png,jpg or jpeg
        if (type !== null && (type.ext === 'png' || type.ext === 'jpg' || type.ext === 'jpeg')) {
            var uid = uuid.v4()

            filename = uid + '.' + type.ext;

            // Move the file with the new file name
            fs.rename(file.path, path.join(__dirname, 'uploads/' + filename));

            // Add to the list of photos
            photos.push({
                status: true,
                filename: filename,
                type: type.ext,
                publicPath: 'uploads/' + filename
            });
            idsArray.push({
                name: filename
            })
        } else {
            photos.push({
                status: false,
                filename: file.name,
                message: 'Invalid file type'
            });
            fs.unlink(file.path);
        }
    });

    form.on('error', function(err) {
        console.log('Error occurred during processing - ' + err);
    });

    // Invoked when all the fields have been processed.
    form.on('end', function() {
        console.log('All the request fields have been processed.');
    });

    // Parse the incoming form fields.
    form.parse(req, function (err, fields, files) {
        res.end(JSON.stringify(idsArray))
    })
});

app.listen(app.get('port'), function() {
    console.log('Express started at port ' + app.get('port'));
});