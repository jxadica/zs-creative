import { importFooter, importHeader,initializeButtonStyles } from "../app.js";
document.querySelector("header").innerHTML = importHeader();
document.querySelector("footer").innerHTML = importFooter();
initializeButtonStyles();
let portfolioImg = document.querySelectorAll(".component img");
let portfolioOverlay = document.querySelectorAll(".portfolio-img-overlay");

portfolioImg.forEach(function (img, index) {
    img.addEventListener("mouseover", function () {
        img.style.filter = 'brightness(50%)'; 
        portfolioOverlay[index].style.display = 'flex'; 
    });

    img.addEventListener("mouseleave", function () {
        img.style.filter = 'brightness(100%)'; 
        portfolioOverlay[index].style.display = 'none'; 
    });
});
