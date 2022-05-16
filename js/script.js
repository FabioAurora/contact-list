"use strict"; // strict mode

// Targeting the nodes:
let addName = document.querySelector("#contactName");
let addNumber = document.querySelector("#contactNumber");
const addBTN = document.querySelector("#addContactBTN");

const contactList = document.querySelector("#contactlist");

const contacts = [];


// capitalize first letter:
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// adding contact to list:
addBTN.addEventListener('click', () => {
    contacts.push(`${addName.value}:${addNumber.value}`);
    const newContact = document.createElement('li');
    newContact.textContent = capitalizeFirstLetter(addName.value);
    contactList.appendChild(newContact);
    // resetting inputs:
    addName.value = '';
    addNumber.value = '';
    addName.focus();
})