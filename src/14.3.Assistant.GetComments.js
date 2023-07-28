// Select all the div elements with the specified structure
const divElements = document.querySelectorAll('div.comments-comment-item-content-body');

// Array to store the extracted text for each div
const textArray = [];

// Iterate over the div elements
divElements.forEach(divElement => {
  // Select the span elements within the current div
  const spanElements = divElement.querySelectorAll('span');

  // Set to store unique extracted text within the current div
  const uniqueTextSet = new Set();

  // Iterate over the span elements and extract the text
  spanElements.forEach(spanElement => {
    const text = spanElement.textContent.trim();
    if (text.length > 0) {
      uniqueTextSet.add(text);
    }
  });

  // Concatenate the unique text from the span elements into a single string
  const divText = Array.from(uniqueTextSet).join(' ');

  // Add the concatenated text to the main array
  textArray.push(divText);
});

// Output the extracted text array
console.log(textArray);
