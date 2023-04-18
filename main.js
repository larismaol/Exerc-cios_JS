let lista = [];

function adicionarTarefa() {
  const novaTarefa = document.getElementById("novaTarefa").value;
  lista.push(novaTarefa);
  document.getElementById("novaTarefa").value = "";
}

function exibirTarefas() {
  const listaDeTarefas = document.getElementById("listaDeTarefas");
  listaDeTarefas.innerHTML = "";
  lista.forEach((tarefa) => {
    const item = document.createElement("li");
    item.innerText = tarefa;
    listaDeTarefas.appendChild(item);
  });
}