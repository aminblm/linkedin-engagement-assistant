// Get all the buttons
const buttons = document.querySelectorAll('button.comments-comment-box__submit-button');

// Function to simulate a button click
const clickButton = (button) => {
  button.click();
};

// Iterate through each button and click it with a delay
buttons.forEach((button, index) => {
  setTimeout(() => {
    clickButton(button);
  }, index * 5000); // Delay each click by 5 seconds (5000 milliseconds)
});

