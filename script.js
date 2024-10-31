
const apiLink = 'https://apiserverarticles-hsyry33i.b4a.run/'
const searchInputMobile = document.getElementById("searchInputMobile");
const searchInput = document.getElementById("searchInput");
let DATA_ARRAY = []; //articles

// // Listen for input on both desktop and mobile search inputs
// [searchInput, searchInputMobile].forEach(input => {
//     input.addEventListener("input", () => {
//         const query = input.value.toLowerCase();
//         filterArticles(query);
//     });
// });

// Function to filter articles based on search query
// function filterArticles(query) {
//     fetchData("all").then(data => {
//         const filteredData = data.filter(article =>
//             article.title.toLowerCase().includes(query)
//         );
//         renderMain(filteredData);
//     });
// }

async function fetchData(query){
    //const response = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const response = await fetch(`${apiLink}${query}`,{ mode: 'no-cors' });
    console.log(`${apiLink}${query}`)
    const data = await response.json();
    console.log(data)
    return data;
}


//fetchData("all").then(data => renderMain(data.articles));
fetchData("all").then(data => renderMain(data));

//menu btn
let mobilemenu = document.querySelector(".mobile");
let menuBtn = document.querySelector(".menuBtn");
let menuBtnDisplay = true;




//render articles
function renderMain(data){  
    let mainHTML = '';
    let footerHTML = '';
        for (let i = 0; i < data.length; i++) {
            const article = data[i];
            if (article.imgUrl) {
                mainHTML += `
                    <div class="card">
                        <img src="${article.imgUrl}" width="10%"/>
                        <h4>${article.title}</h4>
                        <div class="publishbyDate">
                            <p>${article.author}</p>
                            <span>|</span>
                            <p>${new Date(article.date).toLocaleDateString()}</p>
                        </div>
                        <div class="description">
                            ${article.description}
                        </div>
                        <button class="readMoreBtn" data-id="${i}">Read More</button>
                    </div>
                    
                `;
            }
        }

        footerHTML = `<footer class="footer-container">
        <p>Copyright &copy;2024 Designed by <span>Vinura</span></p>
    </footer>`
    
    document.querySelector("main").innerHTML = mainHTML;
    document.querySelector("footer").innerHTML = footerHTML;


    // Add event listeners to each "Read More" button
    document.querySelectorAll(".readMoreBtn").forEach((button, index) => {
        button.addEventListener("click", () => {
            // Pass article data to another page
            const article = data[index];
            localStorage.setItem("articleDetails", JSON.stringify(article));

            // Navigate to the article detail page in the 'details' folder
            window.location.href = "./details/articleDetails.html";
        });
    });

    // Add event listeners to each card
    document.querySelectorAll(".card").forEach((button, index) => {
        button.addEventListener("click", () => {
            // Pass article data to another page
            const article = data[index];
            localStorage.setItem("articleDetails", JSON.stringify(article));

            // Navigate to the article detail page in the 'details' folder
            window.location.href = "./details/articleDetails.html";
        });
    });

}
// const searchBtn = document.getElementById("searchForm");
// const searchBtnMobile = document.getElementById("searchFormMobile");


// searchBtn.addEventListener('submit',async (e)=>{e.preventDefault()
//     const data = await fetchData(searchInput.value)
//     renderMain(data.articles)
// });

// searchBtnMobile.addEventListener('submit',async (e)=>{e.preventDefault()
//     const data = await fetchData(searchInputMobile.value)
//     renderMain(data.articles)
// });

// async function Search(query){
//     const data = await fetchData(query)
//     renderMain(data.articles)
// }