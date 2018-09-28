// const botao = document.querySelector(".box__botao-primary");
// const inputArea = document.querySelector(".box-adicionar__input");

// botao.addEventListener("click", function(evento){
//     evento.preventDefault();

//     if(inputArea.value === "" || inputArea.value === " " || inputArea.value === null || inputArea.value === undefined){
        
//         return false
//     }


//     console.log(botao)

    
//     const caixaTarefasAdicionadas = document.querySelector(".tarefas-adicionadas-itens");
//     const novoItem = document.createElement("li");
//     // const novoItemTexto = document.createTextNode("p");
//     novoItem.innerHTML = `${inputArea.value}<div><button class="deletar"">x</button></div>`  
    
//        caixaTarefasAdicionadas.insertBefore(novoItem, caixaTarefasAdicionadas.children[0]);

    
    
    
//        inputArea.value = "";
//        const botaoDeletar = document.querySelector(".deletar");

//        botaoDeletar.addEventListener("click", function(e){
//            e.preventDefault();
       
//            novoItem.remove();
       
       
       
       
//         })
       
      
    
// })

let idNum = 0;
const botao = document.querySelector(".box__botao-primary");
const inputArea = document.querySelector(".box-adicionar__input");

botao.addEventListener("click", function(evento){
    evento.preventDefault();

    if(inputArea.value === "" || inputArea.value === " " || inputArea.value === null || inputArea.value === undefined){
        
        return false
    }

    idNum++
    console.log(botao)

    
    const caixaTarefasAdicionadas = document.querySelector(".tarefas-adicionadas-itens");
    const novoItem = document.createElement("li");
    novoItem.className = "ItemChecado";
    novoItem.id=idNum
    // const novoItemTexto = document.createTextNode("p");
    novoItem.innerHTML = `${inputArea.value}<div><button class="deletar" onclick="excluir(event)">x</button></div>`  
    
       caixaTarefasAdicionadas.insertBefore(novoItem, caixaTarefasAdicionadas.children[0]);

    
    
    
       inputArea.value = "";
       
       
      
    
})

        function excluir(e){
        
        const item = document.getElementById(e.target.closest("li").id)
        console.log(item)
           e.preventDefault();
       
        item.remove();

       }
    
    //    novoItem
    //    novoItem.addEventListener("click", function(ev){
    //        ev.preventDefault();

    //        console.log(novoItem);


    //    })
       
       
       
       
    

