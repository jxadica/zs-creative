import { importFooter, importHeader,initializeButtonStyles } from "../app.js";
document.querySelector("header").innerHTML = importHeader();
document.querySelector("footer").innerHTML = importFooter();
initializeButtonStyles();let portfolioComponents = document.querySelectorAll(".component");

portfolioComponents.forEach(function (component, index) {
    let img = component.querySelector("img");
    let overlay = component.querySelector(".portfolio-img-overlay");

    component.addEventListener("mouseover", function () {
        img.style.filter = 'brightness(50%)'; 
        overlay.style.display = 'flex'; 
    });

    component.addEventListener("mouseleave", function () {
        img.style.filter = 'brightness(100%)'; 
        overlay.style.display = 'none'; 
    });
});
