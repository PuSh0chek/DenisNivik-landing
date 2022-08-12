const burger = document.querySelector('.mobile-elements__wrapper-burger');
const burgerElementUp = document.querySelector('.mobile-elements__burger-up');
const burgerElementMiddle = document.querySelector('.mobile-elements__burger-middle');
const burgerElementDown = document.querySelector('.mobile-elements__burger-down');
const popUp = document.querySelector('.mobile-elements__pop-up');
const main = document.querySelector('.main');
const linkPopUp = document.querySelectorAll('.mobile-elements__link');

let indexPopUp = 0;

burger.addEventListener('click', () => {
  if (indexPopUp === 0) {
    popUp.style = 'display: flex; align-items: flex-start; flex-direction: column; padding: 27px 0 0 28px';
    indexPopUp++;
  } else if (indexPopUp === 1) {
    popUp.style = 'display: none';
    indexPopUp--;
  };
  if (indexPopUp === 1) {
    burger.style = 'position: fixed;';
    burgerElementUp.style = 'position:absolute;transform:rotate(45deg);color:#828282;';
    burgerElementMiddle.style = 'display:none;';
    burgerElementDown.style = 'position:absolute;transform:rotate(-47deg);color:#828282;';
  } else if (indexPopUp === 0) {
    burger.style = 'position: static; height: 27px; width: 41px; z-index: 2; position: absolute;';
    burgerElementUp.style = 'transform: rotate(0deg);color:black;';
    burgerElementMiddle.style = 'display: block;';
    burgerElementDown.style = 'transform: rotate(0deg);color:black;';
  }
});

linkPopUp.addEventListener('click', () => {
  burgerElementUp.style = 'transform: rotate(0deg);color:black;';
  burgerElementMiddle.style = 'display: block;';
  burgerElementDown.style = 'transform: rotate(0deg);color:black;';
  popUp.style = 'display: none';
  indexPopUp--;
  window.addEventListener('scroll', () => {
    document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
  });
});

main.addEventListener('click', () => {
  burgerElementUp.style = 'transform: rotate(0deg);color:black;';
  burgerElementMiddle.style = 'display: block;';
  burgerElementDown.style = 'transform: rotate(0deg);color:black;';
  popUp.style = 'display: none';
  indexPopUp--;
});
