// Get all the "Like" comment buttons
const likeButtons = document.querySelectorAll('button.react-button__trigger');

// Set min and max delay in milliseconds
const minDelay = 800;
const maxDelay = 1500;

// Function to get a random delay between min and max
const getRandomDelay = () => Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

// Click each button with a random staggered delay
let totalDelay = 0;
likeButtons.forEach((button, index) => {
  const delay = getRandomDelay();
  totalDelay += delay;

  setTimeout(() => {
    button.click();
    console.log(`Clicked button ${index + 1} after ${totalDelay}ms`);
  }, totalDelay);
});
