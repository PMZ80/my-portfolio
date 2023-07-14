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