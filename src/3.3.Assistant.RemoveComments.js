// Get all the divs containing the inputs
const divs = document.querySelectorAll('div.comments-comment-texteditor');

// Iterate through each div and update the input field
divs.forEach(div => {
  // Get the input field within the current div
  const inputField = div.querySelector('.ql-editor');

  // Set the value of the input field to the randomly selected text
  inputField.innerHTML = "";
});
