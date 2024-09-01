import {importFooter, importHeader, initializeButtonStyles} from "../app.js"

let blogs = [
        {
            img: './blogs-img/5.svg',
            description: 'Ladezeit von WordPress dauerhaft und nachhaltig verbessern'
        },
        {
            img: './blogs-img/6.svg',
            description: 'Ladezeit von WordPress dauerhaft und nachhaltig verbessern'
        },
        {
            img: './blogs-img/12.svg',
            description: 'Ladezeit von WordPress dauerhaft und nachhaltig verbessern'
        },
        {
            img: './blogs-img/phone.svg',
            description: 'Ladezeit von WordPress dauerhaft und nachhaltig verbessern'
        },
        {
            img: './blogs-img/9.svg',
            description: 'Ladezeit von WordPress dauerhaft und nachhaltig verbessern'
        },
        {
            img: './blogs-img/seo.svg',
            description: 'Ladezeit von WordPress dauerhaft und nachhaltig verbessern'
        },
        {
            img: './blogs-img/4.svg',
            description: 'Ladezeit von WordPress dauerhaft und nachhaltig verbessern'
        },
        {
            img: './blogs-img/10.svg',
            description: 'Ladezeit von WordPress dauerhaft und nachhaltig verbessern'
        },
        {
            img: './blogs-img/3.svg',
            description: 'Ladezeit von WordPress dauerhaft und nachhaltig verbessern'
        },
        {
            img: './blogs-img/1.svg',
            description: 'Ladezeit von WordPress dauerhaft und nachhaltig verbessern'
        },
        {
            img: './blogs-img/11.svg',
            description: 'Ladezeit von WordPress dauerhaft und nachhaltig verbessern'
        },
        {
            img: './blogs-img/2.svg',
            description: 'Ladezeit von WordPress dauerhaft und nachhaltig verbessern'
        }   
]

const blogsContainer = document.querySelector('.blogs-container');

blogs.forEach(e=>{
    const blog = document.createElement('div');
    blog.classList.add('blog');

    blog.innerHTML =`
     <div class="blog">
                    <img src="${e.img}" alt="blog">
                    <div class="blog-content">
                        <hr class="blue-line">
                        <div class="blog-text">
                            <p class="blog-description">${e.description} </p>
                            <p class="blue-text more-link">Read more</p>
                        </div>
                    </div>
                </div>`;
                blogsContainer.appendChild(blog);
})

document.querySelector("header").innerHTML = importHeader();
document.querySelector("footer").innerHTML = importFooter();
initializeButtonStyles();
