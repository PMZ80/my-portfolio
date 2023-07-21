let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}







// typwrit
var i = 0;
var txt = ' Parham Zandnia';
var speed = 90;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("txt-2").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}