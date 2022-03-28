const sidePanel = document.getElementById("side-panel");
const navbar = document.getElementById("mobile-nav");
const hamburger = document.getElementById("hamburger");

function openNav(){
    navbar.style.left = 0;
}

function closeNav(){
    navbar.style.left = "100vw";
}

function openSidePanel(){
    sidePanel.style.left = 0;
}

function closeSidePanel(){
    sidePanel.style.left = "100vw";
}