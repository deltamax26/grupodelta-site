document.querySelector('.dropdown').addEventListener('click', function(){
const menu = this.querySelector('.dropdown-menu');

if(menu.style.display === 'flex'){
menu.style.display='none';
}else{
menu.style.display='flex';
}

});
