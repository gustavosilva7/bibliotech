const list = document.querySelector(".livroAcervo")
function formEditLivro() {
  const dialogAcervoEdit = document.createElement("dialog")
  dialogAcervoEdit.classList.add("dialogAcervoEdit")

  const headerDialogAcervo = document.createElement("div")
  const divTitle = document.createElement("div")
  const divBack = document.createElement("div")

  const titleAcervoEdit = document.createElement("h1")
  titleAcervoEdit.innerText = "Editar Livro"
  const backAcervoEdit = document.createElement("button")
  backAcervoEdit.innerText = "X"
  backAcervoEdit.style.height = "45px"
  backAcervoEdit.style.width = "45px"
  backAcervoEdit.style.border = "none"
  backAcervoEdit.style.background = "#fff"
  backAcervoEdit.style.boxShadow = "1px 3px 9px #999"
  backAcervoEdit.style.borderRadius = "50%"

  headerDialogAcervo.style.width = "100%"
  headerDialogAcervo.style.display = "flex"
  headerDialogAcervo.style.flexDirection = "row"
  divTitle.style.width = "100%"
  divTitle.style.display = "flex"
  divTitle.style.justifyContent = "center"
  divTitle.style.alignItems = "center"
  divBack.style.width = "10%"
  divBack.style.position = "absolute"
  divBack.style.zIndex = "1"
  divBack.style.right = "0"
  divBack.style.top = "2%"

  titleAcervoEdit.style.fontSize = "130%"
  backAcervoEdit.style.fontSize = "160%"

  divTitle.append(titleAcervoEdit)
  divBack.append(backAcervoEdit)
  headerDialogAcervo.append(divTitle, divBack)


  const formAcervoEdit = document.createElement("form")
  formAcervoEdit.classList.add("formAcervoEdit")

  const divNameEdit = document.createElement("div")
  divNameEdit.style.width = "100%"
  divNameEdit.style.height = "15%"
  divNameEdit.style.display = "flex"
  divNameEdit.style.flexDirection = "column"

  const labelNameEdit = document.createElement("label")
  labelNameEdit.style.fontSize = "115%"
  labelNameEdit.textContent = "Nome do livro:"
  const nameEdit = document.createElement("input")
  nameEdit.setAttribute("name", "name-livro")

  // console.log(nameEdit.name)
  nameEdit.style.height = "55%"
  nameEdit.style.width = "100%"
  nameEdit.style.border = "none"
  nameEdit.style.borderRadius = "20px"
  nameEdit.style.boxShadow = "0 0 3px #000"
  

  

  divNameEdit.append(labelNameEdit, nameEdit)

  // div dupla
  const divAutorTomboEdit = document.createElement("div")
  divAutorTomboEdit.style.width = "100%"
  divAutorTomboEdit.style.display = "flex"
  divAutorTomboEdit.style.height = "15%"
  divAutorTomboEdit.style.gap = "2%"



  // div unica
  const divAutor = document.createElement("div")
  const labelAutorEdit = document.createElement("label")
  labelAutorEdit.textContent = "Autor do livro:"
  const autorEdit = document.createElement("input")
  autorEdit.setAttribute("name", "autor-livro")
  autorEdit.style.height = "55%"
  autorEdit.style.width = "100%"
  autorEdit.style.border = "none"
  autorEdit.style.borderRadius = "20px"
  autorEdit.style.boxShadow = "0 0 3px #000"

 
  divAutor.style.width = "50%"
  divAutor.append(labelAutorEdit, autorEdit)

  // div unica
  const divTombo = document.createElement("div")
  const labelTomboEdit = document.createElement("label")
  labelTomboEdit.textContent = "Tombo do livro:"
  const tomboEdit = document.createElement("input")
  tomboEdit.setAttribute("name", "tombo-livro")
  tomboEdit.style.height = "55%"
  tomboEdit.style.width = "100%"
  tomboEdit.style.border = "none"
  tomboEdit.style.borderRadius = "20px"
  tomboEdit.style.boxShadow = "0 0 3px #000"
  divTombo.style.width = "50%"
  divTombo.append(labelTomboEdit, tomboEdit)
  
  divAutorTomboEdit.append(divAutor, divTombo)

  ////////////////////

  // div dupla
  const divChegadaLancamentoEdit = document.createElement("div")
  divChegadaLancamentoEdit.style.width = "100%"
  divChegadaLancamentoEdit.style.display = "flex"
  divChegadaLancamentoEdit.style.height = "15%"
  divChegadaLancamentoEdit.style.gap = "2%"


  // div unica
  const divChegada = document.createElement("div")
  const labelChegadaEdit = document.createElement("label")
  labelChegadaEdit.textContent = "Data de chegada:"
  const chegadaEdit = document.createElement("input")
  chegadaEdit.setAttribute("name", "chegada-livro")
  chegadaEdit.style.height = "55%"
  chegadaEdit.style.width = "100%"
  chegadaEdit.style.border = "none"
  chegadaEdit.style.borderRadius = "20px"
  chegadaEdit.style.boxShadow = "0 0 3px #000"

  
  divChegada.style.width = "50%"
  divChegada.append(labelChegadaEdit, chegadaEdit)

  // div unica
  const divLancamento = document.createElement("div")
  const labelLancamentoEdit = document.createElement("label")
  labelLancamentoEdit.textContent = "Data de lançamento:"
  const lancamentoEdit = document.createElement("input")
  lancamentoEdit.setAttribute("name", "lancamento-livro")
  lancamentoEdit.style.height = "55%"
  lancamentoEdit.style.width = "100%"
  lancamentoEdit.style.border = "none"
  lancamentoEdit.style.borderRadius = "20px"
  lancamentoEdit.style.boxShadow = "0 0 3px #000"

  divLancamento.style.width = "50%"
  divLancamento.append(labelLancamentoEdit, lancamentoEdit)

  divChegadaLancamentoEdit.append(divChegada, divLancamento)

  ////////////////////

  // div dupla
  const divVolumeEditoraEdit = document.createElement("div")
  divVolumeEditoraEdit.style.width = "100%"
  divVolumeEditoraEdit.style.display = "flex"
  divVolumeEditoraEdit.style.height = "15%"
  divVolumeEditoraEdit.style.gap = "2%"

  // div unica
  const divVolume = document.createElement("div")
  const labelVolumeEdit = document.createElement("label")
  labelVolumeEdit.textContent = "Volume do livro:"
  const volumeEdit = document.createElement("input")
  volumeEdit.setAttribute("name", "volume-livro")
  volumeEdit.style.height = "55%"
  volumeEdit.style.width = "100%"
  volumeEdit.style.border = "none"
  volumeEdit.style.borderRadius = "20px"
  volumeEdit.style.boxShadow = "0 0 3px #000"

  divVolume.style.width = "50%"
  divVolume.append(labelVolumeEdit, volumeEdit)

  // div unica
  const divEditora = document.createElement("div")
  const labelEditoraEdit = document.createElement("label")
  labelEditoraEdit.textContent = "Editora do livro:"
  const editoraEdit = document.createElement("input")
  editoraEdit.setAttribute("name", "editora-livro")
  editoraEdit.style.height = "55%"
  editoraEdit.style.width = "100%"
  editoraEdit.style.border = "none"
  editoraEdit.style.borderRadius = "20px"
  editoraEdit.style.boxShadow = "0 0 3px #000"


  divEditora.style.width = "50%"
  divEditora.append(labelEditoraEdit, editoraEdit)

  divVolumeEditoraEdit.append(divVolume, divEditora)


  const divInputEnviarEdit = document.createElement("div")
  divInputEnviarEdit.style.position = "relative"
  divInputEnviarEdit.style.height = "20%"
  divInputEnviarEdit.style.width = "100%"
  const inputEnviarEdit = document.createElement("button")
  inputEnviarEdit.classList.add("inputEnviarEdit")
  inputEnviarEdit.innerText = "Enviar"

  divInputEnviarEdit.append(inputEnviarEdit)

  formAcervoEdit.append(divNameEdit, divAutorTomboEdit, divChegadaLancamentoEdit, divVolumeEditoraEdit, divInputEnviarEdit)
  dialogAcervoEdit.append(headerDialogAcervo, formAcervoEdit)
  list.appendChild(dialogAcervoEdit)
  dialogAcervoEdit.showModal()

  backAcervoEdit.onclick = () =>{
    dialogAcervoEdit.close()
  }
}


let listCont = ''
// let idSection = 0
fetch("../json/acervo.json").then((resposta) => {
  resposta.json().then((dados) => {
    dados.livrosGerais.forEach((livro) => {


      listCont +=
        `<section class="sectionLivro"
            style=" display: flex; flex-direction: row; font-weight: 600; background-color: #fff; width: 100%; height: auto; border-radius: 20px;">
                    <div class="d1" onclick="editar()" style="display: flex; justify-content: center; align-items: center; width: 5%; height: 100%; background-color: #05704F; border-radius: 20px 0 0 20px" >
                        <img src="img/editAcervo.png">
                    </div>
                    <div class="d2" style="display: flex; flex-direction: column; width: 90%; height: 100%; padding: 0 2%">    
                        <div style="display: flex; flex-direction: row; align-items: center;  gap: 10px; height: 40px">
                            <p class="p">Nome do Livro: <span>${livro.nomeDoLivro}</span></p>
                            <p class="p">Autor do Livro: <span>${livro.nomeDoAutor}</span></p>
                        </div>
                        <div style="display: none; flex-direction: row; gap: 2%;">
                            <p class="p">Tombo do Livro: <span>${livro.tomboDoLivro}</span></p>
                            <p class="p">Data de Chegada: <span>${livro.dataChegada}</span></p>
                            <p class="p">Data de Lançamento: <span>${livro.Lancamento}</span></p>
                            <p class="p">Volume: <span>${livro.volume}</span></p>
                            <p class="p">Editora: <span>${livro.editora}</span></p>      
                        </div>    
                    </div>
                    <div class="d3" style="width: 5%; height: 100%;">
                        <button class="btnMaisInfor" style="width: 100%; height: 100%; background: transparent; border: none;">
                            <img src="img/pInfor.png">
                        </button>
                    </div>
            </section>`

      list.innerHTML = listCont

      const editBtns = document.querySelectorAll(".d1")
      editBtns.forEach(btnEdit => {
        btnEdit.addEventListener("click", (event) => {
          // verifique se o elemento btnEdit é um nó DOM válido antes de chamar closest()
          if (typeof btnEdit.closest === "function") {
            const sectionLivro = btnEdit.closest(".sectionLivro")
            const span = sectionLivro.querySelector(".d2 div:nth-child(1) p:nth-child(1) span")

            formEditLivro()

          }
        })
      })


      function toggleDisplay(btn) {
        const section = btn.closest(".sectionLivro");
        const div2 = section.querySelector('.d2 div:last-child');
        const d3 = section.querySelector('.d3 button img');
        if (div2.style.display === 'none') {
          div2.style.display = 'flex';
          div2.style.height = "45px"
          d3.style.transform = "rotate(180deg)"
        } else {
          div2.style.display = 'none';
          d3.style.transform = "rotate(0deg)"
        }
        // console.log("ola")
      }
      const btns = document.querySelectorAll(".btnMaisInfor");
      btns.forEach(btn => {
        btn.addEventListener('click', () => toggleDisplay(btn));
      });
    })
  })
})


const barraDePesquisaAcervo = document.querySelector('#pesquisaAcervo')
const livroAcervo = document.querySelector(".livroAcervo")


const totalBooks = document.getElementById("totalBooks")

barraDePesquisaAcervo.addEventListener('input', function (event) {
  const inputValue = event.target.value.trim().toLowerCase()

  Array.from(livroAcervo.children)
    .filter(livroUnico => {
      const spans = livroUnico.querySelectorAll(".d2 span");
      for (const span of spans) {
        if (span.textContent.toLowerCase().includes(inputValue)) {
          return true;
        }
      }
      return false;
    })
    .forEach(livroUnico => {
      livroUnico.style.display = "flex";

      let totalB = ''
      const elementosFlex = Array.from(livroAcervo.children).filter(livroUnico => livroUnico.style.display === "flex");
      totalB += `<h2>${elementosFlex.length}</h2>`
      totalBooks.innerHTML = totalB
    })


  Array.from(livroAcervo.children)
    .filter(livroUnico => {
      const spans = livroUnico.querySelectorAll(".d2 span");
      for (const span of spans) {
        if (span.textContent.toLowerCase().includes(inputValue)) {
          return false;
        }
      }
      return true;
    })
    .forEach(livroUnico => {
      livroUnico.style.display = "none";

      let totalB = ''
      const elementosFlex = Array.from(livroAcervo.children).filter(livroUnico => livroUnico.style.display === "flex");
      totalB += `<h2>${elementosFlex.length}</h2>`
      totalBooks.innerHTML = totalB
    })


});



const cadLivro = document.querySelector('#cadLivro')
const dialogCadLivro = document.querySelector("#dialogCadLivro")
const btnConfirmarCadLivro = document.querySelector("#btnConfirmarCadLivro")

cadLivro.addEventListener("click", function () {
  dialogCadLivro.showModal()
})
btnConfirmarCadLivro.addEventListener("click", () => {
  dialogCadLivro.close()
})