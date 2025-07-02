(async () => {
  const totalDuration = 10 * 60 * 1000; // 10 minutes
  const scrollInterval = 2000; // every 2s
  const likeDelayMin = 800;
  const likeDelayMax = 1500;

  const getRandomDelay = () => Math.floor(Math.random() * (likeDelayMax - likeDelayMin + 1)) + likeDelayMin;

  console.log("🟢 Auto-scroll + like started...");

  const endTime = Date.now() + totalDuration;

  // Keep track of buttons already liked
  const likedSet = new Set();

  while (Date.now() < endTime) {
    // Scroll to bottom
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    console.log("🔽 Scrolled... waiting for new content");

    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, scrollInterval));

    // Get all like buttons
    const buttons = Array.from(document.querySelectorAll('button.react-button__trigger'))
      .filter(btn => btn.getAttribute('aria-pressed') !== 'true' && !likedSet.has(btn));

    console.log(`✅ Found ${buttons.length} new button(s) to like.`);

    for (const [index, btn] of buttons.entries()) {
      try {
        btn.click();
        likedSet.add(btn);
        console.log(`   👉 Liked post ${index + 1}`);
      } catch (err) {
        console.warn(`   ⚠️ Failed to click button ${index + 1}`);
      }

      await new Promise(resolve => setTimeout(resolve, getRandomDelay()));
    }
  }

  console.log("🛑 Finished auto-like + scroll sequence.");
})();
