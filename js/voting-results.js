import { initializeFileInput } from "./modules/newFileInputTemplate.js";
import { initializeNavigation } from "./modules/initializeNavigation.js";
import { initializeCustomSelect } from "./modules/customSelect.js";
import { initializeEditButton } from "./modules/initializeEditButton.js";

document.addEventListener("DOMContentLoaded", function () {
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

   initializeFileInput(htmlTemplate);
   initializeNavigation();
   initializeCustomSelect();
   initializeEditButton();
});
