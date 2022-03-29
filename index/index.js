var man_status = false;
var woman_status = false;
var girl_status = false;
var boy_status = false;
var new_status = false;
var sale_status = false;

$(document).ready(function(){
    $(".man").click(manClick); 
    $(".woman").click(womanClick); 
    $(".girl").click(girlClick); 
    $(".boy").click(boyClick); 
    $(".new").click(newClick); 
    $(".sale").click(saleClick); 
    /* responsive */
    $("#toggle-menu").click(function(){
        $('.container').slideToggle();
    });
});

function resetMenuClick(){
    man_status = false;
    woman_status = false;
    girl_status = false;
    boy_status = false;
    new_status = false;
    sale_status = false;
}
function resetMenuChoose(){
    $(".man").removeClass("choose-this");
    $(".woman").removeClass("choose-this");
    $(".girl").removeClass("choose-this");
    $(".boy").removeClass("choose-this");
    $(".new").removeClass("choose-this");
    $(".sale").removeClass("choose-this");
}

function manClick(){
    if(man_status){
        $(".sub-menu").addClass("close-sub-menu");
        $(".man-menu").removeClass("open-sub-menu");
        $(".man").removeClass("choose-this");
        man_status = false;
    }else{
        $(".sub-menu").removeClass("close-sub-menu");
        $(".man-menu").addClass("open-sub-menu");
        resetMenuChoose();
        $(".man").addClass("choose-this");
        resetMenuClick();
        man_status = true;
    }
}
function womanClick(){
    if(woman_status){
        $(".sub-menu").addClass("close-sub-menu");
        $(".woman-menu").removeClass("open-sub-menu");
        $(".woman").removeClass("choose-this");
        woman_status = false;
    }else{
        $(".sub-menu").removeClass("close-sub-menu");
        $(".woman-menu").addClass("open-sub-menu");
        resetMenuChoose();
        $(".woman").addClass("choose-this");
        resetMenuClick();
        woman_status = true;
    }
}
function girlClick(){
    if(girl_status){
        $(".sub-menu").addClass("close-sub-menu");
        $(".girl-menu").removeClass("open-sub-menu");
        $(".girl").removeClass("choose-this");
        girl_status = false;
    }else{
        $(".sub-menu").removeClass("close-sub-menu");
        $(".girl-menu").addClass("open-sub-menu");
        resetMenuChoose();
        $(".girl").addClass("choose-this");
        resetMenuClick();
        girl_status = true;
    }
}
function boyClick(){
    if(boy_status){
        $(".sub-menu").addClass("close-sub-menu");
        $(".boy-menu").removeClass("open-sub-menu");
        $(".boy").removeClass("choose-this");
        boy_status = false;
    }else{
        $(".sub-menu").removeClass("close-sub-menu");
        $(".boy-menu").addClass("open-sub-menu");
        resetMenuChoose();
        $(".boy").addClass("choose-this");
        resetMenuClick();
        boy_status = true;
    }
}
function newClick(){
    if(new_status){
        $(".sub-menu").addClass("close-sub-menu");
        $(".new-menu").removeClass("open-sub-menu");
        $(".new").removeClass("choose-this");
        new_status = false;
    }else{
        $(".sub-menu").removeClass("close-sub-menu");
        $(".new-menu").addClass("open-sub-menu");
        resetMenuChoose();
        $(".new").addClass("choose-this");
        resetMenuClick();
        new_status = true;
    }
}
function saleClick(){
    if(sale_status){
        $(".sub-menu").addClass("close-sub-menu");
        $(".sale-menu").removeClass("open-sub-menu");
        $(".sale").removeClass("choose-this");
        sale_status = false;
    }else{
        $(".sub-menu").removeClass("close-sub-menu");
        $(".sale-menu").addClass("open-sub-menu");
        resetMenuChoose();
        $(".sale").addClass("choose-this");
        resetMenuClick();
        sale_status = true;
    }
}

