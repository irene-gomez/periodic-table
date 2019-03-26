var $ventana = $(window) ,
    $body = $("body") ,
    $elemento = $(".gridItem") ;





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

//# sourceMappingURL=main.js.map
