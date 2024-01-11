import { initializeNavigation } from "./modules/initializeNavigation.js";
import { initializeCustomSelect } from "./modules/customSelect.js";
import { initializeEditButton } from "./modules/initializeEditButton.js";
import { initializeFileInput } from "./modules/newFileInputTemplate.js";
document.addEventListener("DOMContentLoaded", () => {
   const fileInput = document.getElementById("fileInput");
   const imageBlock = document.getElementById("imageBlock");
   const selectedImage = document.getElementById("selectedImage");
   const editButton = document.getElementById("editButton");
   const deleteButton = document.getElementById("deleteButton");

   function editImage() {
      fileInput.click();
   }

   function deleteImage() {
      selectedImage.src = "";
      fileInput.value = ""; // Очищаем значение input, чтобы событие input сработало при повторном выборе того же файла
      toggleButtons(false);
      toggleImageBlockClass(false);
   }

   function handleFileInputChange() {
      const selectedFile = fileInput.files[0];

      if (selectedFile) {
         const reader = new FileReader();

         reader.onload = function (e) {
            selectedImage.src = e.target.result;
            toggleButtons(true);
            toggleImageBlockClass(true);
         };

         reader.readAsDataURL(selectedFile);
      }
   }

   function handleImageBlockClick() {
      if (selectedImage.getAttribute("src") === "") {
         editImage();
      }
   }

   function toggleButtons(show) {
      editButton.style.display = show ? "inline-block" : "none";
      deleteButton.style.display = show ? "inline-block" : "none";
   }

   function toggleImageBlockClass(active) {
      imageBlock.classList.toggle("active", active);
   }
   editButton.addEventListener("click", editImage);
   deleteButton.addEventListener("click", deleteImage);
   fileInput.addEventListener("input", handleFileInputChange);
   imageBlock.addEventListener("click", handleImageBlockClick);

   const htmlTemplate = `
	<td>{{fileName}}</td>
   <td>
   <div class="custom-select">
      <div class="select-box">
         <div class="selected-item">
            Классификация
         </div>
         <div class="arrow">
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="6"
               viewBox="0 0 16 6"
               fill="none"
            >
               <path
                  d="M14.4586 0.16234C14.9229 -0.136714 15.5418 -0.00274519 15.8408 0.461566C15.9489 0.629338 16.0004 0.817284 16.0002 1.00303C15.9999 1.33134 15.8382 1.65278 15.5416 1.84378L10.1246 5.33278C10.1219 5.33447 10.1193 5.33615 10.1167 5.33783L9.58308 5.68153C8.92358 6.1063 8.07664 6.1063 7.41714 5.68152L6.88349 5.33781C6.88087 5.33614 6.87826 5.33446 6.87565 5.33278L1.45864 1.84378C1.28451 1.73163 1.15686 1.57451 1.08106 1.39743C0.974185 1.14774 0.970449 0.858359 1.08504 0.599431C1.10588 0.552327 1.13064 0.506231 1.15941 0.461565C1.45847 -0.00274632 2.0773 -0.136714 2.54161 0.162341L7.95862 3.65136L7.96318 3.65428C8.29075 3.86278 8.70948 3.86278 9.03705 3.65427L14.4586 0.16234Z"
                  fill="#B1C7FF"
               />
            </svg>
         </div>
      </div>
      <ul class="options" style="display: none">
         <li data-value="option1">Бюллетени</li>
         <li data-value="option2">
            Проект сделки
         </li>
         <li data-value="option3">
            Решение о созыве ВОСА
         </li>
         <li data-value="option3">
            Иное (указывается в описании)
         </li>
      </ul>
   </div>
</td>
<td>
   <div class="input-container">
      <input
         type="text"
         class="text-input"
         style="display: none"
      />
      <div class="text-content">
         Какое-то описание...
      </div>
      <div class="edit-button"></div>
   </div>
</td>
<td>
   <div class="input-container">
      <input
         type="text"
         class="text-input"
         style="display: none"
      />
      <div class="text-content">
         Какое-то описание...
      </div>
      <div class="edit-button"></div>
   </div>
</td>
<td>
   <div>
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="22"
         height="19"
         viewBox="0 0 22 19"
         fill="none"
      >
         <path
            d="M3.84801 18.3038H17.5623C19.5143 18.3038 21.1109 16.7072 21.1109 14.7552V12.1838C21.1109 11.8994 21.0155 11.6531 20.84 11.4775C20.6645 11.302 20.4181 11.2067 20.1337 11.2067C19.8493 11.2067 19.603 11.302 19.4274 11.4775C19.2519 11.6531 19.1566 11.8994 19.1566 12.1838V14.7552C19.1566 15.6318 18.4389 16.3495 17.5623 16.3495H3.84801C2.97142 16.3495 2.25372 15.6318 2.25372 14.7552V12.1838C2.25372 11.8994 2.15839 11.6531 1.98286 11.4775C1.80732 11.302 1.56099 11.2067 1.27658 11.2067C0.992164 11.2067 0.745829 11.302 0.570295 11.4775C0.394762 11.6531 0.299434 11.8994 0.299434 12.1838V14.7552C0.299434 16.7072 1.89602 18.3038 3.84801 18.3038Z"
            fill="#B1C7FF"
            stroke="#B1C7FF"
            stroke-width="0.24"
         />
         <path
            d="M10.0206 14.5833C10.1134 14.6761 10.2109 14.7504 10.3245 14.8009C10.4387 14.8516 10.5629 14.8755 10.7054 14.8755C10.848 14.8755 10.9722 14.8516 11.0863 14.8009C11.1999 14.7504 11.2975 14.6761 11.3903 14.5833L13.9617 12.0118C14.3514 11.6221 14.3514 11.0318 13.9617 10.6421C13.572 10.2524 12.9817 10.2524 12.592 10.6421L11.6826 11.5516V1.8984C11.6826 1.61399 11.5872 1.36765 11.4117 1.19212C11.2362 1.01659 10.9898 0.92126 10.7054 0.92126C10.421 0.92126 10.1747 1.01659 9.99915 1.19212C9.82361 1.36765 9.72828 1.61399 9.72828 1.8984V11.5516L8.81885 10.6421C8.42913 10.2524 7.83887 10.2524 7.44915 10.6421C7.05943 11.0318 7.05943 11.6221 7.44915 12.0118L10.0206 14.5833Z"
            fill="#B1C7FF"
            stroke="#B1C7FF"
            stroke-width="0.24"
         />
      </svg>
      <svg
         class="new-deal-page__table-del-btn"
         xmlns="http://www.w3.org/2000/svg"
         width="25"
         height="25"
         viewBox="0 0 25 25"
         fill="none"
      >
         <path
            d="M7.40002 22.6534H17.1501C18.2933 22.6534 19.2201 21.7267 19.2201 20.5834V8.02845H20.0751C20.6799 8.02845 21.1701 7.5382 21.1701 6.93345C21.1701 6.3287 20.6799 5.83845 20.0751 5.83845H17.2701V4.98345C17.2701 3.84022 16.3433 2.91345 15.2001 2.91345H9.35004C8.2068 2.91345 7.28002 3.84022 7.28002 4.98345V5.83845H4.475C3.87025 5.83845 3.38 6.3287 3.38 6.93345C3.38 7.5382 3.87025 8.02845 4.475 8.02845H5.33001V20.5834C5.33001 21.7267 6.25679 22.6534 7.40002 22.6534ZM17.0301 20.4634H7.52002V8.02845H17.0301V20.4634ZM15.0801 5.83845H9.47004V5.10345H15.0801V5.83845Z"
            fill="#B1C7FF"
            stroke="#B1C7FF"
            stroke-width="0.24"
         />
      </svg>
   </div>
</td>
`;

   initializeFileInput(htmlTemplate);
   initializeNavigation();
   initializeCustomSelect();
   initializeEditButton();
});
