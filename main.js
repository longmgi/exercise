// Scroll event
var btnGoTop = document.querySelector("#scrollTop");
window.addEventListener('scroll', function() {
    var positionX = window.pageYOffset;
    if(positionX >= 80){
        document.querySelector("header").classList.add("-fixtop");
        btnGoTop.classList.add("-show");
    }else{
        document.querySelector("header").classList.remove("-fixtop");
        btnGoTop.classList.remove("-show");
    }
});
//Resize event
// var parentObj = document.querySelector(".mgi_slides__wrap");
// var childObj = document.querySelectorAll(".mgi_slides__item");
// for(var i=0; i<childObj.length; i++)
//     {
//         childObj[i].style.width = "360px";
//     }
// function displayWindowSize(){
    
//     var tempwidth = parentObj.offsetWidth;
//     if(tempwidth < 1335 && tempwidth >=768)
//     {
//         for(var i=0; i<childObj.length; i++)
//         {
//             childObj[i].style.width = `${tempwidth / 2}px`;
//         }
        
//     }
//     else if(tempwidth<768)
//     {
//         for(var i=0; i<childObj.length; i++)
//         {
//             childObj[i].style.width = `${tempwidth}px`;
//         }
//     }
//     else{
//         for(var i=0; i<childObj.length; i++)
//         {
//         childObj[i].style.width = "360px";
//         }
//     }
    
// }

//window.addEventListener("resize", displayWindowSize);
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
// Toggle info me
var infome = document.getElementById("infoMe");
var toggleBtninforme = document.getElementById("btnInfome");
function toggleInfome(){
    var checkInfome = infome.classList.contains("-open");
    if(!checkInfome){
        infome.classList.add("-open");
    }else{
        infome.classList.remove("-open");
    }
}
toggleBtninforme.addEventListener("click", toggleBtninforme); 
document.addEventListener('click', function(event) {
    var checkOpenInfome = infome.classList.contains("-open");
    var isClickInsideInfome = infome.contains(event.target);
    var isClickbuttonInfome = toggleBtninforme.contains(event.target);
    if(checkOpenInfome && !isClickInsideInfome && !isClickbuttonInfome) {
        infome.classList.remove("-open");
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

    const slide = document.querySelector(".mgi_banner__slides.-full");
    const viewport = document.querySelector(".mgi_banner__slides__wrap");
    const slideItems = document.querySelectorAll(".mgi_banner__slides__item");
    const prevbtn = document.querySelector(".mgi_banner__arrow.-left");
    const nextbtn = document.querySelector(".mgi_banner__arrow.-right");
    const dots = document.querySelectorAll(".mgi_banner__dots__dot");
    var posX = 0;
    var slideIndex = 0;
    var slidewidth = slideItems[0].offsetWidth;
    console.log(slidewidth);
    function calcWidth(){
        slidewidth = slideItems[0].offsetWidth;
        console.log("resize",slidewidth);
        return slidewidth;
        
    }
    window.addEventListener("resize", calcWidth);
    var loopSlide = setInterval(function(){
        handleClickslide(1);
    }, 6000);
    var slidelength = slideItems.length;
    var slideArrays = [...dots];
    function moveSlide(direction) {
        handleClickslide(direction);
        clearInterval(loopSlide);
    }
    // dots controls
    slideArrays.forEach((item) => item.addEventListener("click",function(e){
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" -active", "");
        }
        e.target.classList.add("-active")
        const posX = parseInt(e.target.dataset.index);
        for (var i = 0; i < slideItems.length; i++) {
            slideItems[i].classList.remove("-active");
        }
        slideItems[posX].classList.add("-active");
        viewport.style = `transform: translateX(${-1*posX*slidewidth}px)`;
        clearInterval(loopSlide);
    })
    );
    // function run
    function handleClickslide(direction){
        if(direction == 1){
            for (var i = 0; i < slideItems.length; i++) {
                slideItems[i].classList.remove("-moveleft");
                slideItems[i].classList.remove("-moveright");
            }
            if(posX >= slidelength -1)
            {
                posX = 0;
                slideItems[slidelength-1].classList.add("-moveright");
            }
            else{
                posX+=1;
                slideItems[posX-1].classList.add("-moveright");
            }
            viewport.style = `transform: translateX(${-1*posX*slidewidth}px)`;
        }
        else if(direction == -1)
        {
            for (var i = 0; i < slideItems.length; i++) {
                slideItems[i].classList.remove("-moveleft");
                slideItems[i].classList.remove("-moveright");
            }
            if(posX <= 0)
            {
                slideItems[0].classList.add("-moveleft");
                posX = slidelength -1;
            }
            else
            {
                posX--;
                slideItems[posX+1].classList.add("-moveleft");
            }
            viewport.style = `transform: translateX(${-1*posX*slidewidth}px)`;
        }
        
        for (var i = 0; i < slideItems.length; i++) {
            slideItems[i].classList.remove("-active");
        }
        slideItems[posX].classList.add("-active");
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" -active", "");
        }
        dots[posX].classList.add("-active");
        return posX;
    }
    
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
    var toggleShopBtn = document.getElementById("mgiShopBag");
    var shopDropdown = document.querySelector(".mgi_shopcart");
    if(!checkshop)
    {
        shopDropdown.classList.add("-openToggle");
    }
    else{
        shopDropdown.classList.remove("-openToggle");
    }
        toggleShopBtn.addEventListener("click", toggleNav); 
        document.addEventListener('click', function(event) {
            var isClickInsideShop = shopDropdown.contains(event.target);
            var isClickbuttonShop = toggleShopBtn.contains(event.target);
            if(checkshop && !isClickInsideShop && !isClickbuttonShop) {
                shopDropdown.classList.remove("-openToggle");
            }
        });
}
//open Modal
var modal = document.getElementById("mgiModal");
var modalwrap = document.querySelector(".mgi_popup__wrap");
var toggleModalbtn = document.getElementById("openModal");
function toggleModal(){
    
    var checkModal = modal.classList.contains("-movedown");
    if(!checkModal){
        modal.classList.add('-movedown');
    }else
        modal.classList.remove('-movedown');
 }
toggleModalbtn.addEventListener("click", toggleModal);
document.addEventListener('click', function(event) {
    var checkModal = modal.classList.contains("-movedown");
    var isClickInsideModal = modalwrap.contains(event.target);
    var isClickbtnModel = toggleModalbtn.contains(event.target);
    if(checkModal && !isClickInsideModal && !isClickbtnModel) {
        modal.classList.remove('-movedown');
    }
});