//Folder names should be kebab case
// JS variables should be camelCase

//Store Data
let username = "Ankur Bag";
let profilePicture = "./assets/image/man.png";
let jobTitle = "Software Engineer";

//DOM Manipulation
// ____________________
// 1. Target the element
// 2. Store the element in some temporary variable
// 3. Add or remove or update the element

let usernameElement = document.querySelectorAll(".data-username");
usernameElement.innerHTML = username;
for (let i = 0; i, usernameElements.length; i++) {
  usernameElements[i].innerHTML = username;
}
for (const element of usernameElements) {
  element.innerHTML = username;
}

let profilePictureElement = document.querySelector(".data-profile-picture");
profilePictureElement.src = profilePicture;

let jobTitleElement = document.querySelector(".data-jobtitle");
jobTitleElement.innerHTML - jobTitle;

// "Data-"is used as a industry aceepted principle to target information for HTML