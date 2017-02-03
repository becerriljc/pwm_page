var noPages = 3;

function agregar(id) {
	var paquete = $('#paquete').val()
	if(noPages < paquete){
		noPages++
	    var id = id
	    var input = ''
	    var opt = ''
	    if(id == 'menubtn'){
	    	input = '<div class="col-md-1 col-xs-1" id="divmenu'+noPages+'" name="divmenu'+noPages+'"><div class="row">'+
	    	'<input type="text" class="form-control" name="optInput'+noPages+'" id="optInput'+noPages+'" value="Menu'+noPages+'">'+
	    	'</div><div class="row" id="divbtnmenu'+noPages+'">'+
	    	'<button type="button" onclick="agregar(\'menu'+noPages+'\')" class="btn btn-xs btn-success" id="menu'+noPages+'" name="menu'+noPages+'">'+
	    	'<i class="icon md-plus" aria-hidden="true"></i>Agregar</button></div></div>'
	    	opt = '#divmenubtn'
	    }else{
	    	var div = "div"
		    var opt = "#divbtn"+id
		    var input = '<div class="row"><input type="text" class="form-control" name="optsubMenu'+id+
		    '[]" id="optsubMenu'+id+'[]" value="Submenu"></div>'
	    }
	    $( input ).insertBefore( $( opt ) );
	}
}
