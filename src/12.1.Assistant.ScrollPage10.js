function scrollPage() {
  // Set the number of times to scroll and the interval in milliseconds
  const scrollCount = 10;
  const interval = 15000;

  let scrollIndex = 0;

  // Function to scroll the page
  function scrollToNext() {
    if (scrollIndex < scrollCount) {
      window.scrollTo(0, document.body.scrollHeight);
      scrollIndex++;
    } else {
      clearInterval(scrollInterval);
    }
  }

  // Start the scrolling interval
  const scrollInterval = setInterval(scrollToNext, interval);
}

// Call the scrollPage function to start scrolling the page
scrollPage();
