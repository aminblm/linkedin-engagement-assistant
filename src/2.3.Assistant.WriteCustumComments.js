// Define an array of customizable texts
const textArray = [
"Thank you for sharing your insights on creating a legacy as a CEO. It's interesting to hear how different CEOs envision their legacies and the dimensions they consider important, such as financial results, organizational culture, employee engagement, and societal impact. Have you personally implemented any strategies to cultivate these dimensions of legacy in your organization?",
"Thank you for highlighting the importance of self-understanding in leadership. Leading with character is indeed crucial, as it allows leaders to be authentic, guided by purpose, and fosters trust and inclusivity. How have you incorporated these principles of being a leader into your own leadership journey? Have you seen a positive impact on your team and organization?",
"Thank you for emphasizing the significance of active listening in leadership, as mentioned by Adam Grant and Tim Cook's example. It's inspiring to see how active listening can empower effective decision-making and independent thinking within teams. How have you personally practiced active listening in your leadership role? Can you share any specific experiences where active listening has made a difference?",
"Thank you for sharing the importance of emotional intelligence for CEOs and suggesting ways to improve it. The concept of being the Chief Emotional Officer is intriguing and highlights the role of emotions in effective leadership. Have you implemented any specific strategies or exercises to enhance your own emotional intelligence? How have you seen it positively impact your relationships and decision-making?",
"Congratulations on the impressive reach and engagement of your posts! It's evident that your content has resonated with a significant audience. I'm curious to know how your posts have helped your audience specifically. Can you share any examples of how your posts have influenced someone's life or provided valuable insights?",
"Imposter syndrome is a common challenge faced by many high-achieving leaders, and it's reassuring to hear your perspective that it shouldn't hinder one's potential for becoming a top-notch leader. Your advice to practice self-awareness and self-examination is valuable. Have you personally dealt with imposter syndrome? If so, what strategies or mindset shifts have helped you overcome it?",
"Thank you for shedding light on the topic of working with narcissistic leaders and advocating for humility in leadership. The qualities you mentioned, such as being authentic, mindful of others, and promoting open communication, align with creating a positive and inclusive work environment. Have you encountered narcissistic leaders in your career? How have you navigated working with them while maintaining humility in your own leadership approach?",
"It's heartwarming to see the impact your child has had on your personal growth and learning as a mother. Happy Mother's Day! In what ways has motherhood influenced your leadership journey? How have you applied the lessons learned from motherhood to your professional life?",
"Mental Health Awareness Month is indeed a critical time to reflect on our well-being. The Well-being wheel you mentioned seems like a useful tool for self-reflection. Which areas of well-being do you personally prioritize, and how do you maintain a balanced well-being wheel in your own life?",
"Coaching for a Cause is a wonderful initiative that combines personal development with charitable donations. It's commendable that you're offering coaching sessions in exchange for donations to reputable charities. What inspired you to start this initiative, and what kind of impact have you seen it make over the years?",
"Thank you for highlighting the impact of our past experiences and habits on our professional and personal lives. The steps you shared for combating self-sabotaging behavior are valuable in mitigating potential career risks. Have you encountered clients who have successfully implemented these steps and experienced positive career transformations."
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
divs.forEach((div, index) => {
  // Check if the index is within the range of the modifiedTextArray
  if (index >= modifiedTextArray.length) {
    return; // Stop the script if the index is greater than or equal to the array length
  }
  // Get the input field within the current div
  const inputField = div.querySelector('.ql-editor');
  // Set the value of the input field to the corresponding text from the array
  inputField.innerHTML = modifiedTextArray[index];
});