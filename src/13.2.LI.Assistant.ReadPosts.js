// Get all the div elements with the specified structure
const divElements = document.querySelectorAll('.feed-shared-update-v2__description-wrapper .feed-shared-inline-show-more-text .update-components-text .break-words span');

// Set to store unique extracted text
const uniqueTextSet = new Set();

// Iterate over the div elements and extract the text
divElements.forEach((divElement) => {
const text = divElement.textContent.trim();
uniqueTextSet.add(text);
});

// Convert the set to an array
const uniqueTextArray = Array.from(uniqueTextSet);

// Log the extracted unique text
console.log(uniqueTextArray);