


const aboutPage = document.getElementById("aboutDisplay")
const contactPage = document.getElementById("contactDisplay")
const workPage = document.getElementById("workDisplay")
const pageName = document.getElementById("pageTitle")
const welcomeMessage = document.getElementById('welcomeDisplay')



function loadHome() {
    window.location="index.html"
}

function loadNav(){
    window.location="page2.html"
}


function aboutTitle() {
    if(aboutPage.classList = 'active') {
        pageName.innerHTML = "///ABOUT"
        welcomeMessage.style.display = "none";
        aboutPage.style.display = 'flex';
        workPage.style.display = 'none';
    }
}


function workTitle() {
    if(workPage.classList = 'active') {
        pageName.innerHTML = "///WORK"
        welcomeMessage.style.display = "none";
        aboutPage.style.display = "none"
        workPage.style.display ="flex";
 
    }
}





