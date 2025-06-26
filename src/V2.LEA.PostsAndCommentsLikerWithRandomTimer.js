// Get all "Like" buttons
const allButtons = Array.from(document.querySelectorAll('button.react-button__trigger'));

// Separate them into already liked and not liked
const likedButtons = allButtons.filter(button => button.getAttribute('aria-pressed') === 'true');
const toBeLikedButtons = allButtons.filter(button => button.getAttribute('aria-pressed') !== 'true');

// Log already liked buttons
console.log(`❌ Skipping ${likedButtons.length} already liked button(s):`);
likedButtons.forEach((btn, i) => {
  console.log(`   - Skipped button ${i + 1}`);
});

// Log buttons that will be liked
console.log(`✅ Found ${toBeLikedButtons.length} button(s) to like:`);

// Delay config
const minDelay = 800;
const maxDelay = 1500;
const getRandomDelay = () => Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

// Click each to-be-liked button with delay
let totalDelay = 0;
toBeLikedButtons.forEach((button, index) => {
  const delay = getRandomDelay();
  totalDelay += delay;

  setTimeout(() => {
    button.click();
    console.log(`   👉 Clicked button ${index + 1} after ${totalDelay}ms`);
  }, totalDelay);
});
