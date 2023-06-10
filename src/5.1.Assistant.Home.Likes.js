const buttons = document.querySelectorAll('button[aria-pressed="false"]');
const delay = 100; // Adjust the delay in milliseconds (e.g., 1000 = 1 second)

buttons.forEach((button, index) => {
  setTimeout(() => {
    button.click();
  }, index * delay);
});
