const modalWindow = document.querySelector('.modal-window');
const closeBtn = document.querySelector('.modal-window__close');
const overlay = document.querySelector('.overlay');
const titleBlock = document.querySelector('.first-section');
const secondSection = document.querySelector('.second-section');


function closeModal() {
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
};

function hideTitle() {
    titleBlock.classList.toggle('hidden');
}

function swipeBlocks() {
    let blocks = document.querySelectorAll('.block-swipe');
    secondSection.insertBefore(blocks[1], blocks[0]);
};

