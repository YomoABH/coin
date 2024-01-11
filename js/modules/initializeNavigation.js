// navigation.js
export function initializeNavigation() {
   const mobileBtn = document.querySelector(".navigation-bar__mobile-btn");
   const navigationBar = document.querySelector(".navigation-bar");

   mobileBtn.addEventListener("click", toggleNavigationBar);

   function toggleNavigationBar() {
      navigationBar.classList.toggle("active");
   }
}
