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
function toggleNav(){
    var nav = document.getElementById("navLeft");
    if(nav.style.display === "none"){
        nav.style.display = "block";
        nav.classList.add("-open");
    }else{
        nav.style.display = "none";
        nav.classList.remove("-open");
    }
}
// Scroll top
// function goTop() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
function goTop (duration) {
    // cancel if already on top
    if (document.scrollingElement.scrollTop === 0) return;

    const totalScrollDistance = document.scrollingElement.scrollTop;
    let scrollY = totalScrollDistance, oldTimestamp = null;

    function step (newTimestamp) {
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

// function prevSlide(){
//     var currentSlide = document.querySelector(".slideactive");
//     var prevSlideIndex = document.querySelector(".slideactive + div");
//     var firstSlide = document.querySelector("mgi_banner__slides__wrap + div");
//     console.log(currentSlide);
//     if(prevSlideIndex.lenght !=0){
//         currentSlide.classList.add("slideoutleft");
//         currentSlide.classList.remove("slideoutleft")
//         currentSlide.classList.remove("slideactive");
//         prevSlideIndex.classList.add("slideactive slideinright");
//         prevSlideIndex.classList.remove("slideoutleft");
//     }
//     else{
//         currentSlide.classList.add("slideoutleft");
//         currentSlide.classList.remove("slideoutleft")
//         currentSlide.classList.remove("slideactive");
//         firstSlide.classList.add("slideactive slideinright");
//         firstSlide.classList.remove("slideinright");
//     }
// }

// function nextSlide(){}
/*** JQUERY SLIDE ****/
// $(document).ready(function(){
//     $('.mgi_banner__arrow.-right').click(function(){
//         var nextSlideIndex = $('.active').next();
//         if(nextSlideIndex.length !=0){
//             $('.active').addClass('slideoutLeft');
//             $('.slideoutLeft').removeClass('slideoutLeft').removeClass('active');
//             nextSlideIndex.addClass('active').addClass('slideinRight');
//             nextSlideIndex.removeClass('slideinRight');
//         }
//         else{
//             $('.active').addClass('slideoutLeft')
//             $('.slideoutLeft').removeClass('slideoutLeft').removeClass('active');
//             $('.mgi_banner__slides__item:first-child').addClass('active').addClass('slideinRight');
//             $('.slideinRight').removeClass('slideinRight');
//         }
//     });
//     $('.mgi_banner__arrow.-left').click(function(){
//         var prevSlideIndex = $('.active').prev();
//         if(prevSlideIndex.length !=0){
//             $('.active').addClass('slideoutRight');
//             $('.slideoutRight').removeClass('slideoutRight').removeClass('active');
//             prevSlideIndex.addClass('active').addClass('slideinLeft');
//             prevSlideIndex.removeClass('slideinLeft');
//         }
//         else{
//             $('.active').addClass('slideoutRight');
//             $('.slideoutRight').removeClass('slideoutRight').removeClass('active');
//             $('.mgi_banner__slides__item:last-child').addClass('active').addClass('slideinLeft');
//             $('.slideinLeft').removeClass('slideinLeft');
//         }
//     });
    
// });