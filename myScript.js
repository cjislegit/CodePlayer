$('input').click(function(){
    $(this).toggleClass('selected');
    displayColumn($(this).attr('id'));
});

function displayColumn(buttonId){
    switch(buttonId){
        case 'htmlButton':
        $('#html').toggle();
        break;
        case 'cssButton':
        $('#css').toggle();
        break;
        case 'javascriptButton':
        $('#javascript').toggle();
        break;
        case 'outputButton':
        $('#output').toggle();
        break;
    }
}

$('textarea').on('change keyup paste', function() { 
    update();
 });

 function update(){
     $('iframe').contents().find("html").html("<html><head><style type='text/css'>" + $('#cssText').val() + "</style></head><body>" + $('#htmlText').val() + "</body></html>");
     document.getElementById('outputText').contentWindow.eval($('#javascriptText').val());
     
 }