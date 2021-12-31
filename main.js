// Scroll event
window.addEventListener('scroll', function() {
    var positionX = window.pageYOffset;
    
    if(positionX >= 80){
        document.querySelector("header").classList.add("-fixtop");
        document.querySelector("#scrollTop").classList.add("-show");
    }else{
        document.querySelector("header").classList.remove("-fixtop");
        document.querySelector("#scrollTop").classList.remove("-show");
    }
});
// Toggle button
var nav = document.getElementById("navLeft");
var btnToggle = document.getElementById("btnToggle");

function toggleNav(){
    var checkMenu = nav.classList.contains("-openmenu");
    if(!checkMenu){
        nav.classList.add("-openmenu");
    }else{
        nav.classList.remove("-openmenu");
    }
}

document.addEventListener('click', function(event) {
    var isClickInside = btnToggle.contains(event.target);

    if(!isClickInside) {
        nav.classList.remove("-openmenu");
    }
});

function goTop(duration) {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const totalScrollDistance = document.scrollingElement.scrollTop;
    let scrollY = totalScrollDistance, oldTimestamp = null;

    function step(newTimestamp) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollY will be -Infinity
            scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
            if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
            document.scrollingElement.scrollTop = scrollY;
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}
// Hero slider
var slides = document.getElementsByClassName("mgi_banner__slides__item");
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function moveSlide(n) {
    showSlides(slideIndex += n);
    console.log(slideIndex);
  }
  
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var dots = document.getElementsByClassName("mgi_banner__dots__dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" -active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " -active";
}

//auto slide
setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);
}, 9000);

//Searchbar
function toggleSearchbar(){
    var checkshop = document.querySelector(".mgi_nav").classList.contains("-openToggle");
    if(!checkshop)
    {
        document.querySelector(".mgi_nav").classList.add("-openToggle");
    }
    else
        document.querySelector(".mgi_nav").classList.remove("-openToggle");
}
//Shopcart
function toggleShopcart(){
    var checkshop = document.querySelector(".mgi_shopcart").classList.contains("-openToggle");
    if(!checkshop)
    {
        document.querySelector(".mgi_shopcart").classList.add("-openToggle");
    }
    else
        document.querySelector(".mgi_shopcart").classList.remove("-openToggle");
}