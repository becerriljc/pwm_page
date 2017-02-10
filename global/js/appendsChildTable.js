var ini = 3;

var showChar = 20;
var ellipsestext = "...";
var moretext = "more";
var lesstext = "less";


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
	$('#examplePositionCenter').modal('show')
	$('#content').val('Esto es una prueba')
	$('.upload-instructions').appendto('.uploader-inline')
}


function getPaginaweb(){
	var isChecked = $("#tienePaginaweb").is(":checked") ? 1:0; 
    
    if(isChecked){
    	$('#divpaginawebactual').show()
    }else{
    	$('#divpaginawebactual').hide()
    }
}
