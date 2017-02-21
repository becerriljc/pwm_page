var idUser = null;

var ini = 3;

var showChar = 20;
var ellipsestext = "...";
var moretext = "more";
var lesstext = "less";

var idReg = generaID()

function addFiles(archivos){

	if(archivos.length > 0){
		var formData = new FormData();

    	for (var i = 0; i < archivos.length; i++) {
      		var file = archivos[i];

      		formData.append('uploads[]', file, file.name);
    	}

    	$.ajax({
		  url: '/upload',
		  type: 'POST',
		  data: formData,
		  processData: false,
		  contentType: false,
		  success: function(data){
		      console.log('upload successful!');
		  }
		})
	}

}


function agregar(menu){
	var paq = $('#paquete').val()
	if(ini < paq){
		ini++
		var addto = ""
		var menuno = menu + ini
		var btnadd = "#divbtn"
		if(menu == "menubtn"){
			addto = "<div class='col-md-2 col-xs-2' id='divmenu"+ini+"' name='divmenu"+ini+"'>" +
			"<div class='row'><div class='form-group'><div class='input-group input-group-icon'>" +
			"<input type='text' class='form-control' name='optMenu"+ini+"' id='optMenu"+ini+"' value='Menu"+ini+"'>" +
			"<span class='input-group-addon text-danger' onclick='getData(\"optMenu"+ini+"\")'>"+
			"<i class='fa fa-pencil-square-o fa-3x' aria-hidden='true'></i></span></div></div></div>"+
			"<div class='row row-centered' id='divbtnmenu"+ini+"'><div class='col-xs-12 col-md-12'>"+
            "<button type='button' class='btn btn-xs btn-success' id='menu"+ini+"' name='menu"+ini+"' onclick='agregar(\"menu"+ini+"\")'>"+
            "<i class='icon md-plus' aria-hidden='true'></i>Agregar</button></div></div></div>"

			btnadd = "#divmenubtn"
		}else{

			addto = "<div class='row'><div class='form-group'><div class='input-group input-group-icon'>"+
			"<input type='text' class='form-control' name='optMenu"+ini+"' id='optMenu"+ini+"' value='submenu"+ini+"'>"+
			"<span class='input-group-addon text-danger' onclick='getData(\"optMenu"+ini+"\")'>"+
			"<i class='fa fa-pencil-square-o fa-3x' aria-hidden='true'></i></span></div></div></div>"
			
			btnadd += menu
		}
		$( addto ).insertBefore( btnadd ); 
	}
	
}

function mostrar_ocultar(id, btn, accion){
	if(accion == 1){
		$(id).show()
		$(btn).hide()
	}else{
		$(id).hide()
		$(btn).show()
	}
	
	
}

function ocultartodo(id){
	$('#dos').hide()
	$('#btnmostrar').show()
}

function getData(id){
	$('#guardaIDMenu').val(id)
	var object = cambios.child('menus/' + id);
	if(typeof object.nombre !== 'undefined'){
		$('#content').val(object.nombre)
	}else{
		$('#content').val('Esto es una prueba')
	}
	$('.file-list').empty()
	$('#examplePositionCenter').modal('show')
	//$('.upload-instructions').appendto('.uploader-inline')
}


function getPaginaweb(){
	var isChecked = $("#tienePaginaweb").is(":checked") ? 1:0; 
    
    if(isChecked){
    	$('#divpaginawebactual').show()
    }else{
    	$('#divpaginawebactual').hide()
    }
}

function valoresAdd(id, valor){
	alert("Mi id es: " + id + " y valor: " + valor)
}

function S4() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
}

function generaID(){
	return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase()
}


function getInfoPaquete(paquete){
	var icono, nombre

	switch(paquete){
		case "5": icono = "fa-home"; nombre = "PYME"; break;
		case "10": icono = "fa-bicycle"; nombre = "Profesional"; break;
		case "15": icono = "fa-car"; nombre = "Empresarial"; break;
		case "30": icono = "fa-star"; nombre = "Elite"; break;
	}

	return [icono, nombre]
}


function actualizaCampos(datos){
	if(datos != null){
		if(typeof datos.nombre !== 'undefined') {
			$('#dataNombreContacto').empty()
			$('<p>' + datos.nombre + '</p>').appendTo('#dataNombreContacto')
		}
		if(typeof datos.correo !== 'undefined'){ 
			$('#dataCorreo').empty()
			$('<p>' + datos.correo + '</p>').appendTo('#dataCorreo')
		}
		if(typeof datos.telefono !== 'undefined'){ 
			$('#dataTelefono').empty()
			$('<p>' + datos.telefono + '</p>').appendTo('#dataTelefono')
		}
		if(typeof datos.paquete !== 'undefined'){
			$('#dataPaquete').empty()
			var info = getInfoPaquete(datos.paquete)
			var tmpPaquete = '<i class="fa '+info[0]+'" aria-hidden="true"></i> ' + info[1]
			$(tmpPaquete).appendTo('#dataPaquete')
		}
		if(typeof datos.razonSocial !== 'undefined'){
			$('#dataRazonSocial').empty()
			$('<p>' + datos.razonSocial + '</p>').appendTo('#dataRazonSocial')
		}
		if(typeof datos.nombreComercial !== 'undefined'){
			$('#dataNombreComercial').empty()
			$('<p>' + datos.nombreComercial + '</p>').appendTo('#dataNombreComercial')
		}
		if(typeof datos.giroNegocio !== 'undefined'){
			$('#dataGiroNegocio').empty()
			$('<p>' + datos.giroNegocio + '</p>').appendTo('#dataGiroNegocio')
		}

		var clients = "";
		if( (typeof datos.cliente1 !== 'undefined') && (datos.cliente1 !== "") ){
			clients += "<li>" + datos.cliente1 + "</li>"
		} 
		if( (typeof datos.cliente2 !== 'undefined') && (datos.cliente2 !== "") ){
			clients += "<li>" + datos.cliente2 + "</li>"
		} 
		if( (typeof datos.cliente3 !== 'undefined') && (datos.cliente3 !== "") ){
			clients += "<li>" + datos.cliente3 + "</li>"
		} 
		if( (typeof datos.cliente4 !== 'undefined') && (datos.cliente4 !== "") ){
			clients += "<li>" + datos.cliente4 + "</li>"
		} 
		if(clients !== ""){
			$('#dataCliente').empty()
			$('<ul>' + clients + '</ul>').appendTo('#dataCliente')
		}

		var objetivos = ""
		if( (typeof datos.objetivo1 !== 'undefined') && (datos.objetivo1 !== "")){
			objetivos += "<li>" + datos.objetivo1 + "</li>"
		}
		if( (typeof datos.objetivo2 !== 'undefined') && (datos.objetivo2 !== "")){
			objetivos += "<li>" + datos.objetivo2 + "</li>"
		}
		if( (typeof datos.objetivo3 !== 'undefined') && (datos.objetivo3 !== "")){
			objetivos += "<li>" + datos.objetivo3 + "</li>"
		}
		if( (typeof datos.objetivo4 !== 'undefined') && (datos.objetivo4 !== "")){
			objetivos += "<li>" + datos.objetivo4 + "</li>"
		}
		if(objetivos !== ""){
			$('#dataObjetivos').empty()
			$('<ul>' + objetivos + '</ul>').appendTo('#dataObjetivos')
		}

		var competidores = ""
		if( (typeof datos.nombre1 !== 'undefined') && (typeof datos.sitioweb1 !== 'undefined') ){
			if((datos.nombre1 !== "") && (datos.sitioweb1 !== "")){
				competidores += "<li>" + datos.nombre1 + " [" + datos.sitioweb1 + "]</li>"
			}else{
				competidores += "<li>" + datos.nombre1 + " " + datos.sitioweb1 + "</li>"
			}
		}
		if( (typeof datos.nombre2 !== 'undefined') && (typeof datos.sitioweb2 !== 'undefined') ){
			if((datos.nombre2 !== "") || (datos.sitioweb2 !== "")){
				competidores += "<li>" + datos.nombre2 + " [" + datos.sitioweb2 + "]</li>"
			}
		} 
		if( (typeof datos.nombre3 !== 'undefined') && (typeof datos.sitioweb3 !== 'undefined') ){
			if((datos.nombre3 !== "") || (datos.sitioweb3 !== "")){
				competidores += "<li>" + datos.nombre3 + " [" + datos.sitioweb3 + "]</li>"
			}
		} 
		if(competidores !== ""){
			$('#dataCompetencia').empty()
			$('<ul>' + competidores + '</ul>').appendTo('#dataCompetencia')
		}

		if( (typeof datos.slogan !== 'undefined') && (datos.slogan !== "")){
			$('#dataSlogan').empty()
			$('#dataSlogan2').empty()
			$('<p>' + datos.slogan + '</p>').appendTo('#dataSlogan')
			$('<p>' + datos.slogan + '</p>').appendTo('#dataSlogan2')
		}
		if( (typeof datos.tienePaginaweb !== 'undefined') && (datos.tienePaginaweb !== "")){
			if((datos.tienePaginaweb == "on") && (datos.inputPagWebCliente !== "")){
				$('#dataPagWebAct').empty()
				$('<p>' + datos.inputPagWebCliente + '</p>').appendTo('#dataPagWebAct')
			}
		}
			
		if ((typeof datos.rsFacebook !== 'undefined') && (datos.rsFacebook !== "")){
			$('#dataFacebook').empty()
			var tmp = '<i class="fa fa-facebook-official" aria-hidden="true"></i><span class="text-mod"> '+datos.rsFacebook+'</span>'
			$(tmp).appendTo('#dataFacebook')
		}
		if( (typeof datos.rsTwitter !== 'undefined') && (datos.rsTwitter !== "")){
			$('#dataTwitter').empty()
			var tmp = '<i class="fa fa-twitter-square" aria-hidden="true"></i><span class="text-mod"> '+datos.rsTwitter+'</span>'
			$(tmp).appendTo('#dataTwitter')
		}
		if( (typeof datos.rsGooglePlus !== 'undefined') && (datos.rsGooglePlus !== "")){
			$('#dataGooglep').empty()
			var tmp = '<i class="fa fa-google-plus-square" aria-hidden="true"></i><span class="text-mod"> '+datos.rsGooglePlus+'</span>'
			$(tmp).appendTo('#dataGooglep')
		}
		var colores = ""
		if( (typeof datos.colorPrimario !== 'undefined') && (datos.colorPrimario !== "")){
			colores += '<span class="tag" style="background-color: '+datos.colorPrimario+'" id="dataColPrim">Primario</span>'
		}
		if( (typeof datos.colorSecundario !== 'undefined') && (datos.colorSecundario !== "")){
			colores += '<span class="tag" style="background-color: '+datos.colorSecundario+'" id="dataColSeco">Secundario</span>'
		}
		if( (typeof datos.colorComplemento1 !== 'undefined') && (datos.colorComplemento1 !== "")){
			colores += '<span class="tag" style="background-color: '+datos.colorComplemento1+'" id="dataColCom1">Complemento</span>'
		}
		if( (typeof datos.colorComplemento2 !== 'undefined') && (datos.colorComplemento2 !== "")){
			colores += '<span class="tag" style="background-color: '+datos.colorComplemento2+'" id="dataColCom2">Complemento</span>'
		}
		if(colores !== ""){
			$('#dataColores').empty()
			$(colores).appendTo('#dataColores')
		}
	}
}

function insertaContacto() {
	
	firebase.database().ref('/' + idReg).update({
		nombre : $('#contactoNombre').val(),
		correo : $('#contactoCorreo').val(),
		telefono : $('#contactoTelefono').val(),
		paquete : $('#paquete').val()
	})
}

function insertaEmpresa(){
	firebase.database().ref('/' + idReg).update({
		razonSocial : $('#razonSocial').val(),
		nombreComercial : $('#nombreComercial').val(), 
		giroNegocio : $('#giroNegocio').val(),
		cliente1 : $('#cliente1').val(),
		cliente2 : $('#cliente2').val(),
		cliente3 : $('#cliente3').val(),
		cliente4 : $('#cliente4').val(),
		objetivo1 : $('#objetivo1').val(),
		objetivo2 : $('#objetivo2').val(),
		objetivo3 : $('#objetivo3').val(),
		objetivo4 : $('#objetivo4').val(),
		nombre1 : $('#nombre1').val(),
		nombre2 : $('#nombre2').val(),
		nombre3 : $('#nombre3').val(),
		sitioweb1 : $('#sitioweb1').val(),
		sitioweb2 : $('#sitioweb2').val(),
		sitioweb3 : $('#sitioweb3').val(),
	})
}

function insertaIdentidad(){
	firebase.database().ref('/' + idReg).update({
		slogan : $('#slogan').val(),
		tienePaginaweb : $('#tienePaginaweb').val(),
		inputPagWebCliente : $('#inputPagWebCliente').val(),
		logo : $('#input-file-max-fs').val(),
		rsFacebook : $('#rsFacebook').val(),
		rsTwitter : $('#rsTwitter').val(),
		rsGooglePlus : $('#rsGooglePlus').val(),
		colorPrimario : $('#colorPrimario').val(),
		colorSecundario : $('#colorSecundario').val(),
		colorComplemento1 : $('#colorComplemento1').val(),
		colorComplemento2 : $('#colorComplemento2').val()
	})
}

function guardarSeccion(){
	var formElements = new Array();
	var i = 0
	var contenido = $('#content').val()
	var files = $('#inputFiles')
	console.log(contenido) 
	console.log(files)
	//for(var i=0; i < files.length; i++)
	//	console.log(files[i].name)
}
