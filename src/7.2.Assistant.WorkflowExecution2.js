// # Load more comments 


// Get all the "Load more comments" buttons
var loadMoreButtons = document.querySelectorAll('button.comments-comments-list__load-more-comments-button');

// Click each "Load more comments" button
loadMoreButtons.forEach(button => button.click());

const textArray = [
    "Well said! Thank you for sharing this with us!",
"Congratulations! Thank you for sharing this with us!",
"Fantastic! Thank you for sharing this with us!",
"Awesome! Thank you for sharing this with us!",
"Excellent! Thank you for sharing.",
"Superb! Thank you for sharing.",
"Terrific! Thank you for sharing.",
"Outstanding! Thank you for sharing.",
"Marvelous! Thank you for sharing.",
"Impressive! Many thanks for sharing this with us!",
"Wonderful! Many thanks for sharing this with us!",
"Splendid! Many thanks for sharing this with us!",
"Fabulous! Many thanks for sharing this with us!",
"Brilliant! Many thanks for sharing this with us!",
"Amazing! Many thanks for sharing.",
"Stellar! Many thanks for sharing.",
"Magnificent! Many thanks for sharing.",
"Incredible! Many thanks for sharing.",
"Phenomenal! Many thanks for sharing.",
"Super! Deeply thankful for sharing this with us!",
"First-rate! Deeply thankful for sharing this with us!",
"Nice post! Deeply thankful for sharing this with us!",
"Great post! Deeply thankful for sharing this with us!",
"Post of excellence! Deeply thankful for sharing this with us!",
"A nicely written post! Gratitude for sharing this with us!",
"Impressive post! Gratitude for sharing this with us!",
"Well done with the post! Gratitude for sharing this with us!",
"Post with a touch of brilliance! Gratitude for sharing this with us!",
"Fantastic post! Gratitude for sharing.",
"Amazing post! Gratitude for sharing.",
"Remarkable post! Gratitude for sharing.",
];


// Modify the textArray
const modifiedTextArray = textArray.map(text => {
  // Add '\n\n' after '!' or '.'
  const modifiedText = text.replace(/([!.])(\s*)/g, '$1\n\n');

  // Modify the text with a 50% chance
  const shouldModify = Math.random() < 0.5;
  const modifiedRandomText = shouldModify ? modifiedText : text;

  return modifiedRandomText;
});

// Get all the divs containing the inputs
const divs = document.querySelectorAll('div.comments-comment-texteditor');

// Iterate through each div and update the input field
divs.forEach(div => {
  // Get the input field within the current div
  const inputField = div.querySelector('.ql-editor');
  
  // Randomly select a text from the array
  const randomIndex = Math.floor(Math.random() * textArray.length);
  const randomText = modifiedTextArray[randomIndex];

  // Set the value of the input field to the randomly selected text
  inputField.innerHTML = randomText;
});
