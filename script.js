const input = document.getElementById("input-box");
const list = document.getElementById("list");
const addButton = document.getElementById("add-button");


addButton.addEventListener("click", addTask);

function addTask() {
    if (input.value === '') {
        alert("You need to write something in the input box");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = ""; 
    saveData();
}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    let data = localStorage.getItem("data");
    if (data) {
        list.innerHTML = data;
    }
}

showTask();
