// function to change active/displayed article & menu link
function activateArticle(event) {
  // loop through NodeList of articles, removing css that displays them
  articles.forEach(article => article.classList.remove("article-active"));
  // grab the data-tab of selected article
  activeArticle = document.querySelector(
    `.article[data-tab="${this.dataset.tab}"`
  );
  // update css to display article of corresponding data-tab
  activeArticle.classList.add("article-active");

  // loop through NodeList of menu links, removing 'active' css styles
  menuLinks.forEach(link => link.classList.remove("menu-active"));
  // grab the data-tab of selected menu link
  activeMenuLink = document.querySelector(
    `.article-link[data-tab="${this.dataset.tab}"`
  );
  // update css styles of active menu link
  activeMenuLink.classList.add("menu-active");
}

// grab all article links from menu
let menuLinks = document.querySelectorAll(".article-link");
// grab all articles
let articles = document.querySelectorAll(".article");

// loop through left side menu to add click event listeners to links, to invoke activate article function
menuLinks.forEach(link => link.addEventListener("click", activateArticle));
