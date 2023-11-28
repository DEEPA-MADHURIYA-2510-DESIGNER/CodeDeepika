const hideshownav = document.getElementById("hide-show-nav");

// naviation bar function
const handleshow = () =>{
    hideshownav.style.transform = "translateX(0px)";
    hideshownav.style.display = "flex";
}

const handlehide = () =>{
    hideshownav.style.transform = "translateX(415px)";
    hideshownav.style.display = "none";
}



// faq function
let faq1 = document.getElementById("faq1"); //no
let faq2 = document.getElementById("faq2");
let faq3 = document.getElementById("faq3"); //no
let faq4 = document.getElementById("faq4");
let faq5 = document.getElementById("faq5"); //no
let faq6 = document.getElementById("faq6");
let faq7 = document.getElementById("faq7"); //no
let faq8 = document.getElementById("faq8");
let faq9 = document.getElementById("faq9"); //no
let faq10 = document.getElementById("faq10");


const handlefaq1 = () => {
    faq1.style.display = "none";
    faq2.style.display = "flex";
    faq4.style.display = "none";
    faq6.style.display = "none";
    faq8.style.display = "none";
    faq10.style.display = "none";
    faq3.style.display = "flex";
    faq5.style.display = "flex";
    faq7.style.display = "flex";
    faq9.style.display = "flex";
}

const handlefaq2 = () => {
    faq1.style.display = "flex";
    faq2.style.display = "none";
}

const handlefaq3 = () => {
    faq2.style.display = "none";
    faq3.style.display = "none";
    faq4.style.display = "flex";
    faq6.style.display = "none";
    faq8.style.display = "none";
    faq10.style.display = "none";
    faq5.style.display = "flex";
    faq7.style.display = "flex";
    faq9.style.display = "flex";
    faq1.style.display = "flex";
}

const handlefaq4 = () => {
    faq3.style.display = "flex";
    faq4.style.display = "none";
}

const handlefaq5 = () => {
    faq1.style.display = "flex";
    faq3.style.display = "flex";
    faq2.style.display = "none";
    faq4.style.display = "none";
    faq5.style.display = "none";
    faq6.style.display = "flex";
    faq8.style.display = "none";
    faq10.style.display = "none";
    faq7.style.display = "flex";
    faq9.style.display = "flex";
}

const handlefaq6 = () => {
    faq5.style.display = "flex";
    faq6.style.display = "none";
}

const handlefaq7 = () => {
    faq1.style.display = "flex";
    faq3.style.display = "flex";
    faq5.style.display = "flex";
    faq2.style.display = "none";
    faq4.style.display = "none";
    faq6.style.display = "none";
    faq7.style.display = "none";
    faq8.style.display = "flex";
    faq10.style.display = "none";
    faq9.style.display = "flex";
}

const handlefaq8 = () => {
    faq7.style.display = "flex";
    faq8.style.display = "none";
}

const handlefaq9 = () => {
    faq1.style.display = "flex";
    faq3.style.display = "flex";
    faq5.style.display = "flex";
    faq7.style.display = "flex";
    faq2.style.display = "none";
    faq4.style.display = "none";
    faq6.style.display = "none";
    faq8.style.display = "none";
    faq9.style.display = "none";
    faq10.style.display = "flex";
}

const handlefaq10 = () => {
    faq9.style.display = "flex";
    faq10.style.display = "none";
}