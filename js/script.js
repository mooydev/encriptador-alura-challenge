
var input = document.querySelector("#text-to").value.toLowerCase();
var btencriptar = document.querySelector("#bt-encript");
var btdesencriptar = document.querySelector("#bt-desencript");
var mensajebox = document.querySelector("#message");
var copiar = document.querySelector("#bt-copy");

//Encripta
btencriptar.addEventListener("click", function encriptar (event){
    event.preventDefault();

    var input = document.querySelector("#text-to").value;

    var txtToEncript = input.replace(/e/igm,'enter');
    var txtToEncript = txtToEncript.replace(/o/igm,'ober');
    var txtToEncript = txtToEncript.replace(/i/igm,'imes');
    var txtToEncript = txtToEncript.replace(/a/igm,'ai');
    var txtToEncript = txtToEncript.replace(/u/igm,'ufat');

    document.querySelector("#message").innerHTML = txtToEncript;

    console.log(txtToEncript);
    console.log("funciona");
    mostrar();
});


//Desencripta
btdesencriptar.addEventListener("click", function desencriptar (event){
    event.preventDefault();

    var input = document.querySelector("#text-to").value;

    var txtToEncript = input.replace(/enter/igm,'e');
    var txtToEncript = txtToEncript.replace(/ober/igm,'o');
    var txtToEncript = txtToEncript.replace(/imes/igm,'i');
    var txtToEncript = txtToEncript.replace(/ai/igm,'a');
    var txtToEncript = txtToEncript.replace(/ufat/igm,'u');

    document.querySelector("#message").innerHTML = txtToEncript;

    console.log("este tambien funciona");
    mostrar();
}
);

//copiar
copiar.addEventListener("click", function clipboard (event){
    event.preventDefault();

    msjaCopiar = document.querySelector("#message");
    msjaCopiar.select();
    navigator.clipboard.writeText(message.value)
    alert("Se copio al portapapeles")
});

//Desaparece la img del candado
function mostrar(){

    document.querySelector("#div-aparece").style.display="block";
    document.querySelector("#div-desaparece").style.display="none";

}