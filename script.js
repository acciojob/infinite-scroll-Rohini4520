//your code here!
// Function to add new list items to the list
function addListItems(count) {
  const list = document.getElementById('infi-list');
  const currentItems = list.getElementsByTagName('li').length;

  // Add the specified number of new items
  for (let i = 1; i <= count; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${currentItems + i}`;
    list.appendChild(listItem);
  }
}

// Function to check if the user has scrolled to the end of the list
function handleScroll() {
  const list = document.getElementById('infi-list');

  // Check if the user has scrolled to the bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // Add 2 more items to the list
    addListItems(2);
  }
}

// Add 10 items to the list by default on page load
window.onload = function () {
  addListItems(10);

  // Attach the scroll event listener to the list
  const list = document.getElementById('infi-list');
  list.addEventListener('scroll', handleScroll);
};
