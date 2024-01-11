document.addEventListener("DOMContentLoaded", function () {
   const mobileBtn = document.querySelector(".navigation-bar__mobile-btn");
   const navigationBar = document.querySelector(".navigation-bar");

   mobileBtn.addEventListener("click", () => {
      navigationBar.classList.toggle("active");
   });

   // Handle accordion items
   const handleAccordionItem = (item) => {
      item.classList.toggle("active");
   };

   const accordionItems = document.querySelectorAll(".accordion-item");
   accordionItems.forEach((item) => {
      const toggleButton = item.querySelector(".accordion-item-toggle");
      toggleButton.addEventListener("click", () => handleAccordionItem(item));
   });

   // Handle file input change
   const fileInput = document.getElementById("fileInput");
   const fileList = document.getElementById("fileList");

   if (fileInput && fileList) {
      fileInput.addEventListener("change", () => {
         fileList.innerHTML = "";

         for (const file of fileInput.files) {
            const li = document.createElement("li");
            li.innerHTML = `
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
							<!-- SVG Path -->
						</svg>
					</span>
					<span>${file.name}</span>
					<span class="delete-btn" onclick="deleteFile(this)">
						<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
							<!-- SVG Path -->
						</svg>
					</span>`;
            fileList.appendChild(li);
         }
      });

      // Update file list function
      window.deleteFile = function (btn) {
         const listItem = btn.closest("li");
         listItem.remove();
      };
   }

   // Handle edit button click
   const handleEditButtonClick = (event) => {
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
   };

   // Attach edit button click handlers
   const editButtons = document.querySelectorAll(".edit-button");
   editButtons.forEach((button) => {
      button.addEventListener("click", handleEditButtonClick);
   });

   // Custom select logic
   const handleCustomSelect = (selectBox, event) => {
      const selectedItem = selectBox.querySelector(".selected-item");
      const options = selectBox.querySelector(".options");
      const arrow = selectBox.querySelector(".arrow");

      options.style.display =
         options.style.display === "none" ? "block" : "none";
      arrow.classList.toggle("active");
      selectBox.classList.toggle("active");

      if (event.target.tagName === "LI") {
         options.style.display = "none";
      }
   };

   // Attach custom select event listeners
   const selectBoxes = document.querySelectorAll(".custom-select");
   selectBoxes.forEach((selectBox) => {
      selectBox.addEventListener("click", (event) =>
         handleCustomSelect(selectBox, event)
      );

      selectBox.querySelector(".options").addEventListener("click", (event) => {
         if (event.target.tagName === "LI") {
            selectBox.querySelector(".selected-item").textContent =
               event.target.textContent;
            selectBox.querySelector(".options").style.display = "none";
         }
      });

      document.addEventListener("click", (event) => {
         if (!selectBox.contains(event.target)) {
            selectBox.querySelector(".options").style.display = "none";
         }
      });
   });
});
