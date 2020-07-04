//Limitar el area de texto para datos relevantes en 5 lineas
var contenidotextarea="";
var campodatosrelev=document.getElementById("exampleFormControlTextarea1");
campodatosrelev.addEventListener("keypress",function(){
    verificarlineas(this);
},true);

function verificarlineas(obj){
    var contenidolin=obj.value.split("\n");
    var contenidocar=obj.value.length+1;
    console.log(contenidocar);
    console.log(obj.clientWidth);
    console.log(obj.clienteWidth-24);
        if (contenidolin.length>5 || contenidocar>(obj.clientWidth-24)/9.59*5.0){
            obj.value=contenidotextarea;
        }
        else{
            contenidotextarea=obj.value;
        }
}