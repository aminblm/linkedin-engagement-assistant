async function like(tabId) {
    const script = () => {
            const elements = document.getElementsByClassName("flex-wrap justify-center artdeco-button__text align-items-center");
            for (let i = 0; i < elements.length; i++) { elements[i].click(); }
    }
    return await executeScriptInTab(tabId, script);
}

async function writeComments(tabId) {
    const script = () => {
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
            "A nice share to remember."
        ]
        const modifiedTextArray = textArray.map(text => {
            // Add '\n\n' after '!' or '.'
            const modifiedText = text.replace(/([!.])(\s*)/g, '$1\n\n');

            // Modify the text with a 50% chance
            const shouldModify = Math.random() < 0.5;
            const modifiedRandomText = shouldModify ? modifiedText : text;

            return modifiedRandomText;
        });
        const divs = document.querySelectorAll('div.comments-comment-texteditor');
        divs.forEach(div => {
            const inputField = div.querySelector('.ql-editor');
            const randomIndex = Math.floor(Math.random() * textArray.length);
            const randomText = modifiedTextArray[randomIndex];
            inputField.innerHTML = randomText;
        });
    }
    return await executeScriptInTab(tabId, script);
}

async function publishComments(tabId) {
    const script = () =>  { 
        const buttons = document.querySelectorAll('button.comments-comment-box__submit-button');
        const clickButton = (button) => {
            button.click();
        };
        buttons.forEach((button, index) => {
            setTimeout(() => {
            clickButton(button);
            }, index * 5000); // Delay each click by 5 seconds (5000 milliseconds)
        });
    }
    return await executeScriptInTab(tabId, script);
}

async function loadMoreComments(tabId) {
    const script = () =>  {
        const loadMoreButtons = document.querySelectorAll('button.comments-comments-list__load-more-comments-button');
        loadMoreButtons.forEach(button => button.click());
    }
    return await executeScriptInTab(tabId, script);
}

async function clickReply(tabId) {
    const script = () =>  {
        const replyButtons = document.querySelectorAll('button.comments-comment-social-bar__reply-action-button');
        replyButtons.forEach(button => button.click());
    }
    return await executeScriptInTab(tabId, script);
}

async function clickComments(tabId) {
    const script = () =>  {
        const commentButtons = document.querySelectorAll('button.comment-button');
        commentButtons.forEach(button => button.click());
    }
    return await executeScriptInTab(tabId, script);
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

async function executeScriptInTab(tabId, script) {
    try {
        const [result] = await chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: script,
        });
        return result;
    } catch (error) {
        console.error("Error executing script:", error);
        return null;
    }
}

async function handleButtonClick(actionFunction, button, successMessage, errorMessage) {
    const tabId = await getCurrentTabId();
    if (tabId) {
        console.log(`${actionFunction.name}()`);
        await actionFunction(tabId);
        button.innerHTML = successMessage;
    } else {
        button.innerHTML = errorMessage;
        button.style = "background-color:red;";
        console.error("Error getting tabId.");
    }
}

var likeButton = document.getElementById("likebtn");
var writeCommentsButton = document.getElementById("write-commentsbtn");
var publishCommentsButton = document.getElementById("publish-commentbtn");
var loadMoreCommentsButton = document.getElementById("loadmore-commentsbtn");
var clickReplyButton = document.getElementById("click-replybtn");
var clickCommentsButton = document.getElementById("click-commentsbtn");

likeButton.addEventListener("click", async function () {
    await handleButtonClick(like, likeButton, "Liked! 😎", "Something went wrong!");
}, false);

writeCommentsButton.addEventListener("click", async function () {
    await handleButtonClick(writeComments, writeCommentsButton, "Comments Written! 😎", "Something went wrong!");
}, false);

publishCommentsButton.addEventListener("click", async function () {
    await handleButtonClick(publishComments, publishCommentsButton, "Comments Publishing! 😎", "Something went wrong!");
}, false);

loadMoreCommentsButton.addEventListener("click", async function () {
    await handleButtonClick(loadMoreComments, loadMoreCommentsButton, "Comments loaded! 😎", "Something went wrong!");
}, false);

clickReplyButton.addEventListener("click", async function () {
    await handleButtonClick(clickReply, clickReplyButton, "Replies clicked! 😎", "Something went wrong!");
}, false);

clickCommentsButton.addEventListener("click", async function () {
    await handleButtonClick(clickComments, clickCommentsButton, "Comments clicked! 😎", "Something went wrong!");
}, false);
