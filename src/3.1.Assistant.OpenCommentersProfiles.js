// Get all the links with the common class
const links = document.querySelectorAll('.ember-view.inline-flex.overflow-hidden');
console.log(links)
// Open each link in a new tab
links.forEach(link => {
  const url = link.getAttribute('href');
  window.open(url, '_blank');
});
