let button = document.querySelector('#button');
let modal = document.querySelector('#modal');
let colose = document.querySelector('#close');

button.addEventListener('click', function(){
    modal.classList.add('modal_active');
});

modal.addEventListener('click', function(){
    modal.classList.remove
    ('modal_active');
});

