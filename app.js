
export function importHeader() {
    return `
    <img src="images/LOGO.svg" alt="zs creative" class="logo">
    <ul class="header-nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="service.html">Service</a></li>
        <li><a href="blog.html">Blog</a></li> 
        <li>Contact</li>
    </ul>
    <button class="contact-button white-black-button">Contact <img src="images/arrow.svg" alt="arrow"></button>
    `;
}

export function importFooter() {
    return `
        <div class="footer-social">
            <img src="images/logo-black-white.svg" alt="zs creative" class="footer-logo">
            <div class="footer-email">
                <input type="text" id="email" placeholder="Your email address">
                <button class='white-black-button'>LET'S TALK</button>
            </div>
            <p class="footer-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dt nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </p>
            <div class="social-medias">
                <span>
                    <img src="images/facebook icon.svg" alt="facebook">
                </span>
                <span>
                    <img src="images/ig.svg" alt="instagram">
                </span>
                <span>
                    <img src="images/linkedin icon.svg" alt="linkedin">
                </span>
                <span>
                    <img src="images/Subtract.svg" alt="youtube">
                </span>
            </div>
        </div>
        <div class="footer-navs">
            <div class="nav-container">
                <div class="nav">
                    <h3>Services</h3>
                    <ul>
                        <li>Branding & Identity</li>
                        <li>Web Development</li>
                        <li>SEO Optimisation</li>
                        <li>UX & UI Designer</li>
                        <li>Wordpress Support</li>
                    </ul>
                </div>
                <div class="nav">
                    <h3>General</h3>
                    <ul>
                        <li>Our locations</li>
                        <li>Career</li>
                        <li>Our team</li>
                        <li>Frequently asked questions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <p class="copyright">
                © Copyright 2024 ZS Creative. All rights reserved.
            </p>
        </div>`;
}

document.querySelector("header").innerHTML = importHeader();
document.querySelector("footer").innerHTML = importFooter();

export function initializeButtonStyles() {
    let whiteBlackButtons = document.querySelectorAll(".white-black-button");
    let blackWhiteButtons = document.querySelectorAll(".black-white");

    whiteBlackButtons.forEach(function(button) {
        let arrowWhite = button.querySelector("img"); 
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = 'black';
            button.style.color = 'white';
            if (arrowWhite) {
                arrowWhite.src = `images/white-arrow.svg`; 
            }
        });

        button.addEventListener("mouseleave", function() {
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
            if (arrowWhite) {
                arrowWhite.src = `images/arrow.svg`; 
            }
        });
    });

    blackWhiteButtons.forEach(function(button) {
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
            button.style.border = '1px solid black';
        });

        button.addEventListener("mouseleave", function() {
            button.style.backgroundColor = 'black';
            button.style.color = 'white';
            button.style.border = 'none'; 
        });
    });
}

initializeButtonStyles();


document.addEventListener("DOMContentLoaded", function () {
    let specializationElements = document.querySelectorAll(".left ul li");
    let elementArrows = document.querySelectorAll(".left .arrow");
    let specializationImg = document.querySelector(".specialization-img-container img");
    
    specializationElements.forEach(function (element, index) {
        element.addEventListener("mouseover", () => {
            element.style.fontSize = "30px";
            specializationImg.style.display = "block";
            
            if (elementArrows[index]) {
                elementArrows[index].style.display = 'inline-block';
            }
            
            let elementContent = element.textContent.toLowerCase().trim();
            
            switch (elementContent) {
                case "branding & identity":
                    specializationImg.src = 'service-img/branding-identity 1.svg';
                    break;
                case "website development":
                    specializationImg.src = 'service-img/web-development 1.svg';
                    break;
                case "seo optimisation":
                    specializationImg.src = 'service-img/seo 1.svg';
                    break;
                case "ux & ui design":
                    specializationImg.src = 'service-img/ux-ui 2.svg';
                    break;
                case "wordpress support":
                    specializationImg.src = 'service-img/Frame 108 1.svg';
                    break;
                default:
                    specializationImg.style.display = "none";
                    break;
            }
        });

        element.addEventListener("mouseleave", () => {
            element.style.fontSize = "20px";
            specializationImg.style.display='none'
            if (elementArrows[index]) {
                elementArrows[index].style.display = 'none';
            }
        });
    });
});
