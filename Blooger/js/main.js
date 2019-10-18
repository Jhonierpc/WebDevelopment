$(document).ready(function(){
    $navigation = $('.navigation');
    $toggleCollapse = $('.toggle-collapse');

    /* click event on toggle menu*/
    $toggleCollapse.click(function(){
        $navigation.toggleClass('collapse');
    })

})