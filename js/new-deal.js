import { initializeNavigation } from "./modules/initializeNavigation.js";
import { initializeCustomSelect } from "./modules/customSelect.js";
import { initializeEditButton } from "./modules/initializeEditButton.js";
import { initializeFileInput } from "./modules/fileInputNewDeal.js";
document.addEventListener("DOMContentLoaded", () => {
   const toggleDivCheckbox = document.querySelector(".toggle-div");
   const hiddenDiv = document.querySelector(".hidden-div");

   toggleDivCheckbox.addEventListener("change", function () {
      hiddenDiv.style.display = this.checked ? "block" : "none";
   });
   initializeNavigation();
   initializeCustomSelect();
   initializeEditButton();
   initializeFileInput();
});
