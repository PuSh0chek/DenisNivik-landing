"use strict";

const burger = document.querySelector('.mobile-elements__wrapper-burger');
const burgerElementUp = document.querySelector('.mobile-elements__burger-up');
const burgerElementMiddle = document.querySelector('.mobile-elements__burger-middle');
const burgerElementDown = document.querySelector('.mobile-elements__burger-down');
const popUp = document.querySelector('.mobile-elements__pop-up');
const main = document.querySelector('.main');
const linkPopUpHome = document.querySelector('.mobile-elements__link-home');
const linkPopUpAboutMe = document.querySelector('.mobile-elements__link-about-me');
const linkPopUpSkils = document.querySelector('.mobile-elements__link-skils');
const linkPopUpPortfolio = document.querySelector('.mobile-elements__link-portfolio');
const linkPopUpContacts = document.querySelector('.mobile-elements__link-contacts');
let indexPopUp = 0;
burger.addEventListener('click', () => {
  if (indexPopUp === 0) {
    popUp.style = 'display: flex; align-items: flex-start; flex-direction: column; padding: 27px 0 0 28px';
    main.style = 'position: fixed';
    indexPopUp++;
    console.log('flex');
  } else if (indexPopUp === 1) {
    popUp.style = 'display: none';
    main.style = 'position: static';
    indexPopUp--;
    console.log('none');
  }

  if (indexPopUp === 1) {
    burgerElementUp.style = 'position:absolute;transform:rotate(45deg);color:#828282;';
    burgerElementMiddle.style = 'display:none;';
    burgerElementDown.style = 'position:absolute;transform:rotate(-47deg);color:#828282;';
  } else if (indexPopUp === 0) {
    burgerElementUp.style = 'transform: rotate(0deg);color:black;';
    burgerElementMiddle.style = 'display: block;';
    burgerElementDown.style = 'transform: rotate(0deg);color:black;';
  }
});
linkPopUpHome.addEventListener('click', () => {
  burgerElementUp.style = 'transform: rotate(0deg);color:black;';
  burgerElementMiddle.style = 'display: block;';
  burgerElementDown.style = 'transform: rotate(0deg);color:black;';
  popUp.style = 'display: none';
  main.style = 'position: static';
  indexPopUp--;
  window.addEventListener('scroll', () => {
    document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
  });
  console.log('none');
});
linkPopUpAboutMe.addEventListener('click', () => {
  burgerElementUp.style = 'transform: rotate(0deg);color:black;';
  burgerElementMiddle.style = 'display: block;';
  burgerElementDown.style = 'transform: rotate(0deg);color:black;';
  popUp.style = 'display: none';
  main.style = 'position: static';
  indexPopUp--;
  window.addEventListener('scroll', () => {
    document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
  });
  console.log('none');
});
linkPopUpPortfolio.addEventListener('click', () => {
  burgerElementUp.style = 'transform: rotate(0deg);color:black;';
  burgerElementMiddle.style = 'display: block;';
  burgerElementDown.style = 'transform: rotate(0deg);color:black;';
  popUp.style = 'display: none';
  main.style = 'position: static';
  indexPopUp--;
  window.addEventListener('scroll', () => {
    document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
  });
  console.log('none');
});
linkPopUpHome.addEventListener('click', () => {
  burgerElementUp.style = 'transform: rotate(0deg);color:black;';
  burgerElementMiddle.style = 'display: block;';
  burgerElementDown.style = 'transform: rotate(0deg);color:black;';
  popUp.style = 'display: none';
  main.style = 'position: static';
  indexPopUp--;
  window.addEventListener('scroll', () => {
    document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
  });
  console.log('none');
});
linkPopUpContacts.addEventListener('click', () => {
  burgerElementUp.style = 'transform: rotate(0deg);color:black;';
  burgerElementMiddle.style = 'display: block;';
  burgerElementDown.style = 'transform: rotate(0deg);color:black;';
  popUp.style = 'display: none';
  main.style = 'position: static';
  indexPopUp--;
  window.addEventListener('scroll', () => {
    document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
  });
  console.log('none');
});