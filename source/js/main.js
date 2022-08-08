const burger = document.querySelector('.navigation__wrapper-burger');
const popUp = document.querySelector('.navigation__pop-up');
const htmlDocument = document.querySelector('.main');
let indexPopUp = 0;

burger.addEventListener('click', () => {
  if(indexPopUp === 0) {
    popUp.style = 'display: flex';
    htmlDocument.style = 'position: fixed';
    indexPopUp++;
    console.log('flex');
  } else if (indexPopUp === 1) {
    popUp.style = 'display: none';
    htmlDocument.style = 'position: static';
    indexPopUp--;
    console.log('none');
  }
});
