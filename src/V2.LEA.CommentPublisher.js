// ====== FIND BUTTONS THAT CONTAIN THE "Comment" SPAN ======
const buttons = Array.from(document.querySelectorAll('button')).filter(btn => {
  return btn.innerText.trim() === "Comment";
});

const totalButtons = buttons.length;
console.log(`🟡 Found ${totalButtons} comment button(s) to submit.`);

// ====== FUNCTION TO CLICK AND LOG ======
const clickButton = (button, index) => {
  button.click();
  const timestamp = new Date().toLocaleTimeString();
  console.log(`✅ Clicked comment button #${index + 1} at ${timestamp}`);
};

let accumulatedDelay = 0;

buttons.forEach((button, index) => {
  const randomDelay = Math.floor(Math.random() * 700) + 800; // 800 - 1500 second between each
  accumulatedDelay += randomDelay;

  setTimeout(() => {
    clickButton(button, index);

    if (index === totalButtons - 1) {
      setTimeout(() => {
        console.log(`🎉 All ${totalButtons} comments submitted!`);
      }, 1000);
    }
  }, accumulatedDelay);
});
