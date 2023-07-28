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
  "Congratulations " + name + "! Way to go!",
  "Fantastic " + name + "! Way to go!",
  "Awesome " + name + "! Way to go!",
  "Excellent " + name + "! Way to go!",
  "Superb " + name + "! Way to go!",
  "Terrific " + name + "! Way to go!",
  "Outstanding " + name + "! Way to go!",
  "Marvelous " + name + "! Way to go!",
  "Impressive " + name + "! Way to go!",
  "Wonderful " + name + "! Way to go!",
  "Splendid " + name + "! Way to go!",
  "Fabulous " + name + "! Way to go!",
  "Brilliant " + name + "! Way to go!",
  "Amazing " + name + "! Way to go!",
  "Stellar " + name + "! Way to go!",
  "Magnificent " + name + "! Way to go!",
  "Incredible " + name + "! Way to go!",
  "Phenomenal " + name + "! Way to go!",
  "Super " + name + "! Way to go!",
  "First-rate " + name + "! Way to go!",
  "Nice post " + name + "! Way to go!",
  "Great post " + name + "! Way to go!",
  "Post of excellence " + name + "! Way to go!",
  "A nicely written post " + name + "! Way to go!",
  "Impressive post " + name + "! Way to go!",
  "Well done with the post " + name + "! Way to go!",
  "Post with a touch of brilliance " + name + "! Way to go!",
  "Fantastic post " + name + "! Way to go.",
  "Amazing post " + name + "! Way to go.",
  "Remarkable post " + name + "! Way to go.",
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
