// Define an array of customizable texts
const textArray = [
"Great insights, Hassan!\n\nRunning paid ads without a clear strategy and goals can be a waste of resources.\n\nIt's important to have a strong understanding of your target audience and provide a premium customer journey.\n\nThanks for sharing these valuable tips!\n\n",
"Context is indeed crucial, Hassan.\n\nTailoring your approach based on the specific context can make a significant difference in the effectiveness of your content creation, paid advertising, and personal development.\n\nThanks for highlighting the importance of considering context!\n\n",
"I appreciate your perspective, Hassan.\n\nWhile video ads may be popular, it's important not to neglect the power of image ads.\n\nThey can still be highly effective, and it's worth testing different formats to stand out from the crowd.\n\nYour insights are valuable!\n\n",
"The 80/20 principle is a game-changer, Hassan.\n\nIdentifying the key skills that produce the majority of results is essential for success in marketing.\n\nFocusing on those skills can lead to significant growth for DTC brands.\n\nThanks for sharing!\n\n",
"Spot on, Hassan!\n\nLanding pages are a critical component of the customer journey.\n\nConsistency between ads and landing pages is key to ensure a positive user experience and maximize conversions.\n\nGreat reminder!\n\n",
"Excellent tips for writing persuasive ad copy, Hassan.\n\nSelling the outcome, using mirroring, and incorporating emotions are all powerful techniques.\n\nKeeping it clear, concise, and action-oriented is key.\n\nThanks for sharing these valuable ad copy traits!\n\n",
"Thanks for sharing these competitor spying tools, Hassan!\n\nUnderstanding what works for your competitors can provide valuable insights and help you stay ahead.\n\nAdapting and innovating based on competitor analysis can be a game-changer for PPC ads.\n\nAppreciate the tips!\n\n",
"It's refreshing to see your focus on long-term success and skill-building, Hassan.\n\nBuilding a strong foundation of skills and knowledge is essential for sustainable growth.\n\nShort-term gains are great, but investing in personal and professional development pays off in the long run.\n\nKeep up the fantastic work!\n\n",
"Thanks for providing a concise guide to scaling a brand through Google Ads, Hassan.\n\nResearch, compelling offers, conversion tracking, data analysis, and iterative optimization are all crucial steps.\n\nThis guide will be helpful for marketers looking to scale their DTC brands effectively!\n\n",
"Haha, that's a fun way to showcase the lighter side of marketing, Hassan.\n\nIt's important to have a sense of humor and enjoy the process.\n\nThanks for the laugh!\n\n",
"You're absolutely right, Hassan.\n\nRunning ads is just one piece of the puzzle.\n\nTo achieve success, DTC brands need to focus on various aspects, such as research, offers, customer experience, and creatives.\n\nNailing down these elements sets the foundation for successful ad campaigns.\n\nGreat insights!\n\n",
"Video ads can be incredibly powerful, but it's important to consider the role of image ads as well, Hassan.\n\nDifferent formats have their strengths, and leveraging both can provide a competitive advantage.\n\nThanks for sharing these valuable tips!\n\n",
"Thanks for sharing the scaling pillars, Hassan.\n\nTargeted audience understanding, high-converting creatives, compelling offers, optimized landing pages, and customer retention are all crucial for scaling DTC brands successfully.\n\nValuable insights!\n\n",
"You make an excellent point, Hassan.\n\nMany DTC eCommerce brands struggle with scaling because they focus solely on creatives and quick hacks rather than building a solid foundation and prioritizing long-term growth.\n\nImproving numbers, providing a great customer journey, and offering premium user experience are key.\n\nThanks for highlighting these important factors!\n\n",
"Age is indeed becoming less relevant in business and entrepreneurship, Hassan.\n\nThe advantages of being young, such as unlimited energy and being up-to-date with online trends, can be leveraged for success.\n\nEmbracing these advantages and pairing them with pertinent experience can be a powerful combination.\n\nGreat reminder for young entrepreneurs!\n\n",
"Those guys are definitely making waves, Hassan!\n\nTheir rapid growth and expansion within just one year are impressive.\n\nIt would be interesting to analyze their marketing strategies, product-market fit, and customer acquisition tactics as potential reasons for their success.\n\n",
"Building customer loyalty is vital for sustainable success, Hassan.\n\nConsistent communication, listening to feedback, providing excellent service, and offering loyalty rewards are all effective ways to enhance customer retention and increase customer lifetime value.\n\nGreat tips!\n\n",
"Personalization is key in Google Ads, Hassan.\n\nTailoring your ads to different levels of brand awareness and providing a unique user experience can significantly improve campaign performance.\n\nThanks for highlighting the importance of personalization!\n\n",
"Thanks for sharing your method of finding unlimited hook ideas, Hassan.\n\nSubscribing to industry-focused newsletters and curating hooks from subject lines is a brilliant approach.\n\nIt's a great way to stay inspired and generate compelling content ideas.\n\nAppreciate the insights!\n\n",
"These questions are fantastic, Hassan.\n\nThey provide a strategic framework for creating ads that deeply resonate with the target audience.\n\nUnderstanding their desires, beliefs, and pain points allows for more effective messaging.\n\nThanks for sharing this valuable resource!\n\n"
]
// Modify the textArray
const modifiedTextArray = textArray.map(text => text.replace(/[!.]/g, '$& '));

// Function to append text to the content of the elements
function appendTextToElements() {
  // Get all the divs containing the inputs
  const divs = document.querySelectorAll('div.comments-comment-texteditor');

  // Iterate through each div and update the input field
  divs.forEach( (div, index) => {
    // Get the input field within the current div
    const inputField = div.querySelector('.ql-editor');
    const effectiveIndex = index % textArray.length;

    // Append the randomly selected text to the existing content without a new line
    inputField.innerHTML += modifiedTextArray[effectiveIndex];
  });
}

// Run the script
appendTextToElements();
