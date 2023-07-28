const buttons = document.querySelectorAll('div.action-button.action-button-small.follow-button:not([class*="unfollow"])');

buttons.forEach(button => {
  button.click();
});