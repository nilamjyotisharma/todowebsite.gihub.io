const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listcontainer");

function addTask(){
    if(inputBox.value === ''){
        alert('Please Enter a Task!');
    }
    else{
        let li = document .createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
    }
    if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
    } I
}, false);

//To save through local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

//show the data
function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showData()