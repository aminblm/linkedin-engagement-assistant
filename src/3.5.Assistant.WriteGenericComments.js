// Define an array of customizable texts
const textArray =  [
  "Excellent post! Your insights showcase a deep understanding of the subject matter. Your words have truly inspired me to delve deeper into this topic. Thank you for sharing!",
  "This post is a true gem! The valuable insights you've provided demonstrate your expertise in this area. Your words have motivated me to explore new perspectives. Thank you for enlightening us!",
  "Thank you for sharing this outstanding post! Your profound insights have left a lasting impact on me. Your ability to articulate complex ideas is truly commendable. Keep up the fantastic work!",
  "Your post is a masterpiece! The wisdom and inspiration it carries are remarkable. Your ability to engage and educate your audience is evident. Thank you for sharing your valuable perspective!",
  "I'm truly impressed by your post! Your insightful analysis and thought-provoking ideas have ignited a fresh perspective in me. Your expertise shines through your words. Thank you for enriching our knowledge!",
  "What an exceptional post! Your profound insights and articulate writing style make this an enlightening read. Your ability to captivate and motivate readers is truly admirable. Thank you for sharing your expertise!",
  "Bravo on this outstanding post! Your thoughtfulness and expertise shine brightly. The depth of your analysis and the clarity of your writing have made a significant impact on me. Thank you for sharing your valuable insights!",
  "Thank you for this brilliant post! Your expertise and passion for the subject matter are evident. Your ability to convey complex ideas in a clear and engaging manner is truly impressive. Keep up the fantastic work!",
  "This post is a true testament to your expertise and dedication. Your insights and guidance have truly inspired me to take a deeper dive into the subject. Thank you for sharing your valuable knowledge!",
  "Your post is a breath of fresh air! The depth of your analysis and the clarity of your writing make it an absolute pleasure to read. Thank you for sharing your invaluable insights!",
"Your post is a remarkable contribution! The depth of your insights is truly commendable. Thank you for sharing such valuable and inspiring content!",
    "I'm genuinely impressed by your post! It offers a fresh perspective and thought-provoking ideas. Thank you for enriching the discussion with your valuable insights!",
    "Kudos on a brilliant post! Your expertise shines through your words, making it a truly enlightening read. Thank you for sharing your valuable insights and inspiring us!",
    "What an exceptional post! Your profound insights provide a unique perspective that challenges conventional thinking. Thank you for sharing such thought-provoking and inspiring content!",
    "Thank you for this exceptional post! Your expertise and clarity of thought make it an enlightening read. Your insights are truly valuable and have inspired me to take action!",
    "Your post is a masterpiece! The way you articulate your thoughts and provide in-depth analysis is truly remarkable. Thank you for sharing your valuable insights and inspiring us all!",
    "I'm thoroughly impressed by your post! Your meticulous research and articulate presentation make it a valuable resource. Thank you for sharing your profound insights and inspiring us!",
    "Your post is a true gem! The depth of your knowledge and the clarity of your writing make it an exceptional read. Thank you for sharing your valuable insights and inspiring us!",
    "What a thought-provoking post! Your well-reasoned arguments and logical analysis demonstrate your expertise. Thank you for sharing such valuable insights and inspiring meaningful discussions!",
    "Thank you for this outstanding post! Your wisdom and genuine desire to help others shine through your words. Your insights are truly valuable and have inspired me to take positive action!",
"Thank you for sharing such an exceptional post! Your insights have profoundly impacted my perspective and will undoubtedly inspire others within our industry.",
    "Your post is a brilliant masterpiece! The depth of your knowledge and the eloquence of your words make it an absolute pleasure to read. Truly exceptional!",
    "I must express my utmost appreciation for your outstanding post! The wisdom and expertise you've shared are invaluable assets to anyone seeking professional growth and success.",
    "Kudos on this remarkable post! Your profound insights and the clarity with which you've presented them have left an indelible mark on my professional journey. Thank you!",
    "This post is a true gem! The depth of your analysis, combined with your articulate writing style, make it an absolute delight to read. Thank you for sharing!",
    "I am genuinely impressed by your thought-provoking post! Your expertise shines through every word, and your ability to inspire and educate is truly commendable. Well done!",
    "Your post is a breath of fresh air in our industry! The combination of your extensive knowledge, genuine kindness, and eloquent delivery make it an absolute masterpiece.",
    "I want to express my deepest gratitude for this outstanding post! Your insights have ignited a renewed passion within me and motivated me to strive for excellence.",
    "Hats off to you for this extraordinary post! Your ability to convey complex ideas with utmost clarity and sincerity is truly commendable. Thank you for your valuable contribution!",
    "I am genuinely moved by the excellence of your post! The way you've shared your insights, supported by compelling arguments, sets a benchmark for professional writing. Truly remarkable!",
 "Your post is absolutely fantastic! It's filled with valuable insights that truly inspire. Thank you for sharing such incredible knowledge!",
  "I am in awe of your insightful post! Your words carry immense value and serve as a true inspiration to others. Keep up the amazing work!",
  "This post is an exceptional piece of wisdom! Your insights are valuable beyond measure and have the power to inspire positive change. Thank you for sharing your expertise!",
  "Kudos to you for this exceptional post! Your valuable insights and inspiring words are a true testament to your expertise. Keep up the fantastic work!",
  "Thank you for sharing this remarkable post! Your insights are incredibly valuable and have the power to motivate others towards success. Truly inspiring!",
  "Your post is an absolute gem! Your valuable insights provide a wealth of knowledge and inspiration to all who read them. Thank you for sharing your expertise!",
  "This post is truly outstanding! Your insights are invaluable and serve as a guiding light for those seeking inspiration and success. Thank you for sharing your wisdom!",
  "I am thoroughly impressed by your exceptional post! Your insights are incredibly valuable and inspire others to strive for greatness. Thank you for sharing your expertise!",
  "Thank you for this extraordinary post! Your valuable insights and inspiring words have the potential to create a positive impact and drive success. Keep up the excellent work!",
  "Your post is a masterpiece! The wealth of valuable insights you have shared is truly inspiring and has the power to uplift and motivate. Thank you for your remarkable contribution!"
];

// Modify the textArray
const modifiedTextArray = textArray.map(text => {
  // Add '\n\n' after '!' or '.'
  const modifiedText = text.replace(/([!.])(\s*)/g, '$1\n\n');
  return modifiedText;
});

// Get all the divs containing the inputs
const divs = document.querySelectorAll('div.comments-comment-texteditor');

// Iterate through each div and update the input field
divs.forEach(div => {
  // Get the input field within the current div
  const inputField = div.querySelector('.ql-editor');
  
  // Randomly select a text from the array
  const randomIndex = Math.floor(Math.random() * textArray.length);
  const randomText = modifiedTextArray[randomIndex];
  
  // Set the value of the input field to the randomly selected text
  inputField.innerHTML = randomText;
});
