var express = require('express')
var app = express()
var fs = require('fs')

app.use(express.static('global'))
app.use(express.static('web/assets'))
app.use(express.static('web/pages'))

app.get('/', function (req, res) {
	var template = fs.readFileSync("back.html", "utf8")
	res.send(template)
})

app.listen(3000)