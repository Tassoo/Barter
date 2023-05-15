const dropdownMenu = document.querySelector('.dropdown');
const openBtn = document.querySelector('.category');
const closeBtn = document.querySelector('.angles-down');

openBtn.addEventListener('click', function () {
    dropdownMenu.style.opacity = '0';
    dropdownMenu.classList.toggle('shown');
    setTimeout(function () {
        dropdownMenu.style.opacity = '1';
    }, 10);
});

closeBtn.addEventListener('click', function () {
    dropdownMenu.classList.remove('shown');
});