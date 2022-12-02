$( document ).ready(function() {

 $('.header_profil').click(function(){
    $('.headeer_menu_mob').addClass('headeer_menu_mob_active')
})

$(document).mouseup(function (e) {
    var container = $("headeer_menu_mob");
    if (container.has(e.target).length === 0){
        $('.headeer_menu_mob').removeClass('headeer_menu_mob_active')
    }

})
})