// Define an array of customizable texts
const textArray =  [
 "Fantastic!! Looking forward to engage more with your amazing content!",
  "Awesome!! Looking forward to engage more with your amazing content!",
  "Excellent!! Looking forward to engage more with your amazing content!",
  "Superb!! Looking forward to engage more with your amazing content!",
  "Terrific!! Looking forward to engage more with your amazing content!",
  "Outstanding!! Looking forward to engage more with your amazing content!",
  "Marvelous!! Looking forward to engage more with your amazing content!",
  "Impressive!! Looking forward to engage more with your amazing content!",
  "Wonderful!! Looking forward to engage more with your amazing content!",
  "Splendid!! Looking forward to engage more with your amazing content!",
  "Fabulous!! Looking forward to engage more with your amazing content!",
  "Brilliant!! Looking forward to engage more with your amazing content!",
  "Amazing!! Looking forward to engage more with your amazing content!",
  "Stellar!! Looking forward to engage more with your amazing content!",
  "Magnificent!! Looking forward to engage more with your amazing content!",
  "Incredible!! Looking forward to engage more with your amazing content!",
  "Phenomenal!! Looking forward to engage more with your amazing content!",
  "Super!! Looking forward to engage more with your amazing content!",
  "First-rate!! Looking forward to engage more with your amazing content!",
  "Nice post! Looking forward to engage more with your amazing content!",
  "Post, nice! Looking forward to engage more with your amazing content!",
  "Post that is nice! Looking forward to engage more with your amazing content!",
  "A post worth appreciating! Looking forward to engage more with your amazing content!",
  "Great post! Looking forward to engage more with your amazing content!",
  "Post of excellence! Looking forward to engage more with your amazing content!",
  "A nicely written post! Looking forward to engage more with your amazing content!",
  "Impressive post! Looking forward to engage more with your amazing content!",
  "Well done with the post! Looking forward to engage more with your amazing content!",
  "Post, nicely done! Looking forward to engage more with your amazing content!",
  "Post with a touch of brilliance! Looking forward to engage more with your amazing content!",
  "Fantastic post! Looking forward to engage more with your amazing content!",
  "Post that deserves applause! Looking forward to engage more with your amazing content!",
  "Kudos for the post! Looking forward to engage more with your amazing content!",
  "Post that shines! Looking forward to engage more with your amazing content!",
  "An amazing post! Looking forward to engage more with your amazing content!",
  "Remarkable post! Looking forward to engage more with your amazing content!",
  "Post with a wow factor! Looking forward to engage more with your amazing content!",
  "Outstanding post! Looking forward to engage more with your amazing content!",
  "Nice, thanks for sharing! Looking forward to engage more with your amazing content!",
  "A delightful share!! Looking forward to engage more with your amazing content!",
  "Thanks for the nice share! Looking forward to engage more with your amazing content!",
  "A nice share to remember! Looking forward to engage more with your amazing content!"
  ]

let variations = [
  "Let's connect and see you in there!",
  "Looking forward to connecting with you and seeing you in there!",
  "Excited to connect and meet you in there!",
  "Can't wait to connect and see you in there!",
  "Let's get connected and catch you in there!",
  "Hoping to connect with you and see you in there!",
  "Eager to connect and meet up with you in there!",
  "Ready to connect and see you in there!",
  "Looking forward to the connection and seeing you in there!",
  "Let's link up and catch you in there!"
];

// Modify the textArray
const modifiedTextArray = textArray.map(text => text.replace(/[!.]/g, '$& '));

// Function to append text to the content of the elements
function appendTextToElements() {
  // Get all the divs containing the inputs
  const divs = document.querySelectorAll('div.comments-comment-texteditor');

  // Iterate through each div and update the input field
  divs.forEach(div => {
    // Get the input field within the current div
    const inputField = div.querySelector('.ql-editor');

    // Randomly select a text from the array
    const randomIndex = Math.floor(Math.random() * modifiedTextArray.length);
    const randomText = modifiedTextArray[randomIndex];

    // Append the randomly selected text to the existing content without a new line
    inputField.innerHTML += randomText;
  });
}

// Run the script
appendTextToElements();
