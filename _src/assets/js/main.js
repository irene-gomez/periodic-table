'use strict';

const collapsablePlusAlkaliEl = document.querySelector('.plus__alkali');
const collapsablePlusAlkalineEl = document.querySelector('.plus__alkaline');
const collapsablePlusTransitionEl = document.querySelector('.plus__transition');
const collapsablePlusBasicEl = document.querySelector('.plus__basic');
const collapsablePlusSemiEl = document.querySelector('.plus__semi');
const collapsablePlusPolyatomicEl = document.querySelector('.plus__poliatomic');
const collapsablePlusNonMetalEl = document.querySelector('.plus__nonmetal');
const collapsablePlusNobleEl = document.querySelector('.plus__noble');
const collapsablePlusLanthanideEl = document.querySelector('.plus__lanthanide');
const collapsablePlusActinideEl = document.querySelector('.plus__actinide');
const collapsablePlusUnknowEl = document.querySelector('.plus__unknow');

function handlerClickPlus(e) {
    const moreInfoEl = e.currentTarget;
    // Madre del icono
    const collapsableInfo = moreInfoEl.parentElement;
    // Tía del icono
    const panelToShow = collapsableInfo.nextElementSibling;
    // Svg del icono
    const iconEl = moreInfoEl.firstElementChild;

    // Mostrar simbolo menos para cerrar panel
    if (iconEl.innerHTML === '<use xlink:href="#ico-more"></use>'){
        iconEl.innerHTML = '<use xlink:href="#ico-less"></use>'
    } else {
        iconEl.innerHTML = '<use xlink:href="#ico-more"></use>'
    }
    
    // Mostrar panel oculto
    panelToShow.classList.toggle('collapsable--hide');
}

collapsablePlusAlkaliEl.addEventListener('click', handlerClickPlus);
collapsablePlusAlkalineEl.addEventListener('click', handlerClickPlus);
collapsablePlusTransitionEl.addEventListener('click', handlerClickPlus);
collapsablePlusBasicEl.addEventListener('click', handlerClickPlus);
collapsablePlusSemiEl.addEventListener('click', handlerClickPlus);
collapsablePlusPolyatomicEl.addEventListener('click', handlerClickPlus);
collapsablePlusNonMetalEl.addEventListener('click', handlerClickPlus);
collapsablePlusNobleEl.addEventListener('click', handlerClickPlus);
collapsablePlusLanthanideEl.addEventListener('click', handlerClickPlus);
collapsablePlusActinideEl.addEventListener('click', handlerClickPlus);
collapsablePlusUnknowEl.addEventListener('click', handlerClickPlus);























// var $ventana = $(window) ,
//     $body = $("body") ,
//     $elemento = $(".gridItem") ;





/*
$elemento.click(crearElementoGrande);

function crearElementoGrande() {
    var datosElemento = $(this).text().split(" ") ;
    var atomicNumber = datosElemento[12];
    var atomicWeight = datosElemento[24];
    var symbol = datosElemento[36];
    var nameElement = datosElemento[48];
    
    var nombreClase = $(this).attr("class").split(" ");
    var colorElemento = nombreClase[2];
    
    //CREAR <DIV> ELEMENTO GRANDE
    if (nombreClase[3] == "textLight") {
        var $elementoGrande = $('<div class="backdropModal"><div class="bigElement ' + colorElemento + ' textLight"><p class="atomicNumber">' + atomicNumber + '</p><p class="atomicWeight">' + atomicWeight + '</p><p class="symbol">' + symbol + '</p><p class="nameElement">' + nameElement + '</p></div><button class="btn-close"></button></div>');
    } else {
        if (nombreClase[1] == "element5771" || nombreClase[1] == "element89103") {
            console.log("aquí no se dibuja nada")
        } else {
            var $elementoGrande = $('<div class="backdropModal"><div class="bigElement ' + colorElemento + '"><p class="atomicNumber">' + atomicNumber + '</p><p class="atomicWeight">' + atomicWeight + '</p><p class="symbol">' + symbol + '</p><p class="nameElement">' + nameElement + '</p></div><button class="btn-close"></button></div>');
        }
    }    
    $body.prepend($elementoGrande);
}



$body.on("click", ".backdropModal > div", detenerBubbling);

function detenerBubbling(e) {
    e.stopPropagation();
}



$body.on("click", ".backdropModal, .btn-close", cerrarElemento);

function cerrarElemento() {
    $(".backdropModal").fadeOut(250,
        function() {
            $(this).remove() ;
    });
}
*/