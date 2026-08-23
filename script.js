/*====================================================
VISTARA SOLUTIONS 2.0
MAIN JAVASCRIPT
====================================================*/


/*====================================================
MOBILE MENU
====================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navMenu.classList.toggle("active");
        menuBtn.classList.toggle("open");

    });

}


/* Close menu after clicking link */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");
        menuBtn.classList.remove("open");

    });

});



/*====================================================
STICKY HEADER
====================================================*/


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }


});



/*====================================================
SMOOTH SCROLLING
====================================================*/


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        const target = document.querySelector(this.getAttribute("href"));


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});



/*====================================================
ACTIVE NAV LINK ON SCROLL
====================================================*/


const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;


        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){

            current = section.getAttribute("id");

        }


    });



    menuItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });


});
/*====================================================
TESTIMONIAL SWIPER SLIDER
====================================================*/


if(document.querySelector(".testimonialSwiper")){

    const testimonialSwiper = new Swiper(".testimonialSwiper",{

        loop:true,

        autoplay:{

            delay:4000,
            disableOnInteraction:false,

        },


        slidesPerView:1,


        spaceBetween:30,


        pagination:{

            el:".swiper-pagination",
            clickable:true,

        },


        breakpoints:{

            768:{

                slidesPerView:2,

            },


            1200:{

                slidesPerView:3,

            }

        }


    });

}



/*====================================================
GALLERY LIGHTBOX
====================================================*/


const galleryImages = document.querySelectorAll(".gallery-item img");


const lightbox = document.querySelector(".lightbox");


const lightboxImage = document.querySelector(".lightbox img");


const lightboxClose = document.querySelector(".lightbox-close");



galleryImages.forEach(image=>{


    image.addEventListener("click",()=>{


        if(lightbox){

            lightbox.classList.add("active");

            lightboxImage.src = image.src;

        }


    });


});



if(lightboxClose){


    lightboxClose.addEventListener("click",()=>{


        lightbox.classList.remove("active");


    });


}



if(lightbox){


    lightbox.addEventListener("click",(e)=>{


        if(e.target === lightbox){

            lightbox.classList.remove("active");

        }


    });


}



/*====================================================
BACK TO TOP BUTTON
====================================================*/


const backTop = document.querySelector(".back-to-top");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        backTop.classList.add("active");


    }

    else{


        backTop.classList.remove("active");


    }


});



if(backTop){


    backTop.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}



/*====================================================
HERO LOAD ANIMATION
====================================================*/


window.addEventListener("load",()=>{


    const heroElements = document.querySelectorAll(".hero-content > *");


    heroElements.forEach((element,index)=>{


        setTimeout(()=>{


            element.classList.add("show");


        },index * 200);


    });


});
/*====================================================
AOS ANIMATION INITIALIZATION
====================================================*/


if(typeof AOS !== "undefined"){

    AOS.init({

        duration:1000,
        once:true,
        offset:120

    });

}



/*====================================================
CAREER FORM VALIDATION
====================================================*/


const careerForm = document.querySelector("#careerForm");


if(careerForm){


    careerForm.addEventListener("submit",(e)=>{


        e.preventDefault();


        const name = document.querySelector("#careerName");
        const email = document.querySelector("#careerEmail");
        const phone = document.querySelector("#careerPhone");
        const position = document.querySelector("#careerPosition");
        const resume = document.querySelector("#resumeUpload");



        if(
            name.value.trim()==="" ||
            email.value.trim()==="" ||
            phone.value.trim()==="" ||
            position.value===""
        ){

            showMessage("Please fill all required fields","error");

            return;

        }



        if(resume && resume.files.length===0){

            showMessage("Please upload your resume","error");

            return;

        }



        showMessage(
            "Application submitted successfully!",
            "success"
        );


        careerForm.reset();


    });


}



/*====================================================
CONTACT FORM VALIDATION
====================================================*/


const contactForm = document.querySelector("#contactForm");


if(contactForm){


    contactForm.addEventListener("submit",(e)=>{


        e.preventDefault();



        const inputs = contactForm.querySelectorAll("input, textarea");


        let valid = true;



        inputs.forEach(input=>{


            if(input.value.trim()===""){

                valid=false;

            }


        });



        if(!valid){

            showMessage(
                "Please complete all fields",
                "error"
            );

            return;

        }



        showMessage(
            "Thank you! We will contact you soon.",
            "success"
        );


        contactForm.reset();



    });


}



/*====================================================
NOTIFICATION MESSAGE SYSTEM
====================================================*/


function showMessage(message,type){


    const notification = document.createElement("div");


    notification.className =
    `notification ${type}`;


    notification.innerHTML = `

        <i class="fa-solid fa-circle-check"></i>

        <span>${message}</span>

    `;



    document.body.appendChild(notification);



    setTimeout(()=>{


        notification.classList.add("show");


    },100);



    setTimeout(()=>{


        notification.classList.remove("show");


        setTimeout(()=>{

            notification.remove();

        },500);



    },3500);



}
/*====================================================
WEBSITE PRELOADER
====================================================*/


window.addEventListener("load",
    function(){


    const preloader = document.querySelector(".preloader");


    if(preloader)  {


        preloader.style.display = "none";


    }


});



/*====================================================
COUNTER ANIMATION
====================================================*/


const counters = document.querySelectorAll(".counter");


let counterStarted = false;



function startCounter(){


    if(counterStarted) return;


    counters.forEach(counter=>{


        const target = +counter.getAttribute("data-target");


        let count = 0;


        const speed = target / 100;



        const updateCounter = ()=>{


            if(count < target){


                count += speed;


                counter.innerText =
                Math.ceil(count);


                requestAnimationFrame(updateCounter);


            }

            else{


                counter.innerText = target;


            }


        };


        updateCounter();


    });


    counterStarted=true;


}



window.addEventListener("scroll",()=>{


    const counterSection =
    document.querySelector(".counter-section");


    if(counterSection){


        const sectionTop =
        counterSection.offsetTop -
        window.innerHeight + 200;


        if(window.scrollY > sectionTop){

            startCounter();

        }


    }


});



/*====================================================
PROPERTY FILTER SYSTEM
====================================================*/


const filterButtons =
document.querySelectorAll(".property-filter button");


const propertyCards =
document.querySelectorAll(".property-card");



filterButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        const filter =
        button.getAttribute("data-filter");



        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });



        button.classList.add("active");



        propertyCards.forEach(card=>{


            const category =
            card.getAttribute("data-category");



            if(
                filter==="all" ||
                category===filter
            ){

                card.style.display="block";

            }

            else{

                card.style.display="none";

            }


        });


    });


});



/*====================================================
IMAGE LAZY LOADING
====================================================*/


const lazyImages =
document.querySelectorAll("img");



lazyImages.forEach(img=>{


    if(!img.hasAttribute("loading")){


        img.setAttribute(
            "loading",
            "lazy"
        );


    }


});



/*====================================================
DISABLE RIGHT CLICK ON IMAGES
====================================================*/


document.querySelectorAll("img")
.forEach(image=>{


    image.addEventListener(
        "contextmenu",
        e=>e.preventDefault()
    );


});
document.addEventListener("DOMContentLoaded", () => {
    const p = document.querySelector(".preloader");
    if (p) {
        p.remove();
    }
});


/*====================================================
FINAL CONSOLE MESSAGE
====================================================*/


console.log(
"Vistara Solutions 2.0 Website Loaded Successfully ⚜️"
);
