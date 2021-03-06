const openModalBtn = document.querySelector(
    'button[data-action = "open-modal"]'
);
const closeModalBtn = document.querySelector(
    'button[data-action = "close-modal"]'
);
const backDropRef = document.querySelector('.js-backdrop');

openModalBtn.addEventListener('click', () => {
    document.body.classList.add('show-modal');
});
closeModalBtn.addEventListener('click', () => {
    document.body.classList.remove('show-modal');
});
backDropRef.addEventListener('click', e => {
    console.log(e);
});