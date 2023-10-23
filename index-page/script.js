// ABRO BOTON INFORMACION DISCLAIMER

const btnInfo1 = document.getElementById('btn__info-1');
const textInfo1 = document.getElementById('text__Info1');
btnInfo1.addEventListener('click', clickBtnInfo1);

function clickBtnInfo1() {
  textInfo1.classList.toggle("hidden");
  btnInfo1.classList.toggle("!bg-red-600");
  btnInfo1.classList.toggle("childrenRotated");
}




