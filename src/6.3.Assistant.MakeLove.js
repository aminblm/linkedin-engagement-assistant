// Get all the elements with the specified class
const elements = document.getElementsByClassName("flex-wrap justify-center artdeco-button__text align-items-center");

// Iterate through each element and simulate a click event on the love button
for (let i = 0; i < elements.length; i++) {
  const loveButton = elements[i].querySelector('.love-button');
  loveButton.click();
}