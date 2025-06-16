//? dark mode
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if (darkmode === "active") enableDarkMode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})












//? open and close popup settings
let buttonImpostazione = document.getElementById("button-impostazione");
let impostazioni = document.getElementById("impostazioni");
let body = document.getElementById("body");
let html = document.getElementById("html");

buttonImpostazione.addEventListener("click", () => {
    impostazioni.classList.add("visibile");
    impostazioni.classList.remove("novisibile");
    html.classList.add("no-scroll");
    body.classList.add("no-scroll");
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    document.body.style.overscrollBehavior = 'none';
});

let close_impostazioni = document.getElementById("close_impostazioni");

close_impostazioni.addEventListener("click", () => {
    impostazioni.classList.add("novisibile");
    impostazioni.classList.remove("visibile");
    html.classList.remove("no-scroll");
    body.classList.remove("no-scroll");
});





