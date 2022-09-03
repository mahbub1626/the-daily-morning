const loadCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displaCategory(data.data.news_category)
}

// const displayphones = phones => {
//     phones.forEach(phone => {
//         const phoneDiv = document.createElement('div');
//         phoneDiv.classList.add('col');
//         phoneDiv.innerHTML = 


const displaCategory = categories => {
    const categoryUl = document.getElementById('category-ul');
    // console.log(categories);
    categories.forEach(category => {
        // console.log(category.category_name);
        const li = document.createElement('li');
        // li.classList.add('categoriesD');
        li.innerText = category.category_name;
        categoryUl.appendChild(li)
    })
}


loadCategory()