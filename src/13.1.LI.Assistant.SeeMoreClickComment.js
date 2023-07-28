// Get all the buttons with the specified attributes
const buttons = document.querySelectorAll('button.feed-shared-inline-show-more-text__see-more-less-toggle.see-more.t-14.t-black--light.t-normal.hoverable-link-text[aria-label="see more, visually reveals content which is already detected by screen readers"]');

// Iterate through each button and simulate a click event
buttons.forEach(button => {
  button.click();
});

// Get all the comment buttons
const commentButtons = document.querySelectorAll('button.comment-button');

// Click each comment button
commentButtons.forEach(button => button.click());
