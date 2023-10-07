const modalWindow = document.querySelector('.modal-window');
const closeBtn = document.querySelector('.modal-window__close');
const overlay = document.querySelector('.overlay');
const titleBlock = document.querySelector('.first-section');
const secondBlock = document.querySelector('.block-swipe');
const btn1 = document.querySelector('.btn-warning');
const btn2 = document.querySelector('.btn-success');

function closeModal() {
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
};

btn1.addEventListener('click', () => titleBlock.classList.toggle('hidden'));

btn2.addEventListener('click', () => secondBlock.classList.toggle('first-block'))

overlay.addEventListener('click', closeModal);

closeBtn.addEventListener('click', closeModal);

