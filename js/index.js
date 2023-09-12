const btn = document.querySelector('#menu_btn i');

const mobileNav = document.getElementById('menu');

function showMobileMenu(){
    mobileNav.classList.toggle('flex');
    mobileNav.classList.toggle('hidden');


    isOpen = mobileNav.classList.contains('flex');


    if (isOpen){
        btn.classList = 'fa-solid fa-xmark';
    } else{
        btn.classList = 'fa-solid fa-bars';
    }
}

btn.addEventListener('click', showMobileMenu);

