import { initializeNavigation } from "./modules/initializeNavigation.js";
import { initializeCustomSelect } from "./modules/customSelect.js";
import { initializeEditButton } from "./modules/initializeEditButton.js";
import { initializeFileInput } from "./modules/fileInputModule.js";
document.addEventListener("DOMContentLoaded", () => {
   initializeNavigation();
   initializeCustomSelect();
   initializeEditButton();
   initializeFileInput();
});
