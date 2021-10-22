// definisco le variabili
// creo le funzioni 

const menu = document.querySelector("div.hamburger-menu");
const attivamenu = document.querySelector("div.header-right > a");
const disattivamenu = document.querySelector("div.hamburger-menu > a");


attivamenu.addEventListener("click", function(){
    console.log("click rilevato");
})