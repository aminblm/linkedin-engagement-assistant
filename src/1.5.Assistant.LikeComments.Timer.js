// Get all the "Like" comment buttons
const likeButtons = document.querySelectorAll('button.react-button__trigger');

// Iterate through each button and click it with a delay
likeButtons.forEach((button, index) => {
  setTimeout(() => {
    clickButton(button);
  }, index * 500); // Delay each click by 0.5 seconds (5000 milliseconds)
});