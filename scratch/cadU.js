function verificarPerfil(){

let perfil = document.getElementById("perfil").value;

let email = document.getElementById("emailBox");
let senha = document.getElementById("senhaBox");

if(
perfil === "supervisor" ||
perfil === "administrador" ||
perfil === "auditor"
){
email.classList.remove("hidden");
email.classList.add("show");

senha.classList.remove("hidden");
senha.classList.add("show");

}else{

email.classList.remove("show");
email.classList.add("hidden");

senha.classList.remove("show");
senha.classList.add("hidden");
}

}

window.onload = verificarPerfil;