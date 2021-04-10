//Адаптивное меню
const menuIcon = document.querySelector('.menu-burger');
const menuHeader = document.querySelector('.menu');

if(menuIcon){    
    menuIcon.addEventListener('click', function (e){
        document.body.classList.toggle('lock'); //при открытом меню не скролится страничка
        menuIcon.classList.toggle('active');
        menuHeader.classList.toggle('active');
    });
};

// Переход по меню
const menuLinks = document.querySelectorAll('.nav-link[data-goto]');

if(menuLinks.length>0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    });

    function onMenuLinkClick(e){
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            if(menuIcon.classList.contains('active')){
                document.body.classList.remove('lock'); //при открытом меню не скролится страничка
                menuIcon.classList.remove('active');
                menuHeader.classList.remove('active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })
            e.preventDefault();
        }
    }
}