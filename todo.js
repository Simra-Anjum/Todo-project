let todolist=[
  {
    item: 'Machine Learning Workshop', 
    dueDate: '4/10/2022'
  }
  ,
  {
    item:'Training Class',
    dueDate: '4/10/2022'
  }
];
displayItems();

function addToDo()
{
  let inputElement= document.querySelector
  ('#todo-input');
  let dateElement = document.querySelector
  ('#todo-date');
  let todoItem= inputElement.value;
  let todoDate= dateElement.value; 
  todolist.push({item: todoItem,
    dueDate: todoDate});
  inputElement.value='';
  dateElement.value='';
  displayItems();
}
function displayItems(){
  let containerElement = document.querySelector
  ('.todo-container');

  let newHtml = '';
  for(let i=0; i< todolist.length; i++){
    let item = todolist[i].item;
    let dueDate= todolist[i].dueDate;
 newHtml += `
   
   <span>${item}</span>
   <span>${dueDate}</span>
   <button class='btn-delete main-page' onclick="todolist.splice(${i}, 1);displayItems();">Delete</button>
 
`;
  }
  containerElement.innerHTML = newHtml;
}







 



