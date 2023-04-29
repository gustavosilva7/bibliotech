const btnEnviar = document.querySelector(".btnConfirmeLogin")
const inptnomeDeUsuarioLogin = document.getElementById("nomeDeUsuarioLogin")
const inptsenhaDeUsuarioLogin = document.getElementById("senhaDeUsuarioLogin")

btnEnviar.addEventListener("click", ()=>{
    if(inptnomeDeUsuarioLogin.value !== "" && inptsenhaDeUsuarioLogin !== ""){
        const inputUserValue = inptnomeDeUsuarioLogin.value
        const inputPassValue = inptsenhaDeUsuarioLogin.value
        if(inputUserValue == "luciaHelena" && inputPassValue == "eeepLucia"){
            alert("parabens vc esta logado")
            document.querySelector(".secFormLoginUser").style.display = "none"
        }
    }
})