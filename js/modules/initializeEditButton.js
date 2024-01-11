export function initializeEditButton() {
   const editButtons = document.querySelectorAll(".edit-button");
   const clickHandler = (event) => handleEditButtonClick(event);

   editButtons.forEach((button) => {
      // Проверим, есть ли уже обработчик
      const hasHandler = button.__clickHandlerAdded;

      if (!hasHandler) {
         // Добавим новый обработчик
         button.addEventListener("click", clickHandler);
         // Пометим кнопку, чтобы знать, что обработчик добавлен
         button.__clickHandlerAdded = true;
      }
   });

   function handleEditButtonClick(event) {
      const container = event.target.closest(".input-container");
      const textInput = container.querySelector(".text-input");
      const editButton = container.querySelector(".edit-button");
      const textContent = container.querySelector(".text-content");

      if (textInput.style.display === "none") {
         textInput.value = textContent.textContent.trim();
         textContent.style.display = "none";
         textInput.style.display = "inline-block";
         editButton.classList.add("edit");
      } else {
         textContent.textContent = textInput.value;
         textInput.style.display = "none";
         textContent.style.display = "block";
         editButton.classList.remove("edit");
      }
   }
}
