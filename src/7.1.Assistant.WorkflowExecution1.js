// Get First Name

// Create a new HTML element to hold the provided HTML
var element = document.getElementsByClassName('single-line-truncate t-16 t-black t-bold mt2')[0];
var innerText = element.innerText.trim();

// Split the text content on spaces
const words = innerText.split(' ');

// Print the first element
console.log(words[0]);

var name = words[0];

// # Comment button


// Get all the comment buttons
var commentButtons = document.querySelectorAll('button.comment-button');

// Click each comment button
commentButtons.forEach(button => button.click());


// # Write comments 

// Define an array of customizable texts
const textArray = [
"Well said " + name + "! Thank you for sharing this with us!",
"Congratulations " + name + "! Thank you for sharing this with us!",
"Fantastic " + name + "! Thank you for sharing this with us!",
"Awesome " + name + "! Thank you for sharing this with us!",
"Excellent " + name + "! Thank you for sharing.",
"Superb " + name + "! Thank you for sharing.",
"Terrific " + name + "! Thank you for sharing.",
"Outstanding " + name + "! Thank you for sharing.",
"Marvelous " + name + "! Thank you for sharing.",
"Impressive " + name + "! Many thanks for sharing this with us!",
"Wonderful " + name + "! Many thanks for sharing this with us!",
"Splendid " + name + "! Many thanks for sharing this with us!",
"Fabulous " + name + "! Many thanks for sharing this with us!",
"Brilliant " + name + "! Many thanks for sharing this with us!",
"Amazing " + name + "! Many thanks for sharing.",
"Stellar " + name + "! Many thanks for sharing.",
"Magnificent " + name + "! Many thanks for sharing.",
"Incredible " + name + "! Many thanks for sharing.",
"Phenomenal " + name + "! Many thanks for sharing.",
"Super " + name + "! Deeply thankful for sharing this with us!",
"First-rate " + name + "! Deeply thankful for sharing this with us!",
"Nice post " + name + "! Deeply thankful for sharing this with us!",
"Great post " + name + "! Deeply thankful for sharing this with us!",
"Post of excellence " + name + "! Deeply thankful for sharing this with us!",
"A nicely written post " + name + "! Gratitude for sharing this with us!",
"Impressive post " + name + "! Gratitude for sharing this with us!",
"Well done with the post " + name + "! Gratitude for sharing this with us!",
"Post with a touch of brilliance " + name + "! Gratitude for sharing this with us!",
"Fantastic post " + name + "! Gratitude for sharing.",
"Amazing post " + name + "! Gratitude for sharing.",
"Remarkable post " + name + "! Gratitude for sharing.",
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


// # Load more comments 


// Get all the "Load more comments" buttons
var loadMoreButtons = document.querySelectorAll('button.comments-comments-list__load-more-comments-button');

// Click each "Load more comments" button
loadMoreButtons.forEach(button => button.click());

// # Load more comments 


// Get all the "Load more comments" buttons
var loadMoreButtons = document.querySelectorAll('button.comments-comments-list__load-more-comments-button');

// Click each "Load more comments" button
loadMoreButtons.forEach(button => button.click());
