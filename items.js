
const prompt = require("prompt-sync")();

const myItems = [];

console.log("\nWelcome to Jared's first Javascript project.");

let running = true;

while (running) {

    // Input
    let input = prompt("Enter a command: add / edit / delete / quit: ");
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

        case "quit":
            running = false;
            break;

        default:
            console.log("Invalid command.");
            break;
    }
}

console.log("Goodbye! :)\n");


// Adds item to array
function addItem() {

    // Intro
    console.log("Here is the current list of items:");
    printList();

    let itemToAdd = prompt("Add an item: ");

    // Action
    myItems.push({
        text: itemToAdd,
        completed: false
    });

    console.log("Here is the new list of items:");
    printList();
}


// Edits item in array
function editItem() {

    // Intro
    console.log("Here is the current list of items:");
    printList();

    let itemNumberToEdit = prompt("Edit an item (enter the number): ");

    // Validation check
    if (itemNumberToEdit < 1 || itemNumberToEdit > myItems.length) {
        console.log("Invalid number. Please choose a valid item.");
        return;
    }

    // Action
    let newItem = prompt("Enter the replacement item: ");

    myItems[itemNumberToEdit - 1].text = newItem;

    console.log("Here is the new list of items:");
    printList();
}


// Deletes item from array
function deleteItem() {

    // Intro
    console.log("Here is the current list of items:");
    printList();

    let itemToDelete = prompt("Delete an item (enter the number): ");

    // Validation check
    if (itemToDelete < 1 || itemToDelete > myItems.length) {
        console.log("Invalid number. Please choose a valid item.");
        return;
    }

    // Action
    myItems.splice(itemToDelete - 1, 1);

    console.log("Here is the new list of items:");
    printList();
}


// Prints items in array
function printList() {

    for (let index in myItems) {

        let status;

        if (myItems[index].completed) {
            status = "[x]";
        } else {
            status = "[ ]";
        }

        console.log(
            (Number(index) + 1) + ". " +
            status + " " +
            myItems[index].text
        );
    }
}