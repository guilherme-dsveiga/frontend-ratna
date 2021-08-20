const menu = document.getElementById('menu');
const block = document.getElementById('block');

function  openMenu(){
        menu.style.display = 'none'; 
        block.style.display = 'block'; 
}

function closeMenu (){
        menu.style.display = 'block'; 
        block.style.display = 'none'; 
}