
const apiLink = 'https://apiserverarticles-hsyry33i.b4a.run/'
const searchInputMobile = document.getElementById("searchInputMobile");
const searchInput = document.getElementById("searchInput");




async function fetchData(query){
    const loadingElement = document.getElementById("loading");

      
    

    try {
        // Show loading icon
         loadingElement.style.display = "block";
        
        const response = await fetch(`${apiLink}${query}`);
        // console.log(`${apiLink}${query}`);
        // console.log(`${response.status}`);


        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Hide loading icon and display content
        loadingElement.style.display = "none";
     
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return []; // Return an empty array on error to avoid breaking the app
    }
}


//fetchData("all").then(data => renderMain(data.articles));
fetchData("all").then(data => renderMain(data));

// //menu btn
// let mobilemenu = document.querySelector(".mobile");
// let menuBtn = document.querySelector(".menuBtn");
// let menuBtnDisplay = true;




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