
document.querySelectorAll(".featured-image-1").forEach(image1 => {
    image1.addEventListener("click", () => {
        var src = image1.getAttribute("src")
        document.querySelector(".big-image-1").src = src
    })
})

document.querySelectorAll(".featured-image-2").forEach(image2 => {
    image2.addEventListener("click", () => {
        var src = image2.getAttribute("src")
        document.querySelector(".big-image-2").src = src
    })
})

document.querySelectorAll(".featured-image-3").forEach(image3 => {
    image3.addEventListener("click", () => {
        var src = image3.getAttribute("src")
        document.querySelector(".big-image-3").src = src
    })
})
// 


const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
});
minus.addEventListener("click", () => {
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    }
});

// 
window.addEventListener("scroll", function () {
    var header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0)
})
var search = document.querySelector(".search")
var close = document.querySelector(".close")
var clos = document.querySelector(".clos")
var menu = document.querySelector(".menu")
var click = document.querySelector(".menu-click")
icons.onclick = function () {
    search.style.display = "block"
}
close.onclick = function () {
    search.style.display = "none"
}
menu.onclick = function () {
    click.style.right = "0"
}
clos.onclick = function () {
    click.style.right = "-140%"

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