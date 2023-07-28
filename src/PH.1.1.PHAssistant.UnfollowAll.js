// Get all the buttons with the specified data-test attribute
const buttons = document.querySelectorAll('button[data-test="follow-button"]');

// Loop through each button and simulate a click event
buttons.forEach(button => {
  button.click();
});
