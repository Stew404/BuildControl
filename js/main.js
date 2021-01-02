
// Mobile Menu

const headerButton = document.querySelector(".header__button");
      headerMenuClose = document.querySelector(".header__menu-close");
      headerMenu = document.querySelector(".header__menu_mobile");

      let translateX = 100;
      headerButton.addEventListener("click", () =>{
         headerMenu.style.display = "flex";

         let animationOpen = setInterval(() => {
            
            translateX -= 3;
            headerMenu.style.transform = "translateX(" + translateX + "%)";
            if (translateX <= 0) {
               clearInterval(animationOpen);
               headerMenu.style.transform = "translateX(0%)"
            }
         }, 1);
      });

      headerMenuClose.addEventListener("click", () =>{
         
         let animationClose = setInterval(() => {
            translateX += 3;
            headerMenu.style.transform = "translateX(" + translateX + "%)";
            if (translateX >= 100) {
               clearInterval(animationClose);
               headerMenu.style.transform = "translateX(100%)";
               headerMenu.style.display = "none";
            }
         }, 1);
      });

const headerMenuElem = document.querySelectorAll('.header__menu-element');


      headerMenuElem.forEach((currentValue)=>{
         currentValue.addEventListener("click", () => {
         let animationClose = setInterval(() => {
            translateX += 3;
            headerMenu.style.transform = "translateX(" + translateX + "%)";
            if (translateX >= 100) {
               clearInterval(animationClose);
               headerMenu.style.transform = "translateX(100%)";
               headerMenu.style.display = "none";
            }
            }, 1);
         });
      })
      

