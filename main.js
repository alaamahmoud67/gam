window.addEventListener("scroll", function () {
    var header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0)
})
var search = document.querySelector(".search")
var close = document.querySelector(".close")
var clos = document.querySelector(".clos")
var menu = document.querySelector(".menu")
var click=document.querySelector(".menu-click")
icons.onclick=function(){
    search.style.display="block"
}
close.onclick = function (){
    search.style.display = "none"
}
menu.onclick = function (){
    click.style.right = "0"
}
clos.onclick = function (){
    click.style.right = "-120%"
   
}

// 
const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if (window.scrollY > 200) {
        goTopBtn.style.display = "flex"
    } else {
        goTopBtn.style.display = "none"
    }
}

goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})





// 

function loader() {
    document.querySelector(".loading-page").classList.add("active");
}
function fadeOut() {
    setTimeout(loader, 4000);
}
fadeOut()