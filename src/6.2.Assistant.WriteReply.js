// Array of texts
const texts = [
  "Hello",
  "How are you?",
  "Nice to meet you",
  "Greetings",
  "Goodbye"
];

// Get all the divs containing the inputs
const divs = document.querySelectorAll('div.editor-content');

// Iterate through each div and update the input field
divs.forEach(function(div) {
  // Get the input field within the current div
  const inputField = div.querySelector('.ql-editor');

  // // Check if the placeholder is "Add a reply"
  // if (inputField.getAttribute('data-placeholder') === 'Add a reply...') {
    // Set the value of the input field to the randomly selected text
    const randomIndex = Math.floor(Math.random() * texts.length);
    inputField.textContent = texts[randomIndex];
  // }
});
