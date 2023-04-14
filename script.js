'use strict';
const modal = document.querySelector('.modal'); //dot is only for the selector.
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

const openModel = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden'); //The classList property returns the CSS classnames of an element.
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener('click', openModel);

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModel.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  //activate as soon as well press the key.global event
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
