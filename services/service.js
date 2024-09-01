import {importFooter, importHeader,initializeButtonStyles} from "../app.js"
document.querySelector("header").innerHTML = importHeader();
document.querySelector("footer").innerHTML = importFooter();
initializeButtonStyles();