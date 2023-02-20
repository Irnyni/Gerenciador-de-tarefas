const todoForm = document.querySelector("#caixas");
const todoInput = document.querySelector("#inputs");
const todoo =document.querySelector(".todo");
const todoList = document.querySelector(".todolist");
const editForm = document.querySelector("#editform");
const editInput = document.querySelector("#editinput");
const cancelEdition = document.querySelector("#canceledit");
const search =document.querySelector("#tools");
const buscarinput = document.querySelector("#searchinput");
const buscarbtn = document.querySelector("erasebutton");
const atividades =document.querySelector(".afazeres");
const filtros = document.querySelector("#filterselect");


const toogleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    atividades.classList.toggle("hide");
    search.classList.toggle("hide");
    let valorAntigo;

};

const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo)  => {

        let todoti = todo.querySelector("h3");

        if(todoti.innerText===valorAntigo){

            todoti.innerText=text;

        }

    });
}
   todoForm.addEventListener("submit" , (e) => {

    e.preventDefault();
    const inputValue = todoInput.value;


    const saveTodo = (text) => {

        const todo = document.createElement("div");
        let todotitle;
        todo.classList.add("todo");


        const todoTitle = document.createElement("h3")
        todoTitle.innerText= text
        todo.appendChild(todoTitle);
        console.log(todo);

        const buttonaccept = document.createElement("button");
        buttonaccept.classList.add("finish");
        buttonaccept.innerHTML ='<i class="fa-solid fa-check"></i>'
        todo.appendChild(buttonaccept);
        console.log(todo);

        const buttonedit = document.createElement("button");
        buttonedit.classList.add("edit");
        buttonedit.innerHTML ='<i class="fa-solid fa-pen"></i>'
        todo.appendChild(buttonedit);
        const buttoneraser = document.createElement("button");
        buttoneraser.classList.add("remove");
        buttoneraser.innerHTML ='<i class="fa-solid fa-xmark"></i>'
        todo.appendChild(buttoneraser);

        todoList.appendChild(todo);
        todoInput.value="";
        todoInput.focus();
        const toogleForms = () => {
            editForm.className("hide");
            todoForm.className("hide");
            todoList.className("hide");
 

     }



     const buscarinput = document.createElement("searchinput");
     const apagar = document.querySelector("erasebutton");

    }


    
 
    if (inputValue){

        saveTodo(inputValue);


    }

   });
 

    document.addEventListener("click", (e) => {

    const targetEl = e.target
    const parentEl = targetEl.closest("div");
    let todotitle;

    if(parentEl && parentEl.querySelector("h3")){

        todotitle=parentEl.querySelector("h3").innerText;
        console.log("entrei");

    }
    if(targetEl.classList.contains("finish")){

        parentEl.classList.toggle("done");

    
        
    }
    if(targetEl.classList.contains("remove")){

        parentEl.remove();   
    }
    
    
    if(targetEl.classList.contains("edit")){

        toogleForms();

        editInput.value= todotitle;
        valorAntigo=todotitle ;
        editInput.focus();

    }
    
});





cancelEdition.addEventListener("click", (e) => {

    e.preventDefault();
    toogleForms();
    console.log("cancelou");

});

editForm.addEventListener("submit" , (e) => {
      
    e.preventDefault();

    const editinput= editInput.value;

    if(editinput){

        updateTodo(editinput);

        }
        toogleForms();


    });



   buscarinput.addEventListener("input", function () {

    
        let busca =this.value.toLowerCase();
        buscar(busca);
 });
        

             
      filtros.addEventListener("change",()=>{
       buscar(this.busca);
       filtro();

      })     ;          
                
      const filtro = () => {
          
      var select = document.getElementById("filterselect");
      var opcaoTexto = select.options[select.selectedIndex].text;
      const todos = document.querySelector(".todolist")
      let itemElement = todos.querySelectorAll(".todo")


      itemElement.forEach((todo)  => {
          const targetEl = todo
          const parentEl = targetEl.closest("todo");


                 itemElement.forEach(todo => {

                  if (opcaoTexto==="Realizados"){

                              if(targetEl.classList.contains("done")){
                                     if(targetEl.classList.contains("hide")){

                                         console.log("esconder")
                                     }

                                      console.log("MOSTRAR")
                                      targetEl.classList.remove("hide");   
                              }
                              else{
                                  console.log("ESCONDER")
                                  targetEl.classList.add("hide");    
                              }
                  }


                                      if (opcaoTexto==="Incompletos"){

                                                      if(targetEl.classList.contains("done")){
                                                          console.log("ESCONDER")
                                                              targetEl.classList.add("hide");   
                                                      }
                                                      else{
                                                          console.log("MOSTRAR")
                                                          targetEl.classList.remove("hide");    
                                                      }
                                      }
                  if (opcaoTexto==="Todos"){

                              targetEl.classList.remove("hide");   
                      }


});
          });

 }


function buscar(busca){

 /*let busca = e.target.value.toLowerCase();*/


 
 const todos = document.querySelector(".todolist")
 let itemElement = todos.querySelectorAll("h3")
 const blocos = todos.querySelectorAll(".todo")


 
 itemElement.forEach((h3)  => {
     const targetEl = h3
     const parentEl = targetEl.closest("div");
     let text = h3.textContent.toLowerCase()    
     let i =0;
            blocos.forEach(todo => {
             console.log(blocos[i].innerText);
             if(text.includes(busca)){  
                     parentEl.classList.remove("hide");   
             }
           
         else{
             parentEl.classList.add("hide");
              }
});
     });

    }