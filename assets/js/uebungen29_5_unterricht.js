const myButton = document.getElementById("my-button");

myButton.addEventListener("mouseover", e => {
    e.target.style.top = Math.floor(Math.random() * 200) + "top"
})
/* 
myButton.addEventListener("mouseleave", e => {
    e.target.style.top = "-100px";
}) */