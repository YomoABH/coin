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
			<td>${fileName}</td>
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
				<div class="checkbox-item">
					<input
						type="checkbox"
						id="checkbox1"
						class="toggle-div"
					/>
					<label for="checkbox1"></label>
				</div>
			</td>
			<td>
				<div>
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
         tableBody.appendChild(newRow);
         console.log("add");
      }
      initializeCustomSelect();
      initializeEditButton();
   });
}
