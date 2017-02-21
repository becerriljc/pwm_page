var express = require('express')
var app = express()
var fs = require('fs')
var multer=require('multer')
var uuid = require('uuid-base62');
var multipart = require('connect-multiparty')

app.use(express.static('global'))
app.use(express.static('web/assets'))
app.use(express.static('web/pages'))
app.use(multipart());

app.get('/', function (req, res) {
	var template = fs.readFileSync("index.html", "utf8")
	res.send(template)
})

var idArray = new Array()

function getID(){
	var id= uuid.v4()
	idArray.push(id)
	return id
}

var storage = multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, './global/uploads/')
	},
	filename: function (req, file, callback) {
		callback(null, getID() + '.png')
	}
})

var upload = multer({ storage:storage })

app.post('/upload', function(req, res){

	console.log(req.files.uploads.length)

	var archivos = req.files.uploads

	for(i = 0; i < archivos.length; i++){
		
	}

	var storage = multer.diskStorage({
		destination: function (req, file, callback) {
			callback(null, './global/uploads/')
		},
		filename: function (req, file, callback) {
			callback(null, getID() + '.png')
		}
	})

	var upload = multer({ storage:storage }).array('uploads', 12)

	console.log('excelente')
	res.end('perfecto')

})
/*
var storage = multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, './global/uploads/')
	},
	filename: function (req, file, callback) {
		callback(null, getID() + '.png')
	}
})


var upload = multer({ storage:storage })

app.post('/verificar', upload.array('myimage', 12), function(req, res, next){
	console.log(req)
	console.log('listo')
	res.end(idArray.toString())
	idArray = new Array()
})


app.post('/verificar', function(req, res, next){
	console.log(req.files.images)
})

var storage = multer.diskStorage({
	destination: function (req, file, callback) {
	   	callback(null, './global/uploads')
	},
	filename: function (req, file, callback) {
	   	callback(null, file.name + '.png')
	 }
})

var upload = multer({ storage: storage }).array('imagenes', 12)

app.post('/subirimagen',function(req,res){
	
	upload(req,res,function(err) {
	    if(err) {
	        return res.end("Error uploading file.");
	    }
	    console.log('Si se pudo')
	    res.end("File is uploaded");
	})
})

*/

/* YA FUNCIONA
app.post('/subirimagen',function(req,res){

	var idimagen=uuid.v4()
	var storage	=	multer.diskStorage({
	  destination: function (req, file, callback) {
	    callback(null, './global/uploads');

	  },
	  filename: function (req, file, callback) {
	    callback(null, '' + idimagen + '.jpg');
	  }
	});
	var upload = multer({ storage : storage}).single('imagen');
	upload(req,res,function(err) {
		if(err) {
			console.log(err)
			return res.end("");
		}
		console.log(idimagen)
		res.end(idimagen);
	}); 
})*/

app.listen(3000)