// document.querySelector => 해당 코드를 그대로 가져온다
    // 예를 들어서
    // .js-toDoForm 은 <div><input /><div> 이 그대로 들어옴
    // 아이디나 클래스도 포함
    // console.log(toDoList);

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = 'toDos';


function paintToDo(text) {
    // 이름은 뭐로 하던 상관없음
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    
    // 둘 순서 바꿔서 작성하면 순서가 바뀐다
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ="";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos === !null) {
        
    } else {
        // todo 리스트는 항상 보여지는 것이기 때문에 뭔가를 할 필요는 없다
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();