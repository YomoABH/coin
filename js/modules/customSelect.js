export function initializeCustomSelect() {
   // Используем делегирование событий, добавляя обработчики на родительский элемент
   document.addEventListener("click", handleDocumentClick);

   document.querySelectorAll(".custom-select").forEach((selectBox) => {
      if (!selectBox.classList.contains("custom-select-initialized")) {
         selectBox.classList.add("custom-select-initialized");

         // Добавляем обработчик на клик по каждому custom-select
         selectBox.addEventListener("click", (event) => {
            handleCustomSelect(selectBox, event);
         });

         // Добавляем обработчик на клик по options
         selectBox
            .querySelector(".options")
            .addEventListener("click", (event) => {
               handleCustomSelectOption(selectBox, event);
            });
      }
   });
}

function handleCustomSelect(selectBox, event) {
   const selectedItem = selectBox.querySelector(".selected-item");
   const options = selectBox.querySelector(".options");
   const arrow = selectBox.querySelector(".arrow");

   options.style.display = options.style.display === "none" ? "block" : "none";
   arrow.classList.toggle("active");
   selectBox.classList.toggle("active");

   if (event.target.tagName === "LI") {
      options.style.display = "none";
   }
}

function handleCustomSelectOption(selectBox, event) {
   if (event.target.tagName === "LI") {
      selectBox.querySelector(".selected-item").textContent =
         event.target.textContent;
      selectBox.querySelector(".options").style.display = "none";
   }
}

function handleDocumentClick(event) {
   // Закрываем все открытые options, если клик был вне custom-select
   document.querySelectorAll(".custom-select .options").forEach((options) => {
      if (!options.closest(".custom-select").contains(event.target)) {
         options.style.display = "none";
      }
   });
}
7405540;
