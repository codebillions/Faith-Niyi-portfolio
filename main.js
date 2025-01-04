AOS.init();

// swiper
const swiper = new Swiper(".swiperCarousel", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    keyboard: {
      enabled: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  const slides = document.getElementsByClassName("swiper-slide");
  for (const slide of slides) {
    slide.addEventListener("click", () => {
      const { className } = slide;
      if (className.includes("swiper-slide-next")) {
        swiper.slideNext();
      } else if (className.includes("swiper-slide-prev")) {
        swiper.slidePrev();
      }
    });
  }
  
  function resizeTextToFit() {
    const quoteEls = document.getElementsByClassName('quote');
    for (const el of quoteEls) {
      el.style.width = el.offsetWidth;
      el.style.height = el.offsetHeight;
    }
    textFit(quoteEls, { maxFontSize: 14 });
  }
  resizeTextToFit();
  addEventListener("resize", (event) => {
    resizeTextToFit();
  } );
  


  // form validation

// starter JavaScript for disabling form submissions if there are invalid fields
( function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll( '.needs-validation' )

    // Loop over them and prevent submission
    Array.prototype.slice.call( forms )
        .forEach( function ( form ) {
            form.addEventListener( 'submit', function ( event ) {
                if ( !form.checkValidity() ) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add( 'was-validated' );
            }, false )
        } )
} )();

// animation 
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
