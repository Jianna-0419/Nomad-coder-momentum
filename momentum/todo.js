// document.querySelector => 해당 코드를 그대로 가져온다
    // 예를 들어서
    // .js-toDoForm 은 <div><input /><div> 이 그대로 들어옴
    // 아이디나 클래스도 포함
    // console.log(toDoList);

/* 
    1. HTML 설정
    2. 사용자가 쓴 문자 가져와서 li 로 만들기
    3. 쓴 toDos 를 저장하기 (array 형태로 만들기)
 */

const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // JSON.stringify : JS 오브젝트를 string 으로 바꿔준다 
        // localStorage 의 값들은 무조건 문자열로 들어가기 때문에!
        // true 라고 적어도 Boolean 이 아닌 "true" 이다
}

function paintToDo(text) {
    // 이름은 뭐로 하던 상관없음
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    span.innerText = text;

    // 둘 순서 바꿔서 작성하면 순서가 바뀐다
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ="";
}

function something(toDo) {
    console.log(toDo.text);
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
            // parsedToDos = loadedToDos 의 오브젝트 버전!
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    } else {
        // todo 리스트는 항상 보여지는 것이기 때문에 뭔가를 할 필요는 없다
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();