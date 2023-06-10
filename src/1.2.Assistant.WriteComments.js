// Define an array of customizable texts
const textArray =  [
  "Fantastic!",
  "Awesome!",
  "Excellent!",
  "Superb!",
  "Terrific!",
  "Outstanding!",
  "Marvelous!",
  "Impressive!",
  "Wonderful!",
  "Splendid!",
  "Fabulous!",
  "Brilliant!",
  "Amazing!",
  "Stellar!",
  "Magnificent!",
  "Incredible!",
  "Phenomenal!",
  "Super!",
  "First-rate!",
  "Nice post",
  "Post, nice",
  "Post that is nice",
  "A post worth appreciating",
  "Great post",
  "Post of excellence",
  "A nicely written post",
  "Impressive post",
  "Well done with the post",
  "Post, nicely done",
  "Post with a touch of brilliance",
  "Fantastic post",
  "Post that deserves applause",
  "Kudos for the post",
  "Post that shines",
  "An amazing post",
  "Remarkable post",
  "Post with a wow factor",
  "Outstanding post",
  "Nice, thanks for sharing.",
  "A delightful share!",
  "Thanks for the nice share.",
  "A nice share to remember."]
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
