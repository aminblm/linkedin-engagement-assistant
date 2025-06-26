// Total scroll duration in milliseconds
const totalDuration = 10 * 60 * 1000; // 10 minutes
// Scroll interval in milliseconds
const interval = 2000; // scroll every 2 seconds
// Scroll amount in pixels
const scrollAmount = 400;

// Track elapsed time
let elapsed = 0;

console.log("🟢 Auto-scroll started for 10 minutes...");

const scrollInterval = setInterval(() => {
  window.scrollBy(0, scrollAmount); // Scroll down
  elapsed += interval;
  console.log(`🔄 Scrolled after ${elapsed / 1000}s`);

  if (elapsed >= totalDuration) {
    clearInterval(scrollInterval);
    console.log("🛑 Auto-scroll finished after 10 minutes.");
  }
}, interval);
