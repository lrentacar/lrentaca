const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})




var indice=0;
$(".paginacion li").eq(indice).css("background-color","orange");
$(".paginacion li").click(function(){
    
    indice=$(this).index();
    $(".paginacion li").css("background-color","yellow");
    $(this).css("background-color","orange");
    $(".slide").hide();
    $(".slide").eq(indice).fadeIn();
});
setInterval(function(){
    indice++;
    if(indice>2){
        indice=0;
    }
    $(".slide").hide();
    $(".slide").eq(indice).fadeIn();
    $(".paginacion li").css("background-color","yellow");
    $(".paginacion li").eq(indice).css("background-color","orange");
},7000);
$(".derecha").click(function(){
    indice++;
    if(indice>2){
        indice=0;
    }
    $(".slide").hide();
    $(".slide").eq(indice).fadeIn();
    $(".paginacion li").css("background-color","yellow");
    $(".paginacion li").eq(indice).css("background-color","orange");
});
$(".izquierda").click(function(){
    indice--;
    if(indice<0){
        indice=2;
    }
    $(".slide").hide();
    $(".slide").eq(indice).fadeIn();
    $(".paginacion li").css("background-color","yellow");
    $(".paginacion li").eq(indice).css("background-color","orange");
});