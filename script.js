// script.js - Instituto Delta Premium

document.addEventListener("DOMContentLoaded",()=>{

const dropdown=document.querySelector(".dropdown");

if(dropdown){
dropdown.addEventListener("click",()=>{
const menu=dropdown.querySelector(".submenu");
menu.style.display =
menu.style.display==="block" ? "none" : "block";
});
}

});
