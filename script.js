'use strict';
const btnsShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  //   console.log(btnsShowModal[i].textContent);
  btnsShowModal[i].addEventListener('click', showModal);
}

btnCloseModal.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

//Keyboard key clicking
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('closing model');
    hideModal();
  }
});
