const icono = document.querySelector('.icono');
const popup = document.getElementById('popup');
const close = document.getElementById('close');

icono.addEventListener('click', function() {
    popup.style.display = 'flex';
});

close.addEventListener('click', function() {
    popup.style.display = 'none';
});
