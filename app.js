var actvities=[];

var input = document.getElementById("input");
var toDo = document.getElementById("todolist");
var btn = document.getElementById("button");
btn.onclick = AddClick;

function AddClick () {
    actvities.push(input.value);
    console.log(actvities);
    input.value = "";
    showList();
};

function showList() {
    toDo.innerHTML = " ";
  
   
    actvities.forEach(function (n, i) {
        toDo.innerHTML +=
        "<li>" +
        n +
        "<a onclick='editItem(" +
        i +
        ")'>Edit</a>" +
        "<a onclick='deleteItem(" +
        i +
        ")'>&times | </a></li>";
    });
};
function deleteItem(i) {
    actvities.splice(i, 1);
    showList();
};

  function editItem(i) {

    var newValue = prompt("Please insert your new value");
    actvities.splice(i, 1, newValue);
    showList();
};