let elSiteForm = document.querySelector(".form");
let elFormInput = elSiteForm.querySelector(".form__input");
let elFormRain = elSiteForm.querySelector(".form-rain");
let elFormField = elSiteForm.querySelector(".form__field");

MAXLEVEL = +40;
MINLEVEL = +10;

elSiteForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let inputValue = Number(elFormInput.value);
  let rainCheck = elFormRain.checked;
  let fialdCheck = elFormField.checked;

  if (isNaN(inputValue)) {
      alert("Hechnima aniqlanmadi. Havo haroratini kirgizing!")
     } else if (fialdCheck) {
       alert("Siz suport zalimizda yugursangiz bo'ladi");
       return;
     } else if(rainCheck ) {
       alert("Afsuski siz yomg'ir sababli yugurolmaysiz!");
       return;
     } else if(inputValue > MAXLEVEL || inputValue < MINLEVEL){
       alert("Afsuzki siz yugurolmaysiz!");
       return;
     } else if(inputValue <= MAXLEVEL || inputValue >= MINLEVEL) {
       alert("Siz yugursangiz bo'ladi!");
       return;
     } 
  }) 
