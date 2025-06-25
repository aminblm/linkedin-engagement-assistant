// ====== DEFINE CUSTOM ENGAGING COMMENTS ======
const textArray = [
  "Love this perspective",
  "Beautifully said",
  "This really hits home",
  "Very inspiring, thank you",
  "This resonated deeply with me",
  "A post that truly connects",
  "You’ve put this into words so well",
  "Needed to read this today",
  "Powerful share, grateful you posted this",
  "The energy in this post is contagious",
  "You’re sparking real reflection with this one",
  "Such a grounded and wise message",
  "You’re giving voice to what many feel",
  "Insightful and well-articulated, thank you",
  "Your authenticity shines through here",
  "Clarity and truth in every line",
  "You’re elevating the conversation",
  "There’s real value in this message",
  "This is what leadership looks like",
  "Deeply aligned with this",
  "Rooted, honest, and powerful",
  "Thank you for showing up with this",
  "This kind of message moves people",
  "You’re leading with truth here",
  "A rare kind of post, it lands",
  "Respect for putting this out there",
  "This is the kind of energy LinkedIn needs more of"
];

// ====== ENSURE COMMENTS END WITH '!' ======
const modifiedTextArray = textArray.map(text => {
  const cleaned = text.trim().replace(/[.!]*$/, ''); // remove ending . or !
  return cleaned + '!';
});

// ====== FILL INPUT FIELDS WITH RANDOM COMMENTS ======
const divs = document.querySelectorAll('div.comments-comment-texteditor');
let commentCount = 0;

divs.forEach((div, index) => {
  const inputField = div.querySelector('.ql-editor');
  const randomIndex = Math.floor(Math.random() * modifiedTextArray.length);
  const randomText = modifiedTextArray[randomIndex];

  if (inputField) {
    inputField.innerHTML = randomText;
    console.log(`Prepared comment #${index + 1}: "${randomText}"`);
    commentCount++;
  }
});
