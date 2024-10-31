// Get article data from localStorage
const article = JSON.parse(localStorage.getItem("articleDetails"));

// Display article details if data is available
if (article) {
    document.getElementById("articleTitle").innerText = article.title;
    document.getElementById("articleAuthor").innerText = `Author: ${article.author}`;
    document.getElementById("articleDate").innerText = `Published on: ${new Date(article.date).toLocaleDateString()}`;
    document.getElementById("articleDescription").innerText = article.description;
    document.getElementById("articleImage").src = article.imgUrl;
    document.getElementById("footer-bottom").innerHTML = ` <p>Copyright &copy;2024 Designed by <span>Vinura</span></p>`;

} else {
    document.body.innerHTML = "<p>Article details not found. <a href='index.html'>Return to articles</a></p>";
}
