const inputNomeLivro = document.getElementById("inputEmprestimoLivro")

const inputNomeAluno = document.getElementById("inputEmprestimoNomeAluno")


inputNomeAluno.addEventListener("input", (event)=>{
    fetch("../json/alunos.json").then(respAluno =>{
        respAluno.json().then((dados) =>{
            dados.alunosGerais.forEach((aluno) =>{

                const inputname = event.target.value.trim()
                // console.log({aluno})
                const nome = aluno.nomeDoAluno

                // const teste = nomes.indexOf(inputname) != -1 ? 'ok' : 'não ok'
                
                const teste = nome.includes(inputname);
                if(teste){
                    const inputSerie = aluno.serie
                    const inputTurma = aluno.turma
                    document.getElementById('inputTurma').value = inputTurma;
                }
                
               
                console.log(inputname)
                console.log(teste)
                


   
                // nomes.forEach(nome =>{
                //     console.log(nome.textContent == input )
                // // })
                // console.log(respAluno)
                // console.log(dados)
                // console.log(aluno)
                // console.log({nomes})
            })
        })
    })
})















// function atualizarDatas() {
//     const hoje = new Date();
  
//     const data14DiasDepois = new Date(hoje.getTime() + 15 * 24 * 60 * 60 * 1000);
  
//     const diaAtual = hoje.getDate().toString().padStart(2, '0');
//     const mesAtual = (hoje.getMonth() + 1).toString().padStart(2, '0');
//     const anoAtual = hoje.getFullYear();
  
//     const dia14DiasDepois = data14DiasDepois.getDate().toString().padStart(2, '0');
//     const mes14DiasDepois = (data14DiasDepois.getMonth() + 1).toString().padStart(2, '0');
//     const ano14DiasDepois = data14DiasDepois.getFullYear();
  
//     const dataAtualStr = `${diaAtual}/${mesAtual}/${anoAtual}`;
//     const data14DiasDepoisStr = `${dia14DiasDepois}/${mes14DiasDepois}/${ano14DiasDepois}`;
  
//     document.getElementById("inputEmprestimoData").value = data14DiasDepoisStr;
//   }
// atualizarDatas();

// const btnEnviar =document.getElementById("btnConfirmeEmprestimo")

// btnEnviar.onclick = ()=>{
//     if(
//         document.getElementById("inputEmprestimoLivro").value != "" && document.getElementById("inputEmprestimoNomeAluno").value != ""){
//             alert(document.getElementById("inputEmprestimoLivro").value)
//             alert(document.getElementById("inputEmprestimoNomeAluno").value)
//     }
//     else{
//         alert("Preencha todos os campos")
//     }
// }