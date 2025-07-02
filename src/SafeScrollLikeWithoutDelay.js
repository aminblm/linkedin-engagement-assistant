(async () => {
  const totalDuration = 10 * 60 * 1000; // 10 minutes
  const likeDelayMin = 800;
  const likeDelayMax = 1500;

  const getRandomDelay = () =>
    Math.floor(Math.random() * (likeDelayMax - likeDelayMin + 1)) + likeDelayMin;

  console.log("🟢 Auto-scroll started (continuous) + async liking...");

  const endTime = Date.now() + totalDuration;
  const likedSet = new Set();

  // 🔁 Continuous scroll every 2s
  const scrollInterval = setInterval(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    console.log("🔽 Scrolled to bottom...");
  }, 2000);

  // 🔁 Liking loop
  while (Date.now() < endTime) {
    // Get all new likeable buttons
    const buttons = Array.from(document.querySelectorAll('button.react-button__trigger'))
      .filter(btn => btn.getAttribute('aria-pressed') !== 'true' && !likedSet.has(btn));

    if (buttons.length === 0) {
      console.log("⏸️ No new buttons to like. Waiting 10s...");
      await new Promise(resolve => setTimeout(resolve, 10000));
      continue;
    }

    console.log(`✅ Found ${buttons.length} button(s) to like...`);

    for (const [index, btn] of buttons.entries()) {
      try {
        btn.click();
        likedSet.add(btn);
        console.log(`   👉 Liked post ${index + 1}`);
      } catch (err) {
        console.warn(`   ⚠️ Failed to like button ${index + 1}`);
      }

      await new Promise(resolve => setTimeout(resolve, getRandomDelay()));
    }
  }

  clearInterval(scrollInterval);
  console.log("🛑 Finished auto-like after 10 minutes.");
})();
