// Total scroll duration in milliseconds
const totalDuration = 10 * 60 * 1000; // 10 minutes
// Scroll interval in milliseconds
const interval = 2000; // scroll every 2 seconds

let elapsed = 0;

console.log("🟢 Auto-scroll to bottom started for 10 minutes...");

const scrollInterval = setInterval(() => {
  // Scroll to the bottom of the page
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  elapsed += interval;
  console.log(`🔽 Scrolled to bottom at ${elapsed / 1000}s`);

  if (elapsed >= totalDuration) {
    clearInterval(scrollInterval);
    console.log("🛑 Auto-scroll finished after 10 minutes.");
  }
}, interval);
