const todoForm = document.querySelector("#caixas");
const todoInput = document.querySelector("#inputs");
const todoList = document.querySelector(".todolist");
const editForm = document.querySelector("#editform");
const editInput = document.querySelector("#editinput");
const cancelEdition = document.querySelector("#canceledit");


   todoForm.addEventListener("submit" , (e) => {

    e.preventDefault();
    const inputValue = todoInput.value;

    const saveTodo = (text) => {

        const  todo =document.createElement("div")
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


    }

    if (inputValue){

        saveTodo(inputValue);


    }

   });
 

    document.addEventListener("click", (e) => {

    const targetEl = e.target
    const parentEl = targetEl.closest("div");

    if(targetEl.classList.contains("finish")){

        parentEl.classList.toggle("done");


        
    }
    if(targetEl.classList.contains("remove")){

        parentEl.remove();   
    }
    
    
    if(targetEl.classList.contains("edit")){

        parentEl.classList.add("hide");


    }
    
});



