document.addEventListener('keydown', function(evento){
    var raquete = document.getElementById("raquete_um");

    if (evento.code == "KeyW"){
        raquete.style.top = raquete.offsetTop - 1 + "px";
    }else if (evento.code == "KeyS"){
        raquete.style.top = raquete.offsetTop + 1 + "px";
    }










})