$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
});
$("input[type='text']").on("keypress",function(event){
    if(event.which === 13)
    {
        var newtext = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + ' ' + newtext + "</li>");
    }
});
$(".fa-plus").click(function(){
    $("input").fadeToggle();
});