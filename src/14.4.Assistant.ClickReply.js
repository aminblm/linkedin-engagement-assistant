// Get all the reply buttons on the page
const replyButtons = document.querySelectorAll('button.comments-comment-social-bar__reply-action-button');

// Click each reply button
replyButtons.forEach((button) => {
  button.click();
});

