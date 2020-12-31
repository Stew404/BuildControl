

function resizeWidthOnly(a,b) {  
  var c = [window.innerWidth];
  return onresize = function() {
    var d = window.innerWidth,
        e = c.length;
    c.push(d);
    if(c[e]!==c[e-1]){
      clearTimeout(b);
      b = setTimeout(a, 50);
    } 
  }, a;
}






let deliveryProducts = document.querySelector('.delivery__products');
    
    deliveryProductsBlock = document.querySelectorAll('.delivery__products-block');



function createSlides() {

  let swiperWrapper = document.querySelector('.swiper-wrapper');

  deliveryProductsBlock.forEach(()=> {
    swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");

    swiperWrapper.appendChild(swiperSlide);

  })
}

function clearSlides() {
  swiperSlides.forEach((currentValue)=> {
    currentValue.innerHTML = ``;
  })
}

function buttonsOn() {
  let swiperBtnNext = document.querySelector('.swiper-button-next');
      swiperBtnPrev = document.querySelector('.swiper-button-prev');

      swiperBtnNext.style.display = 'flex';
      swiperBtnPrev.style.display = 'flex';
}

function buttonsOff() {
  let swiperBtnNext = document.querySelector('.swiper-button-next');
      swiperBtnPrev = document.querySelector('.swiper-button-prev');

      swiperBtnNext.style.display = 'none';
      swiperBtnPrev.style.display = 'none';
}



function appendInSlide() {
  let swiperSlides = document.querySelectorAll('.swiper-slide')
  deliveryProductsBlock.forEach((currentValue, index)=> {
    swiperSlides[index].appendChild(currentValue)
  })
}

function defaultSlides() {
  deliveryProductsBlock.forEach((currentValue)=> {
    deliveryProducts.appendChild(currentValue)
  })
}

createSlides();


let mySwiper;

if (window.innerWidth < 900 && mySwiper == undefined){
    appendInSlide();
    buttonsOn();
    mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: 2,
      
      

      breakpoints: {
        699: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        320: {
            slidesPerView: 1,
            centeredSlides: true,
        }
      },


      // If we need pagination

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar

    })
  
  }

window.addEventListener("resize", () => {
  if (window.innerWidth < 900 && mySwiper == undefined){
    appendInSlide();
    buttonsOn();
    mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: 2,
      
      

      breakpoints: {
        699: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        320: {
            slidesPerView: 1,
            centeredSlides: true,
        }
      },


      // If we need pagination

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar

    })
  
  } else if (window.innerWidth >= 900 && mySwiper != undefined) {
    mySwiper.destroy();
    buttonsOff(); 

    mySwiper = undefined;
    defaultSlides();
  } 

})






