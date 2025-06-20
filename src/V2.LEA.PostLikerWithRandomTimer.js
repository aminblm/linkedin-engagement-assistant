// Get all the elements with the specified class
const elements = document.getElementsByClassName("flex-wrap justify-center artdeco-button__text align-items-center");

// Function to simulate clicking with random delay and logging
function clickWithDelay(index) {
  if (index >= elements.length) return;

  elements[index].click();
  console.log(`Liked post #${index + 1}`);

  const delay = Math.floor(Math.random() * 1000) + 500; // 500ms to 1500ms

  setTimeout(() => {
    clickWithDelay(index + 1);
  }, delay);
}

// Start the click loop
clickWithDelay(0);
