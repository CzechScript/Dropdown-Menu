const toggleMenu =document.querySelector('.menu');
const profile = document.querySelector('.profile');

profile.onclick = function(){
    toggleMenu.classList.toggle('active');
}
