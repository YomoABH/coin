import { initializeNavigation } from "./modules/initializeNavigation.js";

document.addEventListener("DOMContentLoaded", () => {
   const modal = document.getElementById("modal");
   const openButtons = document.querySelectorAll(".openButton");
   const closeButtons = document.querySelectorAll(".closeButton");

   openButtons.forEach(function (button) {
      button.addEventListener("click", function () {
         modal.style.visibility = "visible";
         modal.style.opacity = 1;
      });
   });

   closeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
         modal.style.visibility = "hidden";
         modal.style.opacity = 0;
      });
   });

   modal.addEventListener("click", function (event) {
      if (event.target === modal) {
         modal.style.visibility = "hidden";
         modal.style.opacity = 0;
      }
   });

   const checkboxes = document.querySelectorAll('input[type="checkbox"]');

   checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
         const blockNumber = parseInt(checkbox.id.replace(/\D/g, ""), 10); // Используем replace для удаления нецифровых символов
         const blocks = document.querySelectorAll(`.block${blockNumber}`);

         blocks.forEach(function (block) {
            if (checkbox.checked) {
               block.style.display = "flex";
            } else {
               block.style.display = "none";
            }
         });
      });

      // Первичная проверка состояния чекбоксов при загрузке страницы
      const blockNumber = parseInt(checkbox.id.replace(/\D/g, ""), 10);
      const blocks = document.querySelectorAll(`.block${blockNumber}`);

      blocks.forEach(function (block) {
         block.style.display = checkbox.checked ? "flex" : "none";
      });
   });
   initializeNavigation();
});
