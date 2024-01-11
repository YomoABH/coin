// fileInput.js
export function initializeFileInput() {
   const fileInput = document.getElementById("fileInput");
   const fileList = document.getElementById("fileList");

   if (fileInput && fileList) {
      fileInput.addEventListener("change", handleFileInputChange);

      window.deleteFile = function (btn) {
         const listItem = btn.closest("li");
         listItem.remove();
      };
   }

   function handleFileInputChange() {
      fileList.innerHTML = "";

      for (const file of fileInput.files) {
         const li = document.createElement("li");
         li.innerHTML = `
         <span>
         <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16"    viewBox="0 0 12 16" fill="none">
         <path d="M10.7371 4.94259V4.94244C10.7371 4.93105 10.7349 4.91977 10.7305 4.90924C10.7262 4.89871 10.7198 4.88914 10.7118 4.88108L7.76923 1.93856L10.7371 4.94259ZM10.7371 4.94259V13.3331C10.7367 13.5329 10.6573 13.7243 10.516 13.8656C10.3748 14.0068 10.1833 14.0863 9.9836 14.0866H1.98385C1.78412 14.0863 1.59266 14.0068 1.45143 13.8656C1.31021 13.7243 1.23073 13.5329 1.23039 13.3332C1.23039 13.3332 1.23039 13.3331 1.23039 13.3331V2.66671C1.23039 2.66669 1.23039 2.66666 1.23039 2.66664C1.23073 2.46693 1.31021 2.2755 1.45143 2.13429C1.59264 1.99307 1.78407 1.91359 1.98378 1.91325C1.9838 1.91325 1.98383 1.91325 1.98385 1.91325L7.70772 1.91325L7.70787 1.91325M10.7371 4.94259L7.70787 1.91325M7.70787 1.91325C7.71926 1.91323 7.73054 1.91546 7.74107 1.9198C7.75156 1.92413 7.76111 1.93048 7.76916 1.93849L7.70787 1.91325ZM11.3369 14.6865L11.337 14.6864C11.6953 14.3275 11.8971 13.8405 11.8971 13.3333V4.94259C11.8971 4.61206 11.766 4.29499 11.5315 4.06126L8.58905 1.11877C8.35532 0.884331 8.03825 0.753252 7.70772 0.753252L1.98372 0.753252L1.98369 0.753252C1.47629 0.753465 0.989683 0.954864 0.630544 1.31329L0.630434 1.31341C0.272155 1.67238 0.0703906 2.15936 0.0703906 2.66659L0.0703906 13.3333L0.0703906 13.3333C0.0706037 13.8407 0.272003 14.3273 0.630433 14.6864L0.630544 14.6865C0.989518 15.0448 1.4765 15.2466 1.98372 15.2466H9.98372H9.98376C10.4912 15.2464 10.9778 15.045 11.3369 14.6865Z" fill="#050731" stroke="#050731" stroke-width="0.16"/>
<path d="M7.57393 1.25638C7.46516 1.36515 7.40405 1.51268 7.40405 1.6665V3.99984C7.40405 4.33047 7.53539 4.64757 7.76919 4.88136C8.00299 5.11516 8.32008 5.2465 8.65072 5.2465H10.984C11.1379 5.2465 11.2854 5.1854 11.3942 5.07663C11.5029 4.96785 11.564 4.82033 11.564 4.6665C11.564 4.51268 11.5029 4.36515 11.3942 4.25638C11.2854 4.14761 11.1379 4.0865 10.984 4.0865H8.65072C8.6029 4.0865 8.56405 4.04765 8.56405 3.99984V1.6665C8.56405 1.51268 8.50294 1.36515 8.39417 1.25638C8.2854 1.14761 8.13788 1.0865 7.98405 1.0865C7.83022 1.0865 7.6827 1.14761 7.57393 1.25638ZM2.90726 7.40996C3.01603 7.51873 3.16356 7.57984 3.31738 7.57984H8.65072C8.80454 7.57984 8.95207 7.51873 9.06084 7.40996C9.16961 7.30119 9.23072 7.15366 9.23072 6.99984C9.23072 6.84601 9.16961 6.69849 9.06084 6.58972C8.95207 6.48094 8.80454 6.41984 8.65072 6.41984H3.31738C3.16356 6.41984 3.01603 6.48094 2.90726 6.58972C2.79849 6.69849 2.73738 6.84601 2.73738 6.99984C2.73738 7.15366 2.79849 7.30119 2.90726 7.40996ZM2.90726 9.74329C3.01603 9.85206 3.16356 9.91317 3.31738 9.91317H8.65072C8.80454 9.91317 8.95207 9.85206 9.06084 9.74329C9.16961 9.63452 9.23072 9.487 9.23072 9.33317C9.23072 9.17935 9.16961 9.03182 9.06084 8.92305C8.95207 8.81428 8.80454 8.75317 8.65072 8.75317H3.31738C3.16356 8.75317 3.01603 8.81428 2.90726 8.92305C2.79849 9.03182 2.73738 9.17935 2.73738 9.33317C2.73738 9.487 2.79849 9.63452 2.90726 9.74329ZM2.90726 12.0766C3.01603 12.1854 3.16356 12.2465 3.31738 12.2465H6.31738C6.47121 12.2465 6.61873 12.1854 6.7275 12.0766C6.83628 11.9679 6.89738 11.8203 6.89738 11.6665C6.89738 11.5127 6.83628 11.3652 6.7275 11.2564C6.61873 11.1476 6.47121 11.0865 6.31738 11.0865H3.31738C3.16356 11.0865 3.01603 11.1476 2.90726 11.2564C2.79849 11.3652 2.73738 11.5127 2.73738 11.6665C2.73738 11.8203 2.79849 11.9679 2.90726 12.0766Z" fill="#050731" stroke="#050731" stroke-width="0.16"/>
</svg>
         </span>
         <span>${file.name}</span>
         <span class="delete-btn" onclick="deleteFile(this)">
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
         <path d="M7.40002 22.7335H17.1501C18.2933 22.7335 19.2201 21.8068 19.2201 20.6635V8.10853H20.0751C20.6799 8.10853 21.1701 7.61828 21.1701 7.01353C21.1701 6.40877 20.6799 5.91853 20.0751 5.91853H17.2701V5.06353C17.2701 3.9203 16.3433 2.99353 15.2001 2.99353H9.35004C8.2068 2.99353 7.28002 3.9203 7.28002 5.06353V5.91853H4.475C3.87025 5.91853 3.38 6.40877 3.38 7.01353C3.38 7.61828 3.87025 8.10853 4.475 8.10853H5.33001V20.6635C5.33001 21.8068 6.25679 22.7335 7.40002 22.7335ZM17.0301 20.5435H7.52002V8.10853H17.0301V20.5435ZM15.0801 5.91853H9.47004V5.18353H15.0801V5.91853Z" fill="#B1C7FF" stroke="#B1C7FF" stroke-width="0.24"/>
         </svg>         </span>`;
         fileList.appendChild(li);
      }
   }
}