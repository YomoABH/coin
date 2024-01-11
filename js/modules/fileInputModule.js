import { initializeCustomSelect } from "./customSelect.js";
import { initializeEditButton } from "./initializeEditButton.js";
// fileInputModule.js
export function initializeFileInput() {
   const fileInput = document.getElementById("information-page-fileInput");
   const tableBody = document.querySelector(".information-page-table__body");

   fileInput.addEventListener("change", function () {
      const files = fileInput.files;

      for (let i = 0; i < files.length; i++) {
         const fileName = files[i].name;

         const newRow = document.createElement("tr");
         newRow.classList.add("information-page-table__item");

         newRow.innerHTML = `
            <td class="information-page-table__item-name">${fileName}</td>
            <td class="information-page-table__item-type">
               <div class="information-page__select custom-select">
                  <div class="select-box">
                     <div class="selected-item">Выберите тип</div>
                     <div class="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="6" viewBox="0 0 16 6" fill="none">
                           <path d="M14.4586 0.16234C14.9229 -0.136714 15.5418 -0.00274519 15.8408 0.461566C15.9489 0.629338 16.0004 0.817284 16.0002 1.00303C15.9999 1.33134 15.8382 1.65278 15.5416 1.84378L10.1246 5.33278C10.1219 5.33447 10.1193 5.33615 10.1167 5.33783L9.58308 5.68153C8.92358 6.1063 8.07664 6.1063 7.41714 5.68152L6.88349 5.33781C6.88087 5.33614 6.87826 5.33446 6.87565 5.33278L1.45864 1.84378C1.28451 1.73163 1.15686 1.57451 1.08106 1.39743C0.974185 1.14774 0.970449 0.858359 1.08504 0.599431C1.10588 0.552327 1.13064 0.506231 1.15941 0.461565C1.45847 -0.00274632 2.0773 -0.136714 2.54161 0.162341L7.95862 3.65136L7.96318 3.65428C8.29075 3.86278 8.70948 3.86278 9.03705 3.65427L14.4586 0.16234Z" fill="#B1C7FF" />
                        </svg>
                     </div>
                  </div>
                  <ul class="options" style="display: none">
                     <option value="" disabled selected hidden>Тема инцидента</option>
                     <li data-value="option1">Протокол общего собрания акционеров</li>
                     <li data-value="option2">Решение единственного акционера</li>
                     <li data-value="option3">Приказ о назначении</li>
                     <li data-value="option3">Трудовой договор</li>
                     <!-- Add more options as needed -->
                  </ul>
               </div>
            </td>
            <td class="information-page-table__item-location">
               <div class="input-container">
                  <input type="text" class="text-input" style="display: none" />
                  <div class="text-content">Место хранениz1</div>
                  <button class="edit-button"></button>
               </div>
            </td>
            <td class="information-page-table__item-save sm">
               <button>                                    <svg
               xmlns="http://www.w3.org/2000/svg"
               width="15"
               height="12"
               viewBox="0 0 15 12"
               fill="none"
            >
               <path
                  d="M3.41169 11.7943H12.5545C13.8559 11.7943 14.9203 10.7299 14.9203 9.42854V7.71425C14.9203 7.52464 14.8567 7.36042 14.7397 7.2434C14.6227 7.12637 14.4584 7.06282 14.2688 7.06282C14.0792 7.06282 13.915 7.12637 13.798 7.2434C13.681 7.36042 13.6174 7.52464 13.6174 7.71425V9.42854C13.6174 10.0129 13.1389 10.4914 12.5545 10.4914H3.41169C2.8273 10.4914 2.34883 10.0129 2.34883 9.42854V7.71425C2.34883 7.52464 2.28528 7.36042 2.16826 7.2434C2.05124 7.12637 1.88701 7.06282 1.69741 7.06282C1.5078 7.06282 1.34357 7.12637 1.22655 7.2434C1.10953 7.36042 1.04598 7.52464 1.04598 7.71425V9.42854C1.04598 10.7299 2.11037 11.7943 3.41169 11.7943Z"
                  fill="#B1C7FF"
                  stroke="#B1C7FF"
                  stroke-width="0.16"
               />
               <path
                  d="M7.52641 9.31364C7.58828 9.37551 7.65332 9.42509 7.72906 9.45875C7.80515 9.49257 7.88793 9.5085 7.98298 9.5085C8.07803 9.5085 8.16081 9.49257 8.2369 9.45875C8.31264 9.42509 8.37768 9.37551 8.43955 9.31364L10.1538 7.59936C10.4136 7.33954 10.4136 6.94603 10.1538 6.68622C9.89402 6.42641 9.50051 6.42641 9.2407 6.68622L8.63441 7.29251V0.857073C8.63441 0.667465 8.57086 0.503241 8.45383 0.386219C8.33681 0.269197 8.17259 0.205645 7.98298 0.205645C7.79337 0.205645 7.62915 0.269197 7.51213 0.386219C7.3951 0.503241 7.33155 0.667465 7.33155 0.857073V7.29251L6.72526 6.68622C6.46545 6.42641 6.07194 6.42641 5.81213 6.68622C5.55231 6.94603 5.55231 7.33954 5.81213 7.59936L7.52641 9.31364Z"
                  fill="#B1C7FF"
                  stroke="#B1C7FF"
                  stroke-width="0.16"
               />
            </svg>
</button>
            </td>
         `;
         tableBody.appendChild(newRow);
         console.log("add");
      }
      initializeCustomSelect();
      initializeEditButton();
   });
}
