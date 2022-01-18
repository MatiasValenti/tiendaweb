var AbrirPopup = document.body;
var overlay = document.getElementById('overlay'),
popup = document.getElementById('popup'),
btnClosePopup = document.getElementById('btn-close-popup');


AbrirPopup.onload = cargarPopup();

function cargarPopup() { 
    overlay.classList.add('active')
    popup.classList.add('active')
};

btnClosePopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
} )