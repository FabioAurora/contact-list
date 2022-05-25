"use strict"; // strict mode

// Targeting the nodes:
let addName = document.querySelector("#contactName");
let addNumber = document.querySelector("#contactNumber");
const addBTN = document.querySelector("#addContactBTN");

const contactList = document.querySelector("#contactList");

const contacts = [];

const searchContact = document.querySelector("#searchContact");
const searchBTN = document.querySelector("#searchBTN");
const displayNameInfo = document.querySelector("#displayName");
const displayNumberInfo = document.querySelector("#displayInfo");

// capitalize first letter:
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// adding contact to list:
addBTN.addEventListener("click", () => {
  contacts.push(`${addName.value}:${addNumber.value}`);
  const newContact = document.createElement("li");
  newContact.textContent = capitalizeFirstLetter(addName.value);
  contactList.appendChild(newContact);
  // resetting inputs:
  addName.value = "";
  addNumber.value = "";
  addName.focus();
});

// searching for contact number:
searchBTN.addEventListener('touch', () => {
    for (let contact of contacts) {
        const splitString = contact.split(':');
        searchContact.value = searchContact.value.toLowerCase();

        if (searchContact.value === splitString[0]) {
            displayNameInfo.textContent = `${capitalizeFirstLetter(splitString[0])}`;
            displayNumberInfo.textContent = `${splitString[1]}`
            break;
        }else {
            displayNameInfo.textContent = `Contact not found`;
            displayNumberInfo.textContent = ` `;
        }
    }
    searchContact.value = '';
})

searchContact.addEventListener('click', () => {
    if ((displayNameInfo.textContent === 'Contact not found') || (displayNameInfo.textContent !== 'Name')) {
        displayNameInfo.textContent = 'Name';
        displayNumberInfo.textContent = '';
    }
})