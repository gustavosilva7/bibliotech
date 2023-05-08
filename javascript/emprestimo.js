const inputNomeLivro = document.getElementById("inputEmprestimoLivro")
const divLivro = document.getElementById("divNomeLivro");
const modalOptionsLivro = document.createElement("div");


modalOptionsLivro.style.display = "flex";
modalOptionsLivro.style.flexDirection = "column";
modalOptionsLivro.style.height = "150px";
modalOptionsLivro.style.width = "100%";
modalOptionsLivro.style.position = "absolute";
modalOptionsLivro.style.top = "100%";
modalOptionsLivro.style.background = "#fff";


inputNomeLivro.addEventListener("input", (event) => {
    const inputname = event.target.value.trim();
    fetch("../json/livros.json").then(respLivro => {
        respLivro.json().then((dados) => {
            modalOptionsLivro.innerHTML = "";
            dados.livrosGerais.forEach((livro) => {
                const nome = livro.livro;
                const teste = nome.toLowerCase().includes(inputname.toLowerCase());


                if (teste) {
                    const opBook = document.createElement("a");
                    
                    opBook.style.width = "100%";
                    opBook.style.fontSize = "60%"
                    
                    opBook.innerText = `${livro.livro} || ${livro.tombo} || ${livro.autor}`;
                    
                    modalOptionsLivro.appendChild(opBook);
                    opBook.addEventListener("click", () => {
                        inputNomeLivro.value = livro.livro;
                        // document.getElementById('inputEmprestimoTombo').value = livro.tombo;
                        document.getElementById('inputEmprestimoAutor').value = livro.autor;
                        modalOptionsLivro.style.display = "none";
                    });
                }
            });
            divLivro.appendChild(modalOptionsLivro);
            modalOptionsLivro.style.display = "flex";
        });
    });
});

document.addEventListener("click", (event) => {
    if (!event.target.matches("#inputEmprestimoNomeAluno") && !event.target.matches("option")) {
        modalOptionsLivro.style.display = "none";
    }
});


const inputNomeAluno = document.getElementById("inputEmprestimoNomeAluno");
const divNome = document.getElementById("divNomeDoAluno");
const modalOptions = document.createElement("div");


modalOptions.style.display = "flex";
modalOptions.style.flexDirection = "column";
modalOptions.style.height = "150px";
modalOptions.style.width = "100%";
modalOptions.style.position = "absolute";
modalOptions.style.top = "100%";
modalOptions.style.background = "#fff";


inputNomeAluno.addEventListener("input", (event) => {
    const inputname = event.target.value.trim();
    fetch("../json/alunos.json").then(respAluno => {
        respAluno.json().then((dados) => {
            modalOptions.innerHTML = "";
            dados.alunosGerais.forEach((aluno) => {
                const nome = aluno.nomeDoAluno;
                const teste = nome.toLowerCase().includes(inputname.toLowerCase());


                if (teste) {
                    const options = document.createElement("a");
                    
                    options.style.width = "100%";
                    options.style.fontSize = "60%"
                    
                    options.innerText = `${aluno.nomeDoAluno} || ${aluno.turma} || ${aluno.serie}`;
                    
                    modalOptions.appendChild(options);
                    options.addEventListener("click", () => {
                        inputNomeAluno.value = aluno.nomeDoAluno;
                        document.getElementById('inputTurma').value = aluno.turma;
                        document.getElementById('inputSerie').value = aluno.serie;
                        modalOptions.style.display = "none";
                    });
                }
            });
            divNome.appendChild(modalOptions);
            modalOptions.style.display = "flex";
        });
    });
});

document.addEventListener("click", (event) => {
    if (!event.target.matches("#inputEmprestimoNomeAluno") && !event.target.matches("option")) {
        modalOptions.style.display = "none";
    }
});


const btnEnviarEmpres = document.getElementById("btnConfirmeEmprestimo")

btnEnviarEmpres.onclick = ()=>{
    if(
        document.getElementById("inputEmprestimoLivro").value != "" && document.getElementById("inputEmprestimoNomeAluno").value != ""){
            alert(document.getElementById("inputEmprestimoLivro").value)
            alert(document.getElementById("inputEmprestimoNomeAluno").value)
    }
    else{
        alert("Preencha todos os campos")
    }
}