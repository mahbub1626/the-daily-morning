const loadCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.data.news_category)
    displaCategory(data.data.news_category)
}

const displaCategory = categories => {
    // console.log(categories);
    const categoryUl = document.getElementById('category-ul');
    categories.forEach(category => {
        console.log(category);
        const li = document.createElement('li');
        // li.classList.add('');
        li.innerHTML = `
        <a href="#" id="click-category" onclick="newsLoade('${category.category_id}')">${category.category_name}</a>
        `
        categoryUl.appendChild(li)
        // console.log(category.category_id)
    })

}

// display 
const newsLoade = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data)
}

const displayNews = newses => {
    // console.log(newses);
    const newsContainer = document.getElementById('news-container');
    newsContainer.textContent = '';
    newses.forEach(news => {
        const newsDiv = document.createElement("div");
        newsDiv.classList.add('card');
        newsDiv.innerHTML = `
        <div class="row g-0 p-2">
                    <div class="col-md-3">
                        <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text">${news.details.length > 600 ? news.details.slice(0, 600) + '...' : news.details}</p>
                            
                            <div class="card-text">
                            <img src="${news.author.img}" class="rounded rounded-circle" alt="..." style="width:50px; height:50px;"> 
                            
                            <span>
                            <i>${news.author.name}</i>
                            <small class="text-muted">${news.author.published_date}</small>
                            <small class="m-4">views: ${news.total_view}</small>
                            </span>
                            <button class="btn btn-primary mr-4" >Details</button>
                            </div>
                        </div>
                    </div>
                </div>
        `;
        newsContainer.appendChild(newsDiv);
    })
}
newsLoade()
loadCategory()


