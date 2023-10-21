// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// Get DOM elements
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shopingListEl = document.getElementById("shopping-list")

// Firebase app settings
const appSettings = {
    databaseURL: "https://realtime-database-16269-default-rtdb.europe-west1.firebasedatabase.app/"
}

// Initialize Firebase app and get database reference
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shopingList")

// Function to clear input field
function clearInputFieldEl() {
    inputFieldEl.value = ''
}

// Function to append item to shopping list
function appendItemToShoppingListEl(inputValue) {
    shopingListEl.innerHTML += `<li>${inputValue}</li>`
}

// Add event listener to add button
addButtonEl.addEventListener("click", function () {
    // Get input value
    let inputValue = inputFieldEl.value

    // Push input value to Firebase database
    push(shoppingListInDB, inputValue)

    // Append input value to shopping list and clear input field
    appendItemToShoppingListEl(inputValue);
    clearInputFieldEl()
})