const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector(".nav-links");

// add a click event to the hamburger menu
hamburger.addEventListener("click", function (){
    if(navLinks.classList.contains("active")){
        navLinks.classList.remove("active");
    }else {
        navLinks.classList.add("active");
    }
})
//add on scroll event to the menu bar

window.addEventListener("scroll", function (){
    if(window.pageYOffset > 100){
        navLinks.classList.remove("active");
    }

})