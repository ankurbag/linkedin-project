// Store in object
const userProfile = {
	username: "Ankur Bag",
	profilePicture: "./assets/images/man.png",
	jobTitle: "Software Engineer",
};

// load User profile
const loadUserProfile = () => {
	// DOM Manipulation
	// 1. Target the element
	// 2. Store the element in some temp variable
	// 3. Add / remove / Update the elemet
	let usernameElemnts = document.querySelectorAll(".data-username");
	for (const element of usernameElemnts) {
		element.innerHTML = userProfile.username;
	}

	let profilePictureElement = document.querySelector(".data-profile-picture");
	profilePictureElement.src = userProfile.profilePicture;

	let jobTitleElement = document.querySelector(".data-jobtitle");
	jobTitleElement.innerHTML = userProfile.jobTitle;
};

// Create Post
const createPost = () => {
	// Get the  text from the post text box
	let userPostText = document.querySelector(".data-post-text").value;
	console.log(userPostText);

	// Create a new POst component
	/**
	 *              <div class="posts__item">
						<div class="posts__username">User 1 Posted</div>
						<div class="posts__content">
							<p>
								userPostText
							</p>
						</div>
						<div class="posts__like"><button>Like</button></div>
					</div>
	 */
	let postItem = document.createElement("div");
	postItem.classList.add("posts__item");

	let postUserName = document.createElement("div");
	postUserName.classList.add("posts__username");
	postUserName.innerHTML = `${userProfile.username} Posted`;

	let postContent = document.createElement("div");
	postContent.classList.add("posts__content");

	let postContentPar = document.createElement("p");
	postContentPar.innerHTML = userPostText;

	let postlikeDiv = document.createElement("div");
	postlikeDiv.classList.add("posts__like");

	let postBtn = document.createElement("button");
	postBtn.innerHTML = "Like";

	// append this new post component to the post container class post
	postItem.appendChild(postUserName);
	postItem.appendChild(postContent);
	postItem.appendChild(postlikeDiv);

	postContent.appendChild(postContentPar);

	postlikeDiv.appendChild(postBtn);

	document.querySelector(".posts").prepend(postItem);
};

// Function calls
loadUserProfile();
