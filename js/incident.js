import { initializeNavigation } from "./modules/initializeNavigation.js";
import { initializeCustomSelect } from "./modules/customSelect.js";
import { initializeFileInput } from "./modules/initializeFileInput.js";

document.addEventListener("DOMContentLoaded", () => {
   initializeNavigation();
   initializeCustomSelect();
   initializeFileInput();
});
