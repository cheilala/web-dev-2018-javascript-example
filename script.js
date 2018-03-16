var fruit = ["apple","banana","kiwi","peach"];

var button = document.getElementById("btnFruit");
var input = document.getElementById("iFruit");
var list = document.getElementById("fruitList");

function loadFruitList() {
    for(i = 0; i < fruit.length; i++) {
        createListItemElement(fruit[i]);
    }
}

loadFruitList();

function createListItemElement(fruit) {
    var li = document.createElement("li");
    li.setAttribute("id","li_" + fruit);
    li.appendChild(document.createTextNode(fruit));

    var img = document.createElement("img");
    img.setAttribute("id","img_" + fruit);
    img.setAttribute("src","./trashCanRed.jpeg");
    //img.setAttribute('onclick',"removeParentItem();");
    li.appendChild(img);
    list.appendChild(li);
    input.value = "";
}

function inputLength() {
    return input.value.length;
}

function addListAfterClick() {
    if(inputLength() > 0) {
        if(!fruit.includes(input.value)) {
            fruit.push(input.value);
            createListItemElement(input.value);
        } else {
            alert(input.value + " already exists in the list!");
            input.value = "";
        }
    }
}

function addListAfterKeyPress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        if(!fruit.includes(input.value)) {
            fruit.push(input.value);
            createListItemElement(input.value);
        } else {
            alert(input.value + " already exists in the list!");
            input.value = "";
        }
    }
}

function setRowStyle(e) {
    var selectedRow = document.getElementById(e.target.id);
    if(selectedRow !== null) {
        if(selectedRow.className === "done") {
            selectedRow.className = "";
        } else {
            selectedRow.className = "done";
        }
    }
}

/*function removeItem(e) {
    var selectedRow = document.getElementById(e.target.id);
    console.log(selectedRow);
    var idx = fruit.indexOf(selectedRow.innerText);
    console.log("Item to remove is at index " + idx);
    fruit.splice(idx,1);
    list.removeChild(selectedRow);
    console.log(fruit);
}*/

function removeParentItem(e) {
    var selectedRowParent = document.getElementById(e.target.id).parentNode.id;
    var selectedRow = document.getElementById(selectedRowParent);
    console.log(selectedRow);
    var idx = fruit.indexOf(selectedRow.innerText);
    console.log("Item to remove is at index: " + idx);
    fruit.splice(idx,1);
    list.removeChild(selectedRow);
    console.log(fruit);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
list.addEventListener("click", removeParentItem);