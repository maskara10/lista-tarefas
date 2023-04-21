var input = document.querySelector(".pesquisa input");
var btn = document.querySelector(".pesquisa button");
var contador = 1

function addTarefa() {
  let inputValor = input.value;
  if (inputValor == null || inputValor == "" || inputValor == undefined) {
    alert("Campo não pode ser vazio!");
  } else {
    let tarefa = `<div class="tarefa" id=${contador}>
        <p>${inputValor}</p>
        <div class="icons">
          <img onclick="check(${contador})" src="./img/correto.png" alt="" srcset="" /><img onclick="deletar(${contador})" src="./img/lixeira.png" alt="" srcset="" />
        </div>
      </div>`;
    let main = document.querySelector(".main");
    main.innerHTML += tarefa;  
    input.value = "";
    input.focus();
    contador ++
  }
}

function deletar(id) {
    let tarefa = document.getElementById(id)
    tarefa.remove()
}

function check(id) {
    let tarefa = document.getElementById(id)
    let classe = tarefa.getAttribute('class')
    if (classe == "tarefa tarefaok") {
        tarefa.classList.remove('tarefaok')
    } else {
        tarefa.classList.add('tarefaok')
    }
}

