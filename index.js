async function like(tabId) {
    try {
        const [result] = await chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: () => {
                    // Get all the elements with the specified class
                    const elements = document.getElementsByClassName("flex-wrap justify-center artdeco-button__text align-items-center");
                    console.log(elements);
                    // Iterate through each element and simulate a click event
                    for (let i = 0; i < elements.length; i++) {
                    elements[i].click();
                }
            },
        });
        return result;
    } catch (error) {
        console.error("Error getting Like Buttons:", error);
        return null;
    }
}

async function writeComments(tabId) {
    try {
        const [result] = await chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: () => {
                // Define an array of customizable texts
                const textArray =  [
                    "Fantastic!",
                    "Awesome!",
                    "Excellent!",
                    "Superb!",
                    "Terrific!",
                    "Outstanding!",
                    "Marvelous!",
                    "Impressive!",
                    "Wonderful!",
                    "Splendid!",
                    "Fabulous!",
                    "Brilliant!",
                    "Amazing!",
                    "Stellar!",
                    "Magnificent!",
                    "Incredible!",
                    "Phenomenal!",
                    "Super!",
                    "First-rate!",
                    "Nice post",
                    "Post, nice",
                    "Post that is nice",
                    "A post worth appreciating",
                    "Great post",
                    "Post of excellence",
                    "A nicely written post",
                    "Impressive post",
                    "Well done with the post",
                    "Post, nicely done",
                    "Post with a touch of brilliance",
                    "Fantastic post",
                    "Post that deserves applause",
                    "Kudos for the post",
                    "Post that shines",
                    "An amazing post",
                    "Remarkable post",
                    "Post with a wow factor",
                    "Outstanding post",
                    "Nice, thanks for sharing.",
                    "A delightful share!",
                    "Thanks for the nice share.",
                    "A nice share to remember."]
                // Modify the textArray
                const modifiedTextArray = textArray.map(text => {
                    // Add '\n\n' after '!' or '.'
                    const modifiedText = text.replace(/([!.])(\s*)/g, '$1\n\n');

                    // Modify the text with a 50% chance
                    const shouldModify = Math.random() < 0.5;
                    const modifiedRandomText = shouldModify ? modifiedText : text;

                    return modifiedRandomText;
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
            },
        });
        return result;
    } catch (error) {
        console.error("Error getting Like Buttons:", error);
        return null;
    }      
}

async function publishComments(tabId) {
    try {
        const [result] = await chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: () => { 

                // Get all the buttons
                const buttons = document.querySelectorAll('button.comments-comment-box__submit-button');
            
                // Function to simulate a button click
                const clickButton = (button) => {
                    button.click();
                };
            
                // Iterate through each button and click it with a delay
                buttons.forEach((button, index) => {
                    setTimeout(() => {
                    clickButton(button);
                    }, index * 5000); // Delay each click by 5 seconds (5000 milliseconds)
                });
            },
        });
        return result;
    } catch (error) {
        console.error("Error getting Like Buttons:", error);
        return null;
    }
}

async function loadMoreComments(tabId) {
    try {
        const [result] = await chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: () => {
    
                // Get all the "Load more comments" buttons
                const loadMoreButtons = document.querySelectorAll('button.comments-comments-list__load-more-comments-button');
            
                // Click each "Load more comments" button
                loadMoreButtons.forEach(button => button.click());
            }
        });
        return result;
    } catch (error) {
        console.error("Error getting Like Buttons:", error);
        return null;
    }
}

async function getCurrentTabId() {
    try {
        const queryOptions = { active: true, currentWindow: true };
        const [tab] = await chrome.tabs.query(queryOptions);
        if (tab) {
            return tab.id;
        } else {
            console.error("No active tab found.");
            return null;
        }
    } catch (error) {
        console.error("Error getting current tab:", error);
        return null;
    }
}

var likeButton = document.getElementById("likebtn");
var writeCommentsButton = document.getElementById("write-commentsbtn");
var publishCommentsButton = document.getElementById("publish-commentbtn");
var loadMoreCommentsButton = document.getElementById("loadmore-commentsbtn");

likeButton.addEventListener("click", async function () {
    const tabId = await getCurrentTabId();
    if (tabId) {
        console.log("like()");
        like(tabId);
        likeButton.innerHTML = "Liked! 😎"
    } else {
        likeButton.innerHTML = "Something went wrong!"
        likeButton.style = "background-color:red;"
        console.error("Error getting tabId.");
    }
}, false);

writeCommentsButton.addEventListener("click", async function () {
    const tabId = await getCurrentTabId();
    if (tabId) {
        console.log("writeComments()");
        writeComments(tabId);
        writeCommentsButton.innerHTML = "Comments Written! 😎"
    } else {
        writeCommentsButton.innerHTML = "Something went wrong!"
        writeCommentsButton.style = "background-color:red;"
        console.error("Error getting tabId.");
    }
}, false);

publishCommentsButton.addEventListener("click", async function () {
    const tabId = await getCurrentTabId();
    if (tabId) {
        console.log("publishComments()");
        publishComments(tabId);
        publishCommentsButton.innerHTML = "Comments Publishing! 😎"
    } else {
        publishCommentsButton.innerHTML = "Something went wrong!"
        publishCommentsButton.style = "background-color:red;"
        console.error("Error getting tabId.");
    }
}, false);

loadMoreCommentsButton.addEventListener("click", async function () {
    const tabId = await getCurrentTabId();
    if (tabId) {
        console.log("loadMoreComments()");
        loadMoreComments(tabId);
        likeButton.innerHTML = "Comments loaded! 😎"
    } else {
        loadMoreCommentsButton.innerHTML = "Something went wrong!"
        loadMoreCommentsButton.style = "background-color:red;"
        console.error("Error getting tabId.");
    }
}, false);
