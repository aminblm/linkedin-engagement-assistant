export async function loadMoreComments() {
    
    // Get all the "Load more comments" buttons
    const loadMoreButtons = document.querySelectorAll('button.comments-comments-list__load-more-comments-button');

    // Click each "Load more comments" button
    loadMoreButtons.forEach(button => button.click());
}
