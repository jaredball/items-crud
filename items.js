
const prompt = require("prompt-sync")();

var myItems = [];
console.log("\nWelcome to Jared's first Javascript project.");

let running = true;

while (running) {

    // input
    let input = prompt("Enter a command: add / edit / delete / quit: ");
    let formattedInput = input.toLowerCase();
    console.log("You chose " + formattedInput + "!")

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
            console.log("Invalid command");
            break;
    }
}

console.log("Goodbye! :)")

// adds item to array
function addItem() {

    // intro
    console.log("Here is the current list of items:");
    printList()
    let itemToAdd = prompt("Add an item: ");

    // action
    myItems.push(itemToAdd);
    console.log("Here is the new list of items:");
    printList()

};

// edits item in array
function editItem() {

};

// deletes item out of array
function deleteItem() {

    // intro
    console.log("Here is the current list of items:");
    printList()
    let itemtoDelete = prompt("Delete an item (type the number): ");

    if (itemtoDelete < 1 || itemtoDelete > myItems.length) {
        console.log("Invalid number. Please choose a valid item.");
        return;
    }

    // action
    myItems.splice(itemtoDelete - 1, 1);
    console.log("Here is the new list of items:");
    printList()

};

// prints items in array
function printList() {

    for (let index in myItems) {
        console.log((Number(index) + 1) + ". " + myItems[index]);
    }

}