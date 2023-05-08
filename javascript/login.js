const btnEnviar = document.getElementById("btnenviarlogin")
const inptnomeDeUsuarioLogin = document.getElementById("nomeDeUsuarioLogin")
const inptsenhaDeUsuarioLogin = document.getElementById("senhaDeUsuarioLogin")

function Login(){
    if(inptnomeDeUsuarioLogin.value !== "" && inptsenhaDeUsuarioLogin !== ""){
        if(inptnomeDeUsuarioLogin.value == "luciaHelena" && inptsenhaDeUsuarioLogin.value == "asd"){
            // document.querySelector(".secFormLoginUser").style.display = "none"
            location.href = "./bibliotech.html"
        }
        else{
            alert("algo errado")
        }
    }
}
// console.log(btnEnviar)
btnEnviar.addEventListener("click", Login)

