const prompt = require("prompt-sync")();

const myItems = [];

console.log("\nWelcome to Jared's first Javascript project.");

let running = true;

while (running) {

    // Get user command
    let input = prompt("Enter a command: add / edit / delete / complete / quit: ");
    let formattedInput = input.toLowerCase();

    console.log("You chose " + formattedInput + "!");

    switch (formattedInput) {

        case "add":
            addItem();
            break;

        case "edit":
            editItem();
            break;

        case "delete":
            deleteItem();
            break;

        case "complete":
            completeItem();
            break;

        case "quit":
            running = false;
            break;

        default:
            console.log("Invalid command.");
            break;
    }
}

console.log("Goodbye! :)\n");


// ================= Helper Functions =================

// Check if list is empty
function checkEmptyList() {
    if (myItems.length === 0) {
        console.log("No items yet!");
        return true;
    }
    return false;
}

// Validate numeric index input
function isValidIndex(value) {
    return (
        !isNaN(value) &&
        value >= 1 &&
        value <= myItems.length
    );
}

// Prompt user and return valid array index (0-based)
function getValidIndex(promptText) {
    let value = prompt(promptText);

    if (!isValidIndex(value)) {
        console.log("Invalid number. Please choose a valid item.");
        return null;
    }

    return Number(value) - 1;
}


// ================= Core Functions =================

// Add new item
function addItem() {

    console.log("Current items:");
    printList();

    let itemToAdd = prompt("Add an item: ");

    if (itemToAdd.trim() === "") {
        console.log("Item cannot be blank.");
        return;
    }

    myItems.push({
        text: itemToAdd,
        completed: false
    });

    console.log("Updated list:");
    printList();
}


// Edit existing item text
function editItem() {

    if (checkEmptyList()) return;

    console.log("Current items:");
    printList();

    let index = getValidIndex("Edit item number: ");
    if (index === null) return;

    let newItem = prompt("Enter new text: ");

    if (newItem.trim() === "") {
        console.log("Item cannot be blank.");
        return;
    }

    myItems[index].text = newItem;

    console.log("Updated list:");
    printList();
}


// Delete item by index
function deleteItem() {

    if (checkEmptyList()) return;

    console.log("Current items:");
    printList();

    let index = getValidIndex("Delete item number: ");
    if (index === null) return;

    myItems.splice(index, 1);

    console.log("Updated list:");
    printList();
}


// Toggle completion status
function completeItem() {

    if (checkEmptyList()) return;

    console.log("Current items:");
    printList();

    let index = getValidIndex("Complete item number: ");
    if (index === null) return;

    myItems[index].completed = !myItems[index].completed;

    console.log("Updated list:");
    printList();
}


// Display all items
function printList() {

    if (myItems.length === 0) {
        console.log("No items yet!");
        return;
    }

    for (let index in myItems) {

        let status = myItems[index].completed ? "[x]" : "[ ]";

        console.log(
            (Number(index) + 1) + ". " +
            status + " " +
            myItems[index].text
        );
    }
}