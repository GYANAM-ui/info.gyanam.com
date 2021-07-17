link1_URL = "https://gyanam-ui.github.io/AI-Object-Finder/";
link2_URL = "https://gyanam-ui.github.io/AI-Video-Surveillance/";
link3_URL = "https://gyanam-ui.github.io/AI-BABY-MONITORING/";
link4_URL = "https://gyanam-ui.github.io/AI-MUSIC/";
link5_URL = "https://gyanam-ui.github.io/emotion-to-emoji/";

// Projects function links 
function link1() {
    window.open(link1_URL);
    console.log("Opening " + link1_URL);
}

function link2() {
    window.open(link2_URL);
    console.log("Opening " + link2_URL);
}

function link3() {
    window.open(link3_URL);
    console.log("Opening " + link3_URL);
}

function link4() {
    window.open(link4_URL);
    console.log("Opening " + link4_URL);
}

function link5() {
    window.open(link5_URL);
    console.log("Opening " + link5_URL);
}

// Social Links 
function facebook() {
    window.open("https://facebook.com/ray.divoire");
}

function instagram() {
    window.open("https://www.instagram.com/rayhiphop_");
}

function youtube() {
    window.open("https://www.youtube.com/channel/UCgM63NRv7LBnGDgUWO2fjaQ");
}

function pinterest() {
    window.open("https://pinterest.com/ggyanam869/");
}

function snapchat() {
    window.open("https://www.snapchat.com/add/ray_dcruz");
}

function email() {
    window.open("mailto:nestcoderlive@gmail.com");
}

function telegram() {
    window.open("https://t.me/raydcruz");
}

function github() {
    window.open("https://github.com/GYANAM-ui");
}

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

function img() {
    window.open("imgs/me_gyan.PNG");
}

// Scroll function 

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Tabs and Navigations 

function about_page() {
    window.open("views/about.html");
}