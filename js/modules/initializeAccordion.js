// accordion.js
export function initializeAccordion() {
   const handleAccordionItem = (item) => {
      item.classList.toggle("active");
   };

   const accordionItems = document.querySelectorAll(".accordion-item");
   accordionItems.forEach((item) => {
      const toggleButton = item.querySelector(".accordion-item-toggle");
      toggleButton.addEventListener("click", () => handleAccordionItem(item));
   });
}
