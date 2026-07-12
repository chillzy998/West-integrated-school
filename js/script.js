// ==========================================
// PREFERENCES PANEL
// ==========================================

const preferencesBtn = document.getElementById("preferences-btn");

const preferencesPanel = document.getElementById("preferences-panel");

const closePreferences = document.getElementById("close-preferences");

preferencesBtn.addEventListener("click", () => {

    preferencesPanel.classList.add("active");

});

closePreferences.addEventListener("click", () => {

    preferencesPanel.classList.remove("active");

});

// Close when clicking outside

document.addEventListener("click", (event) => {

    if (

        !preferencesPanel.contains(event.target) &&

        !preferencesBtn.contains(event.target)

    ) {

        preferencesPanel.classList.remove("active");

    }

});
// ==========================================
// DARK MODE
// ==========================================

const themeButton = document.getElementById("theme-toggle");
const themeSwitch = document.getElementById("theme-toggle-switch");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    if (themeSwitch) {
        themeSwitch.checked = true;
    }

}

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    if (themeSwitch) {
        themeSwitch.checked = isDark;
    }

    // Save preference
    localStorage.setItem("theme", isDark ? "dark" : "light");

}

themeButton.addEventListener("click", toggleTheme);

if (themeSwitch) {

    themeSwitch.addEventListener("change", toggleTheme);

}
// ==========================================
// BACK TO TOP
// ==========================================

const backToTop = document.getElementById("back-to-top");

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// ==========================================
// ACCENT COLOR
// ==========================================

const accentSelect = document.getElementById("accent-color");

// Load saved color
const savedAccent = localStorage.getItem("accent") || "plum";

document.body.setAttribute("data-accent", savedAccent);
accentSelect.value = savedAccent;

accentSelect.addEventListener("change", () => {

    const color = accentSelect.value;

    document.body.setAttribute("data-accent", color);

    localStorage.setItem("accent", color);

});
// ==========================================
// FONT SIZE
// ==========================================

const fontSizeSlider = document.getElementById("font-size");

// Load saved font size
const savedFontSize = localStorage.getItem("fontSize") || "16";

document.body.style.fontSize = savedFontSize + "px";

fontSizeSlider.value = savedFontSize;


// Change font size
fontSizeSlider.addEventListener("input", () => {

    const size = fontSizeSlider.value;

    document.body.style.fontSize = size + "px";

    localStorage.setItem("fontSize", size);

});
// ==========================================
// SCROLL SPEED
// ==========================================

const scrollSpeedSlider = document.getElementById("scroll-speed");

// Load saved scroll speed
const savedScrollSpeed = localStorage.getItem("scrollSpeed") || "3";

scrollSpeedSlider.value = savedScrollSpeed;


// Change scroll speed
scrollSpeedSlider.addEventListener("input", () => {

    const speed = scrollSpeedSlider.value;

    localStorage.setItem("scrollSpeed", speed);

});
// ==========================================
// ANIMATED BACKGROUND PARTICLES
// ==========================================

const page = document.body;

if(page){
  
    const shapes = ["✦", "●", "✧", "•"];

    for(let i = 0; i < 30; i++){

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        particle.style.animationDelay = Math.random() * 5 + "s";

        particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";

        page.appendChild(particle);

    }

}
// ==========================================
// HERO IMAGE SLIDESHOW
// ==========================================

const slides = document.querySelectorAll(".slide");

const images = [

    "images/campus1.jpg",

    "images/students.jpg",

    "images/school.jpg"

];


let currentSlide = 0;


// Load images

slides.forEach((slide, index)=>{

    slide.style.backgroundImage = `url(${images[index]})`;

});


// Change slides

setInterval(()=>{

    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");

}, 6000);

const announcementTitle =
document.getElementById("announcement-title");

const announcementText =
document.getElementById("announcement-text");

if(announcementTitle && announcementText){

    announcementTitle.textContent =
        localStorage.getItem("announcementTitle")
        || "Latest Announcement";

    announcementText.textContent =
        localStorage.getItem("announcementMessage")
        || "No announcements yet.";

}