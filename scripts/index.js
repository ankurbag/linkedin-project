//Folder names should be kebab case
// JS variables should be camelCase

//Store Data
let username = "Richard Trusty";
let profilePicture = "./assests/images/man/png";
let jobTitle = "Software Engineer";

//DOM Manipulation
// 1. Target the element
// 2. Store the element in some temporary variable
// 3. Add or remove or update the element

let usernameElement = document.querySelectorAll(".data-username");
usernameElement.innerText = username;

for (let i = 0; i < usernameElement.length; i++) {
  usernameElement[i].innerText = username;
}

let jobTitleElement = document.querySelectorAll(".data-jobtitle");
jobTitleElement.innerHTML = jobTitle;

let profilePictureElement = document.querySelector(".data-profile-picture");
profilePictureElement.src = profilePicture;

//Next step is to store this in an object and execute
