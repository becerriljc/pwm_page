function uploadFiles(formData) {
    $.ajax({
        url: '/upload_photos',
        method: 'post',
        data: formData,
        processData: false,
        contentType: false,
        success:function(data){
            $("#photos-input").val('');
            var allFiles = JSON.parse(data)
            var todo = ""
            for(i = 0; i < allFiles.length; i++){
                todo += '<img src="'+ allFiles.publicPath +'" class="tamMuestra">' 
            }
            $(todo).appendTo('#album')
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
    }


    uploadFiles(formData)

}


