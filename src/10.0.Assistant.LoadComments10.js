// Define a variable to keep track of the number of times the script has run
let count = 0;

// Function to click the "Load more comments" buttons
function clickLoadButtons() {
  // Get all the "Load more comments" buttons
  const loadButtons = document.querySelectorAll('button.comments-comments-list__load-more-comments-button');

  // Click each "Load more comments" button
  loadButtons.forEach(button => button.click());

  // Increment the count
  count++;

  // Check if the script has run 10 times, and clear the interval if it has
  if (count === 10) {
    clearInterval(interval);
  }
}

// Run the script immediately
clickLoadButtons();

// Set the interval to run the script every 15 seconds
const interval = setInterval(clickLoadButtons, 15000);
