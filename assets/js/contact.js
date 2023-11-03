// File: contact.js
// Author: Stephen C Sanders <https://stephensanders.me>
// License: MIT

// Target Contact button
var contactButton = document.getElementById("contact-button");

// Run when Contact button is clicked
contactButton.addEventListener('click', () => {
	// Set email address
	var asdfg = "scsandman6496"
	var hjklp = "gmail.com"
	var d = asdfg + "@" + hjklp

	// Needed to open default email program
	var m = "mail" + "to" + ":"

	// Set message
	var message = "If you have any questions or professional inquiries, " 
	message += "feel free to email me at " + "<a href=\"" + m + d + "\" style=\"color:#981A61 !important;\">" + d + "</a>.\n"
	message += "I am open to working on projects for small businesses.\n"
	message += "In any case, I will attempt to get back to you as soon as I can.\nThank you!"

	// Create new Popup and set relevant information
	const Contact = new Popup({
    	id: "contact-popup",
    	title: "Contact",
    	content: message,
	});

	// Show the Contact pop-up
	Contact.show();
});