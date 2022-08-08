const burger = document.querySelector('.navigation__wrapper-burger');
const popUp = document.querySelector('.navigation__pop-up');
const main = document.querySelector('.main');
const linkPopUp = document.querySelectorAll('.navigation__link');

let indexPopUp = 0;

burger.addEventListener('click', () => {
  if (indexPopUp === 0) {
    popUp.style = 'display: flex; flex-wrap: wrap;';
    main.style = 'position: fixed';
    indexPopUp++;
    console.log('flex');
  } else if (indexPopUp === 1) {
    popUp.style = 'display: none';
    main.style = 'position: static';
    indexPopUp--;
    console.log('none');
  }
});

linkPopUp.addEventListener('click', () => {
  console.log('linkPopUp');
});
