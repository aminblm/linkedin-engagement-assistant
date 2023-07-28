// Get all elements with the specified structure
var elements = document.querySelectorAll('div.css-901oao.r-1nao33i.r-37j5jr.r-1b43r93.r-16dba41.r-14yzgew.r-bcqeeo.r-bnwqim.r-qvutc0');

// Create an array to store the element texts
var elementTexts = [];

// Loop through the selected elements
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  
  // Add the text content of each element to the array
  elementTexts.push(element.textContent);
}

// Print the array
console.log(elementTexts);
