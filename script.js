let tarefas = []
//array criado para editar a lista de tarefas do usuário
function adicionarTarefa() {

// variavel criada para após o button click ser utilizado aparecer essa mensagem
    const armazenarValor = document.getElementById("inputTarefa")
    // variavel criada para chamar o id do html
    let tarefa = armazenarValor.value.trim()
    //variavel criada para armazenar o valor da nossa variavel acima
    document.getElementById("mensagem").textContent = tarefa;
    //chamando o id do nosso parágrafo "mensagem" para adicionar o texto da variável "tarefa" que no caso é o valor digitado pelo usuário
    const mensagem = document.getElementById("mensagem")

  if (tarefa == "") {
      let mensagemErro = "Digite uma tarefa para adiciona-la"
      mensagem.textContent = mensagemErro
      mensagem.style.color = 'red'
  }else {
      let mensagemSucesso = "Tarefa adicionada com sucesso!"
      mensagem.textContent = mensagemSucesso
      mensagem.style.color = 'green' 
      
      tarefas.push(tarefa)
      renderizarTarefas()
  }
   
    armazenarValor.value = ""
    //pegar a variavel que recebe os valores do id para colocar no final do código serve para limpar o input do html após o usuario colocar o valor
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""
    //variavel criada para chamar o id "listaTarefas" que está no nosso "ul" do html
    //listaTarefas.innerHTML = "" criado para não repetir o que o usuário ja colocou no site

    //for (iterador, condicao, frequencia)

    
    for(let i = 0; i < tarefas.length; i++){

    let novaTarefa = document.createElement("li")
    //variavel criada para criar um "li" dentro do nosso "ul" 
    novaTarefa.textContent = tarefas[i]
    //variavel que cria a lista puxando o comando para aparecer o texto, chamando a variavel tarefa que é a que armazena o valor do usuario
    let botaoRemover = document.createElement("button")
    botaoRemover.className = "remover"
    //código usado para identificar no css a classe que você quer estilizar
    botaoRemover.textContent = "Remover"
    botaoRemover.onclick = () => removerTarefa(i)
    novaTarefa.appendChild(botaoRemover)
    

    let botaoEditar = document.createElement("button")
    botaoEditar.className = "editar"
    botaoEditar.textContent = "Editar"
    botaoEditar.onclick = () => editarTarefa(i)

    
    novaTarefa.appendChild(botaoRemover)
    novaTarefa.appendChild(botaoEditar)
    listaTarefas.appendChild(novaTarefa)

    //variavel pai (listaTarefa, responsável pelo id da ul) que chama a variavel filho (novaTarefa, responsavel por criar o li da nossa lista)
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
    let tarefaRemovida = document.getElementById("listaTarefas")
    tarefaRemovida.textContent = "Tarefa removida com sucesso"
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite a tarefa :")
    //usado para o usuário digitar a edição de sua escolha
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
}

function limparLista(){
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "lista de tarefas limpa com sucesso"
}

//function adicionarTarefa() {
 // let validarTarefa = document.getElementById("inputTarefa")
 // if (validarTarefa)

