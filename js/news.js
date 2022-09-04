const loadCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displaCategory(data.data.news_category)
}

const displaCategory = categories => {
    const categoryUl = document.getElementById('category-ul');
    categories.forEach(category => {
        const li = document.createElement('li');
        // li.classList.add('');
        li.innerHTML = `
        <a href="#" id="click-category">${category.category_name}</a>
        `
        categoryUl.appendChild(li)
        // console.log(category.category_id)
    })

}

// display 
const newsLoade = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data)
}

const displayNews = newses => {
    // console.log(newses);
    const newsContainer = document.getElementById('news-container');
    newses.forEach(news => {
        console.log(news.category_id)
        // console.log(news);
        const newsDiv = document.createElement("div");
        newsDiv.classList.add('card');
        newsDiv.innerHTML = `
        <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text">${news.details.length > 6000 ? news.details.slice(0, 6000) + '...' : news.details}</p>
                            <div class="card-text">
                            
                            <img src="${news.author.img}" class="rounded rounded-circle" alt="..." style="width:50px; height:50px;"> 
                            
                            <span>
                            <i>${news.author.name}</i>
                            <small class="text-muted">${news.author.published_date}</small>
                            <small class="m-4">view: ${news.total_view}</small>
                            </span>
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


