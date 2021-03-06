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
  contacts.push(`${addName.value.toLowerCase()}:${addNumber.value}`);
  const newContact = document.createElement("li");
  newContact.textContent = capitalizeFirstLetter(addName.value);
  contactList.appendChild(newContact);
  // resetting inputs:
  addName.value = "";
  addNumber.value = "";
  addName.focus();
});

// Validating name input
addName.addEventListener('input', () => {
  let letters = /^[A-Za-z]+$/;
   if(addName.value.match(letters))
     {
      return true;
     }
   else
     {
     addName.setCustomValidity('Invalid Name!!!')
     addName.value = '';
    return addName.reportValidity()
     }
})

// validating number input
addNumber.addEventListener("input", () => {
  if (!Number(addNumber.value)) {
    addNumber.setCustomValidity('Invalid number!!!');
    addNumber.value = '';
    return addNumber.reportValidity()
  }else {
    addNumber.setCustomValidity('');
  }
})

// searching for contact number:
searchBTN.addEventListener("click", () => {
  for (let contact of contacts) {
    const splitString = contact.split(":");

    if (searchContact.value.toLowerCase() === splitString[0]) {
      displayNameInfo.textContent = `${capitalizeFirstLetter(splitString[0])}`;
      displayNumberInfo.textContent = `${splitString[1]}`;
      break;
    } else {
      displayNameInfo.textContent = `Contact not found!!!`;
      displayNumberInfo.textContent = ` `;
    }
  }
  searchContact.value = "";
});

