$('input').click(function(){
    $(this).toggleClass('selected');
    alert($(this).attr('id'));
})

function displayColumn(buttonId){
    switch(buttonId){
        case 'htmlButton':
        break;
    }
}