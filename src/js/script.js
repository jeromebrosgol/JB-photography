
let btn__menu = document.querySelector("#hamburger");
btn__menu.addEventListener("click",(e)=>{
let tab = document.querySelector("#nav__tab");
if (tab.classList.contains("hidden")) {
  tab.classList.remove("hidden");
} else {
  tab.classList.add("hidden");}
console.log(tab);
})

