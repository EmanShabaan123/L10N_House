let services = null ,
    sectors = null ,
    languges = [] ,
    $navLinks = $("nav .nav-link");
new WOW({
    animateClass: 'animate__animated' 
}).init();

(async function (){
    let response = await fetch("https://semicode.tech/api/v1/l10nhouse/services") ,
    data = await response.json () ;
     console.log(data);
     services = data ;

     services.forEach((service , index) => {
        $("#Services .content .row").append(`
               <div class="col-lg-6 wow animate__rotateIn mb-3 "data-wow-duration="1.55s">
          <div class="box item text-center rounded-4 py-4 px-3 mb-5">
              <img src="./Images/images//${service.icon}" alt="" class="img-fluid ">
              <h4 class="my-3">${service.title}</h4>
              <p class=" m-auto">${prepareDes(service.description.substr(0,150))}... <span class="firstColor" onclick="showData(${index})" >Read More</span></p>
          </div>
        </div>
            `)
        
     });
})();





( function (){
    fetch("https://semicode.tech/api/v1/l10nhouse/sectors")
    .then((data)=> data.json ()) 
    
    .then(function(data){
        sectors = data ;
        console.log(data);
    })
})();


(function(){
 fetch("https://semicode.tech/api/v1/l10nhouse/languages")
.then((response) => response.json())
.then((data) => {
    languges = data ;
    console.log(languges);
    showLanguges(); 
    console.log(languges);
});

})



$(".popup").click(function (e){
    closepopup();
})

$(".popup .box").click(function (e){
    e.stopPropagation () ;
})



$(window).scroll(function(e){
   let windowtop = $(window).scrollTop();

    if(window.scrollY >= 10){
        $("nav").addClass("scrolled");
    }else{
        $("nav").removeClass("scrolled"); 
    }

    let sections = $("section , header");

    sections.each(function(index,section){
        let topcurrent = $(section).offset().top ;
        if(windowtop >= topcurrent){
            sectionId = $(section).attr("id");
            $(`nav .nav-link[href="#${sectionId}"]`).addClass("active");
            $(`nav .nav-link:not([href="#${sectionId}"])`).removeClass("active");
        }
    })

});


$navLinks.click(function(e){

    e.preventDefault();
    let sectionId = $(this).attr("href"),
        $sectionEle = $(sectionId),
        sectionTop = $sectionEle.offset().top,
        heightNav = $("nav").outerHeight(true);

    $(window).scrollTop(sectionTop - heightNav);
});



$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop : true ,
     items:5,
     margin : 30 ,
         responsive:{
        0:{
            items:1,
            nav:false ,
            dots : true ,
        },
        600:{
            items:3,
            nav:false ,
            dots : true ,
        },
        1000:{
            items:5,
            nav:false,
            dots : true ,
        }
    }

  });
});


window.addEventListener("DOMContentLoaded",()=>{
    setTimeout (() => {
        const overlay = document.getElementById("Overlay");
        if(overlay){
            overlay.classList.add("fade-out");
        }
    },3500)
})