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
var toggleBtn = document.getElementById("btnToggle");
function toggleNav(){
    var checkMenu = nav.classList.contains("-openmenu");
    if(!checkMenu){
        nav.classList.add("-openmenu");
    }else{
        nav.classList.remove("-openmenu");
    }
}
toggleBtn.addEventListener("click", toggleNav); 
document.addEventListener('click', function(event) {
    var checkMenu = nav.classList.contains("-openmenu");
    var isClickInside = nav.contains(event.target);
    var isClickbutton = toggleBtn.contains(event.target);
    if(checkMenu && !isClickInside && !isClickbutton) {
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
window.addEventListener("load", function(){
    const slide = document.querySelector(".mgi_banner__slides.-full");
    const viewport = document.querySelector(".mgi_banner__slides__wrap");
    const slideItems = document.querySelectorAll(".mgi_banner__slides__item");
    const prevbtn = document.querySelector(".mgi_banner__arrow.-left");
    const nextbtn = document.querySelector(".mgi_banner__arrow.-right");
    const dots = document.querySelectorAll(".mgi_banner__dots__dot");
    var posX = 0;
    var slideIndex = 0;
    var slidewidth = slideItems[0].offsetWidth;
    var slidelength = slideItems.length;
    var slideArrays = [...dots];
    nextbtn.addEventListener("click", function(){
        
        if(posX >= slidelength -1)
        {
            posX = 0;
        }else{
            posX++;
        }
        handleClickslide();
    })
    prevbtn.addEventListener("click", function(){
        
        if(posX <= 0)
        {
            posX = slidelength -1;
        }
        else{
            posX--;
        }
        handleClickslide();
    })
    // dots controls
    slideArrays.forEach((item) => item.addEventListener("click",function(e){
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" -active", "");
        }
        e.target.classList.add("-active")
        const index = parseInt(e.target.dataset.index);
        slideIndex = index;
        posX = -1 * slideIndex * slidewidth;
        viewport.style = `transform: translateX(${posX}px)`;
    })
    );
    function handleClickslide(){
        viewport.style = `transform: translateX(${-1*posX*slidewidth}px)`;
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" -active", "");
        }
        dots[posX].classList.add("-active");
    }
})
// var slides = document.getElementsByClassName("mgi_banner__slides__item");
// var slideIndex = 1;
// showSlides(slideIndex);
// // Next/previous controls
// function moveSlide(n) {
//     showSlides(slideIndex += n);
//     console.log(slideIndex);
//   }
  
// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
  
// function showSlides(n) {
//     var dots = document.getElementsByClassName("mgi_banner__dots__dot");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (var i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" -active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " -active";
// }

// //auto slide
// setInterval(function(){
//     slideIndex++;
//     showSlides(slideIndex);
// }, 9000);

//Project slide DOING....

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