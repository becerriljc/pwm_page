var idUser = null;

var ini = 3;

var showChar = 20;
var ellipsestext = "...";
var moretext = "more";
var lesstext = "less";

var idReg = generaID()

function agregar(menu){
	var paq = $('#paquete').val()
	if(ini < paq){
		ini++
		var addto = ""
		var menuno = menu + ini
		var btnadd = "#divbtn"
		if(menu == "menubtn"){
			
			addto = "<div class='col-md-2 col-xs-2' id='divoptMenu"+ini+"'>" +
			"<div class='row'><div class='form-group'><div class='input-group input-group-icon'>" +
			"<input type='text' class='form-control' name='optMenu"+ini+"' id='optMenu"+ini+"' value='Menu"+ini+"'>" +
			"<span class='input-group-addon text-danger' onclick='getData(\"optMenu"+ini+"\",\"\")'>"+
			"<i class='fa fa-pencil-square-o fa-3x' aria-hidden='true'></i></span></div></div></div>"+
			"<div class='row row-centered' id='divbtnoptMenu"+ini+"'><div class='col-xs-12 col-md-12'>"+
            "<button type='button' class='btn btn-xs btn-success' id='menu"+ini+"' name='menu"+ini+"' onclick='agregar(\"optMenu"+ini+"\")'>"+
            "<i class='icon md-plus' aria-hidden='true'></i>Agregar</button></div></div></div>"
			firebase.database().ref('/' + idReg).child('menus/optMenu' + ini).update({
				texto : "",
				titulo:""
			})
			btnadd = "#divmenubtn"
		}else{
			addto = "<div class='row'><div class='form-group'><div class='input-group input-group-icon'>"+
			"<input type='text' class='form-control' name='optMenu"+ini+"' id='optMenu"+ini+"' value='submenu"+ini+"'>"+
			"<span class='input-group-addon text-danger' onclick='getData(\"optMenu"+ini+"\",\""+menu+"\")'>"+
			"<i class='fa fa-pencil-square-o fa-3x' aria-hidden='true'></i></span></div></div></div>"
			firebase.database().ref('/' + idReg).child('menus').child(menu + '/optMenu' + ini).update({
				texto:"", 
				titulo:""
			})
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

function getData(id, padre){
	$('#guardaIDMenu').val(id)
	$('#padreIDMenu').val(padre)
	$('#tituloMenu').val($('#' + id).val())
	var object = cambios.child('menus/' + id);
	if(typeof object.nombre !== 'undefined'){
		$('#content').val(object.nombre)
	}else{
		$('#content').val('Esto es una prueba')
	}
	$('#listnames').val("")
	$('#album').empty()
	$('#examplePositionCenter').modal('show')

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
		if(typeof datos.menus !== 'undefined'){
			for(i = 0; i < datos.menus.length; i++){
				
			}
		}
	}
}

function insertaContacto() {
	
	firebase.database().ref('/' + idReg).update({
		nombre : $('#contactoNombre').val(),
		correo : $('#contactoCorreo').val(),
		telefono : $('#contactoTelefono').val(),
		paquete : $('#paquete').val(),
		menus:{
			optMenu1:{
				titulo:"",
				texto:""
			},
			optMenu2:{
				titulo:"",
				texto:""
			},
			optMenu3:{
				titulo:"",
				texto:""
			}
		}
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
	var i = 0
	var contenido = $('#content').val()
	var id = $('#guardaIDMenu').val()
	var tit = $('#tituloMenu').val()
	var padre = $('#padreIDMenu').val()
	console.log(padre)
	if(padre !== ""){
		id = padre + "/" + id
	}
	firebase.database().ref('/' + idReg).child('menus').child(id).update({
		texto:contenido, titulo: tit
	})
	$('#examplePositionCenter').modal('hide')
}

function uploadFiles(formData) {
    $.ajax({
        url: '/upload_photos',
        method: 'post',
        data: formData,
        processData: false,
        contentType: false,
        success:function(data){
            $("#photos-input").val('')
            var allFiles = JSON.parse(data)
            
            var todo = ""
			var id = $('#guardaIDMenu').val()
			var padre = $('#padreIDMenu').val()
			
			if(padre !== ""){
				id = padre + "/" + id
			}
            for(i = 0; i < allFiles.length; i++){
				firebase.database().ref('/' + idReg).child('menus').child(id + "/imgs").push(allFiles[i])
                todo += '<img src="uploads/'+ allFiles[i].name +'" class="tamMuestra">' 
            }
            $(todo).appendTo('#album')
			$('#listnames').val("")
        }
    })
}

function cargaArchivos() {
    
    var files = $('#photos-input').get(0).files,
        formData = new FormData();

    if (files.length === 0) {
        alert('Select atleast 1 file to upload.');
        return false;
    }

    if (files.length > 12) {
        alert('You can only upload up to 12 files.');
        return false;
    }

    for (var i=0; i < files.length; i++) {
        var file = files[i];
        formData.append('photos[]', file, file.name);
		console.log(i + 1)
    }


    //uploadFiles(formData)

}

function getInfo(objeto){
	var tit = objeto.titulo
	console.log( '<div class="row"><div class="col-xs-12 col-md-12"><h5 class="example-title">'+tit+'</h5>'+
        	'<a href="#" onclick="mostrar_ocultar("#cont'+tit+'", "#btnmo'+tit+'", 1)" id="btnmo'+tit+'">'+
            '<span class="tag tag-primary">+ mostrar</span></a></div><div class="cont" id="cont'+tit+'">'+
            '<div class="col-md-6 col-xs-6 text-justify">'+tit.texto+'</div><div class="col-md-6 col-xs-6">'+
			getImages(tit.imgs) + '</div>')
                                /*<div class="cont2" id="contsubMenu1">
                                  <div class="col-md-12 col-xs-12">
                                    <div class="row">
                                      <div class="col-md-12 col-xs-12">
                                        <h5>SubMenu1</h5>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-md-6 col-xs-6 text-justify">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                                <div class="col-md-6 col-xs-6">
                                  <img src="/images/i1.jpg" class="dataimgmos">
                                  <img src="/images/i2.jpg" class="dataimgmos">
                                  <img src="/images/i3.jpg" class="dataimgmos">
                                  <img src="/images/i4.jpg" class="dataimgmos">
                                  <img src="/images/i5.jpg" class="dataimgmos">
                                  <img src="/images/i1.jpg" class="dataimgmos">
                                  <img src="/images/i2.jpg" class="dataimgmos">
                                  <img src="/images/i3.jpg" class="dataimgmos">
                                  <img src="/images/i4.jpg" class="dataimgmos">
                                  <img src="/images/i5.jpg" class="dataimgmos">
                                  <img src="/images/i1.jpg" class="dataimgmos">
                                  <img src="/images/i2.jpg" class="dataimgmos">
                                  <img src="/images/i3.jpg" class="dataimgmos">
                                  <img src="/images/i4.jpg" class="dataimgmos">
                                  <img src="/images/i5.jpg" class="dataimgmos">
                                </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-12 col-xs-12">
                                  <a href="#" onclick="mostrar_ocultar('#contInicio', '#btnmoInicio', 2)" id="btnmoInicio">
                                    <span class="tag tag-danger">- mostrar</span>
                                  </a>
                                </div>
                              </div>
                            </div>*/
}

function getImages(){

//<img src="/images/avenger.png" class="dataimgmos">
}
