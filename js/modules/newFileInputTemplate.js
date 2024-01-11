// fileInputModule.js
import { initializeCustomSelect } from "./customSelect.js";
import { initializeEditButton } from "./initializeEditButton.js";

export function initializeFileInput(htmlTemplate) {
   const fileInput = document.getElementById("information-page-fileInput");
   const tableBody = document.querySelector(".information-page-table__body");

   fileInput.addEventListener("change", function () {
      const files = fileInput.files;

      for (let i = 0; i < files.length; i++) {
         const fileName = files[i].name;

         const newRow = document.createElement("tr");
         newRow.classList.add("information-page-table__item");

         newRow.innerHTML = htmlTemplate.replace("{{fileName}}", fileName);

         tableBody.appendChild(newRow);
         console.log("add");
      }
      initializeCustomSelect();
      initializeEditButton();
   });
}
