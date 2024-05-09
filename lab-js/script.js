"use strict";

const form = document.getElementById('add-form');
const newItemName = document.getElementById('input-text');
let itemList = null;
let lastDeletedItem = null;
let lastDeletedItemList = null;
let numberOfLists = 1;
const listSelector = document.getElementById('list-selector');
const lists = document.getElementById("lists");

function createList(){
    let newList =  document.createElement("div");
    newList.classList.add("listDiv")
    numberOfLists++;
    newList.id = "list" + numberOfLists;
    let list = document.createElement("ul");
    list.classList.add("list");
    let title = document.createElement("span");
    title.classList.add("listSpan")
    title.textContent = "List " + numberOfLists;
    title.dataset.clicked = "false"
    title.onclick = function (){
        if(this.dataset.clicked === "false"){
            list.style.display = "none";
            this.dataset.clicked = "true";
        }else{
            list.style.display = "block";
            this.dataset.clicked = "false";
        }
        
    }
    newList.appendChild(title);
    newList.appendChild(list);
    let option = document.createElement("option");
    option.text = "List " + numberOfLists;
    option.value = "list" + numberOfLists;
    //listSelector.remove();
    listSelector.remove(listSelector.getElementsByTagName("option").length - 1);
    let optionN = document.createElement("option");
    optionN.text = "New list";
    optionN.value = "newList";
    listSelector.add(option);
    listSelector.add(optionN);
    lists.appendChild(newList);
    itemList = list;
}

const list1span = document.getElementById("list1").querySelector(".listSpan")
const list1list = document.getElementById("list1").querySelector(".list")
list1span.onclick = function (){
    if(this.dataset.clicked === "false"){
        list1list.style.display = "none";
        this.dataset.clicked = "true";
    }else{
        list1list.style.display = "block";
        this.dataset.clicked = "false";
    }    
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let selectedList = listSelector.value;
    //alert(selectedList);
    if(selectedList == "newList") {
        //alert("creating new list");
        createList();
    }else{
        //alert("list already exists");
        itemList = document.getElementById(selectedList).querySelector(".list");
    }

    let newItem = document.createElement("li");
    newItem.classList.add("item")
    let newText = newItemName.value;

    function createModal(taskText, itemToDelete, deleteButton) {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
            <div class="modal-content">
                <p>Czy na pewno chcesz usunąć zadanie o treści: ${taskText}?</p>
                <button id="confirm-delete">Tak</button>
                <button id="cancel-delete">Anuluj</button>
            </div>
        `;
        document.body.appendChild(modal);
        const confirmDeleteBtn = document.getElementById('confirm-delete');
        confirmDeleteBtn.addEventListener('click', () => {
            modal.remove();
            deleteButton.dataset.clicked = "false";
            lastDeletedItem = itemToDelete;
            lastDeletedItemList = itemList;
            itemToDelete.remove();
        });
        const cancelDeleteBtn = document.getElementById('cancel-delete');
        cancelDeleteBtn.addEventListener('click', () => {
            deleteButton.dataset.clicked = "false";
            modal.remove();
        });
    }

    if (newText !== "") {
        let itemText = document.createElement("div");
        itemText.classList.add("itemText");
        itemText.dataset.clicked = "false";
        itemText.textContent = newItemName.value;
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");
        deleteButton.textContent = "X";
        deleteButton.id = "item-delete-button";
        deleteButton.dataset.clicked = "false";
        deleteButton.onclick = function() {
            if(this.dataset.clicked === "false"){
                this.dataset.clicked = "true"
                createModal(itemText.textContent, newItem, deleteButton);
            }            
        }
        itemText.onclick = function() {
            if (this.dataset.clicked === "false") {
                itemText.style.textDecoration = "line-through";
                itemText.dataset.clicked = "true";
            } else {
                itemText.style.textDecoration = "none";
                itemText.dataset.clicked = "false";
            }

        }

        newItem.appendChild(itemText);
        newItem.appendChild(deleteButton);
        itemList.appendChild(newItem);
    }

});

let ctrlPressed = false;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Control') {
        ctrlPressed = true;
    } else if (e.key === 'z' && ctrlPressed && lastDeletedItem) {
        itemList = lastDeletedItemList;
        lastDeletedItemList = null;
        itemList.append(lastDeletedItem);
        lastDeletedItem = null;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Control') {
        ctrlPressed = false;
    }
});
