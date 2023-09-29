const modalWindow = document.querySelector('.modal-window');
const closeBtn = document.querySelector('.modal-window__close');
const overlay = document.querySelector('.overlay');
const titleBlock = document.querySelector('.first-section');
const secondBlock = document.querySelector('.block-swipe');


function closeModal() {
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
};

function hideTitle() {
    titleBlock.classList.toggle('hidden');
}

function swipeBlocks() {
    secondBlock.classList.toggle('first-block');
}

