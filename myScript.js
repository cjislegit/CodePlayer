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

 });