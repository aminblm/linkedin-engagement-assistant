// Get all the elements with the specified class
const elements = document.getElementsByClassName("flex-wrap justify-center artdeco-button__text align-items-center");

// Iterate through each button and click it with a delay
elements.forEach((element, index) => {
  setTimeout(() => {
    clickButton(element);
  }, index * 500); // Delay each click by 0.5 seconds (5000 milliseconds)
});