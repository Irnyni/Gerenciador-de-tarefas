const todoForm = document.querySelector("#caixas");
const todoInput = document.querySelector("#inputs");
const todoList = document.querySelector(".todolist");
const editForm = document.querySelector("#editform");
const editInput = document.querySelector("#editinput");
const cancelEdition = document.querySelector("#canceledit");
const search =document.querySelector("tools");
const buscarinput = document.querySelector("#searchinput");
const buscarbtn = document.querySelector("erasebutton");

const toogleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
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

        const  todo =document.createElement("div");
        let todotitle;
        todo.classList.add("todo")


        const todoTitle = document.createElement("h3")
        todoTitle.innerText= text
        todo.appendChild(todoTitle)
        console.log(todo)

        const buttonaccept = document.createElement("button")
        buttonaccept.classList.add("finish")
        buttonaccept.innerHTML ='<i class="fa-solid fa-check"></i>'
        todo.appendChild(buttonaccept)

        const buttonedit = document.createElement("button")
        buttonedit.classList.add("edit")
        buttonedit.innerHTML ='<i class="fa-solid fa-pen"></i>'
        todo.appendChild(buttonedit)
        const buttoneraser = document.createElement("button")
        buttoneraser.classList.add("remove")
        buttoneraser.innerHTML ='<i class="fa-solid fa-xmark"></i>'
        todo.appendChild(buttoneraser)

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



   buscarinput.addEventListener("input", (e) => {
        e.preventDefault();
        let busca = e.target.value.toLowerCase();
        console.log(busca);
        const  todo =document.createElement("div");
        const todos = document.querySelector(".afazeres")
        let itemElement = todos.querySelectorAll("h3")

        itemElement.forEach((h3)  => {
             let text = h3.textContent.toLowerCase()    
             if(busca){

                       if(text.includes(busca)){
                            
                        console.log("achou");
 
                       }
                       else{
                        console.log("letra nao consta");
                       }


             }

    
        });
          
      });
    


          
