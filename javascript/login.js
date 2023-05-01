const btnEnviar = document.querySelector(".btnConfirmeLogin")
const inptnomeDeUsuarioLogin = document.getElementById("nomeDeUsuarioLogin")
const inptsenhaDeUsuarioLogin = document.getElementById("senhaDeUsuarioLogin")

function Login(){
    if(inptnomeDeUsuarioLogin.value !== "" && inptsenhaDeUsuarioLogin !== ""){
        if(inptnomeDeUsuarioLogin.value == "luciaHelena" && inptsenhaDeUsuarioLogin.value == "asd"){
            document.querySelector(".secFormLoginUser").style.display = "none"
        }
        else{
            alert("algo errado")
        }
    }
}
btnEnviar.addEventListener("click", Login)

