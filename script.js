document.querySelector('.dropdown').addEventListener('click', function(){

    const menu = this.querySelector('.submenu');

    if(menu.style.display === 'block'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }

});
