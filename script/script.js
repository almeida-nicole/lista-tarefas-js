let idNum = 0;
const botao = document.querySelector(".botoes-acao__adicionar");
const inputArea = document.querySelector(".box-adicionar__input");

botao.addEventListener("click", function(evento){
    evento.preventDefault();

    if(inputArea.value === "" || inputArea.value === " " || inputArea.value === null || inputArea.value === undefined){
        return false
    }

    idNum++

    const caixaTarefasAdicionadas = document.querySelector(".tarefas-adicionadas-itens");
    const novoItem = document.createElement("li");
    novoItem.className = "tarefas-adicionadas-itens__item";
    novoItem.id=idNum
    // const novoItemTexto = document.createTextNode("p");
    novoItem.innerHTML = `
    <input onchange="toggleCheck(event)" type="checkbox" id="item-${idNum}">
    <label for="item-${idNum}">${inputArea.value}</label>
    <button class="deletar" onclick="excluir(event)">x</button>`

    caixaTarefasAdicionadas.insertBefore(novoItem, caixaTarefasAdicionadas.children[0]);

    inputArea.value = "";
})

function excluir(e){
    const item = document.getElementById(e.target.closest("li").id)
    e.preventDefault();
    item.remove();
}

function toggleCheck(e){
    if(e.target.checked) {
        e.target.checked = true;
        e.target.setAttribute("checked", true);
        return;
    }
    e.target.checked = false;
    e.target.removeAttribute("checked");
}

const marcarTodas = document.querySelector(".botoes-acao__marcar-todas");

marcarTodas.addEventListener("click", function(e){
    e.preventDefault();
    const inputsCheck = document.querySelectorAll(".tarefas-adicionadas-itens__item input[type='checkbox']");
    for (let i = 0; i < inputsCheck.length; i++) {
        inputsCheck[i].checked = true;
        inputsCheck[i].setAttribute("checked", true);
    }
})

const botaoExcluirTodas = document.querySelector(".botoes-acao__excluir-todas");
botaoExcluirTodas.addEventListener("click", function(ev){
    ev.preventDefault();
    const tarefasItem = document.querySelectorAll(".tarefas-adicionadas-itens__item");
    for (let i = 0; i < tarefasItem.length; i++) {
        tarefasItem[i].remove();
    }
})



