// # Write comments 

// Define an array of customizable texts
const textArray = [
  "OpenAI just released its Code interpreter to all Plus users. You now have access to a junior programmer at the speed of your fingertips. That's an incredible opportunity to enhance your coding skills and explore new possibilities.",
  "AI is moving faster than ever. With ChatGPT, organizing your unstructured meeting notes has never been easier. By following a clear and specific prompt, you can extract relevant information efficiently and improve your note-taking process.",
  "The idea you shared sounds intriguing! It's important to carefully consider investment opportunities, and if you believe in the potential of Threads, it might be worth exploring. Just remember to conduct thorough research and make informed decisions.",
  "Narvi's crypto-friendly business accounts offer a convenient and secure solution for blockchain enthusiasts. With a dedicated IBAN under your company's name, you can streamline your financial operations and enjoy a fully digital onboarding process.",
  "Having a significant number of followers on social media, like Sixtine, can bring various benefits. It allows you to engage with a community, share your expertise, and leverage your influence to create meaningful connections and opportunities.",
  "The point Gad Elmaleh made in his interview is profound. Success doesn't always happen overnight; it often requires perseverance and consistent effort over a long period. Keep pushing forward, and your hard work will eventually pay off.",
  "Sultan Altukhaim's insights shed light on the challenges of implementing AI in cybersecurity. While AI has potential, it's crucial to address the complexities and ensure its effectiveness before widespread deployment. Building robust cybersecurity measures is an ongoing process.",
  "The panel discussion on privacy by design at the Global Cyber Conference sounds fascinating. It's crucial for Swiss organizations to adapt to new challenges and find innovative solutions to protect privacy in an increasingly digital world.",
  "Michal Cichocki's involvement in the Global Cyber Conference highlights the importance of privacy by design. Swiss organizations face unique challenges, and discussing solutions with experts like Michal can contribute to stronger data protection practices.",
  "LINAK's virtual showroom offers an immersive experience with diverse 3D applications and products for healthcare, nursing, rehabilitation, and wellness. Explore their offerings and witness how they bring movement to medical applications.",
  "Meta's launch of Threads presents an interesting development in the social media landscape. It's important to consider the implications and make informed choices based on your privacy preferences and desired platform experience.",
  "Congratulations on becoming a Certified Information Privacy Professional! Your expertise in EU legislation will be valuable in navigating the complex landscape of data protection. Feel free to share your insights and help others understand privacy regulations better.",
  "Der virtuelle Showroom von LINAK bietet eine beeindruckende Vielfalt an 3D-Anwendungen und Produkten für Krankenhäuser, Pflegeeinrichtungen, Rehabilitation und Wellness. Entdecken Sie die faszinierende Welt von LINAK und deren Beitrag zur medizinischen Anwendung.",
  "The power of LinkedIn is undeniable. Your experience of hiring someone and then supporting them with a laptop demonstrates the positive impact we can have on each other's lives. It's a reminder of the potential for kindness and community within professional networks.",
  "Finding fulfillment in your career is more than just working for prestigious companies. Prioritizing passion, learning, work-life balance, and healthy relationships can lead to a more rewarding professional life. It's important to celebrate great workplaces regardless of their size or reputation.",
  "Digital signage has revolutionized advertising, offering impactful and effective ways to engage with audiences. Its ability to increase sales, attract attention, and provide real-time advertising demonstrates its power as a revenue and awareness generator.",
  "Don't miss out on DSSEurope2023! It's an exciting opportunity to engage in discussions, gain insights, and network with industry leaders in the world of digital signage. Secure your tickets through the ISE website and be part of this groundbreaking event.",
  "Leaving valuable comments on social media platforms, including LinkedIn, can significantly impact your follower count. Engaging with others by providing insights, humor, or knowledge enhances your visibility and fosters connections. Start commenting and watch your network grow!",
  "Your career and personal life should find a balance that suits you. Prioritize what truly matters and create a fulfilling professional journey. By valuing fantastic clients, personal growth, and quality time, you can achieve a sense of satisfaction and success.",
  "Your act of kindness on LinkedIn showcases the incredible potential to make a difference in someone's life. By offering support, you uplift individuals and contribute to a positive and compassionate community. Never underestimate the impact you can have, no matter how small the gesture.",
  "Deine Arbeit bei Novartis bietet zahlreiche Vorteile, wie Flexibilität, umfangreiche Weiterbildungsprogramme, moderne Firmenpension und vieles mehr. Es ist großartig zu sehen, dass Novartis auf eine angenehme Arbeitsumgebung und Mitarbeiterentwicklung setzt. Du bist ein wichtiger Teil des Teams!",
];


// Define an array of customizable texts
const textArray2 = [
    "Congratulations! Way to go!",
    "Fantastic! Way to go!",
    "Awesome! Way to go!",
    "Excellent! Way to go!",
    "Superb! Way to go!",
    "Terrific! Way to go!",
    "Outstanding! Way to go!",
    "Marvelous! Way to go!",
    "Impressive! Way to go!",
    "Wonderful! Way to go!",
    "Splendid! Way to go!",
    "Fabulous! Way to go!",
    "Brilliant! Way to go!",
    "Amazing! Way to go!",
    "Stellar! Way to go!",
    "Magnificent! Way to go!",
    "Incredible! Way to go!",
    "Phenomenal! Way to go!",
    "Super! Way to go!",
    "First-rate! Way to go!",
    "Nice post! Way to go!",
    "Great post! Way to go!",
    "Post of excellence! Way to go!",
    "A nicely written post! Way to go!",
    "Impressive post! Way to go!",
    "Well done with the post! Way to go!",
    "Post with a touch of brilliance! Way to go!",
    "Fantastic post! Way to go.",
    "Amazing post! Way to go.",
    "Remarkable post! Way to go.",
    ];
    


// Get all the divs containing the inputs
const divs = document.querySelectorAll('div.comments-comment-texteditor');

// Iterate through each div and update the input field
divs.forEach((div, index) => {
      if (index < textArray.length) {
          // Modify the textArray
const modifiedTextArray = textArray.map(text => {
  // Add '\n\n' after '!' or '.'
  const modifiedText = text.replace(/([!.])(\s*)/g, '$1\n\n');

  // Modify the text with a 50% chance
  const shouldModify = Math.random() < 0.99;
  const modifiedRandomText = shouldModify ? modifiedText : text;

  return modifiedRandomText;
});
  // Get the input field within the current div
  const inputField = div.querySelector('.ql-editor');

  // Assign the value from the modifiedTextArray based on the index
  const modifiedText = modifiedTextArray[index];

  // Set the value of the input field to the corresponding modified text
  inputField.innerHTML = modifiedText;
      } else {
          // Modify the textArray
const modifiedTextArray2 = textArray2.map(text => {
  // Add '\n\n' after '!' or '.'
  const modifiedText2 = text.replace(/([!.])(\s*)/g, '$1\n\n');

  // Modify the text with a 50% chance
  const shouldModify2 = Math.random() < 0.5;
  const modifiedRandomText2 = shouldModify2 ? modifiedText2 : text;

  return modifiedRandomText2;
});
        // Get the input field within the current div
      const inputField = div.querySelector('.ql-editor');
      
      // Randomly select a text from the array
      const randomIndex2 = Math.floor(Math.random() * textArray2.length);
      const randomText2 = modifiedTextArray2[randomIndex2];
    
      // Set the value of the input field to the randomly selected text
      inputField.innerHTML = randomText2;
    }
});
