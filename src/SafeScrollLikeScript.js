(async () => {
  const totalDuration = 10 * 60 * 1000; // 10 minutes
  const scrollInterval = 2000; // scroll every 2s if likes are found
  const waitIfNoneFound = 60 * 1000; // wait 1 minute if no like buttons
  const likeDelayMin = 800;
  const likeDelayMax = 1500;

  const getRandomDelay = () => Math.floor(Math.random() * (likeDelayMax - likeDelayMin + 1)) + likeDelayMin;

  console.log("🟢 Auto-scroll + like started...");

  const endTime = Date.now() + totalDuration;
  const likedSet = new Set();

  while (Date.now() < endTime) {
    // Get unliked buttons not yet clicked
    const buttons = Array.from(document.querySelectorAll('button.react-button__trigger'))
      .filter(btn => btn.getAttribute('aria-pressed') !== 'true' && !likedSet.has(btn));

    if (buttons.length === 0) {
      console.log("⏸️ No new like buttons found. Waiting 1 minute...");
      await new Promise(resolve => setTimeout(resolve, waitIfNoneFound));
    } else {
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

      // After processing likes, scroll to bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      console.log("🔽 Scrolled... waiting for more posts");

      await new Promise(resolve => setTimeout(resolve, scrollInterval));
    }
  }

  console.log("🛑 Finished auto-like + scroll sequence.");
})();
