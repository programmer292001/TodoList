//Storing Add Button reference in AddTask Variable.
const Add = document.querySelector('#Add');
console.log(Add);

//Storing Input Field Reference in Input Variable.
const IPT = document.querySelector('#Input');
console.log(IPT);

//Storing NewTaskList Div Reference in TaskList Variable
const TL = document.querySelector('.TaskList');
let Counter = 0;


Add.addEventListener('click',()=>{
    let IPTValue = IPT.value;
    console.log(IPTValue, typeof(IPTValue));

    if(IPTValue.length ==0){
        alert("The Task Name should not be empty");
    }

    else{

        const newTask = document.createElement('div');
        newTask.classList.add('newTask');

        newTask.innerHTML += `
             <input type='checkbox' class='Tick' id='Tick'>
             &emsp;
             <input type='text' class="Task" id="TN${Counter}" value=${IPTValue} readonly="readonly">
             &emsp;
             <button class="Edit" id="E${Counter}" onclick=Edit(this)>Edit</button>
             &emsp;
             <button class="Delete" id="D${Counter}" onclick=Delete(this)>Delete</button>
        `;
        TL.append(newTask);
        IPT.value = '';
        Counter+=1;
        
    }
});


 function Edit(Edit){

     console.log(Edit.textContent=="Edit");
     var Pn = Edit.parentNode;
     console.log(Pn);
     var Task = Pn.querySelector('.Task');
     console.log(Task);
     console.log("Edit Button Clicked");

    if(Edit.textContent==="Edit"){
        console.log("Edit State Started");
        Edit.textContent = "Save";
        Task.removeAttribute("readonly");
        Task.style.outline = '4px solid white';
        Task.focus();
        console.log("Edit State Ended");
    }
    else{
        console.log("Save State Started");
        Edit.textContent = "Edit";
        Task.setAttribute("readonly","readonly");
        Task.style.outline = 'none';
        Task.focus();
        console.log("Save State Ended");
    }
    console.log("Task Editable");
 }

 function Delete(Del){
    console.log(Del);
    Del.parentNode.remove();
    console.log("Deleted");
 }

 

