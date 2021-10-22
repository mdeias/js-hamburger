// definisco le variabili: menu nascosto, icone di apertura e chiusura
// creo le funzioni 

const menunascosto = document.querySelector("div.hamburger-menu");
const attivamenu = document.querySelector("div.header-right > a");
const disattivamenu = document.querySelector("div.hamburger-menu > a");

// attivo il menù aggingendo la classe active tramite .add

attivamenu.addEventListener("click", function(){
    console.log("click rilevato");
    menunascosto.classList.add("active");
})

// disattivo il menù rimuovendo la classe active tramite .remove

disattivamenu.addEventListener("click", function(){
    console.log("click rilevato");
    menunascosto.classList.remove("active");
})