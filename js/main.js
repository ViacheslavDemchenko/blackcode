(function() {
    const hamburger = document.getElementById('menu__button');
    const menu = document.querySelector('.nav-list');
    const menuLinks = document.querySelectorAll('.nav__link');
    const body = document.getElementsByTagName('body')[0];
    const logoText = document.querySelector('.logo__link');
    const social = document.querySelector('.social-list');
    const mobileBtn = document.querySelector('.mobile-menu__btn');
    let screenWidth = window.screen.availWidth;


    hamburger.addEventListener('click', mobileMenu);

    function mobileMenu() {

        window.addEventListener('resize', () => {
            screenWidth = window.screen.availWidth;
            if (screenWidth > 1024) {
                menuLinks.forEach(link => {
                    link.style.opacity = '1';
                });
                hamburger.classList.remove('active');
                menu.classList.remove('nav-list--open');
                body.classList.remove('no-scroll');
            } else {
                menuLinks.forEach(link => {
                    link.style.opacity = '0';
                });
            }
        });

        if(!hamburger.classList.contains('active')) {
            showMenuLinks();
            hamburger.classList.add('active');
            menu.classList.add('nav-list--open');
            body.classList.add('no-scroll');
            logoText.classList.add('logo__link--mobile-open');
            mobileBtn.classList.add('mobile-menu__btn--animate');
            social.classList.add('social-list--animate');
        } else {
            menuLinks.forEach(link => {
                link.style.opacity = '0';
            });
            hamburger.classList.remove('active');
            menu.classList.remove('nav-list--open');
            body.classList.remove('no-scroll');
            logoText.classList.remove('logo__link--mobile-open');
            mobileBtn.classList.remove('mobile-menu__btn--animate');
            social.classList.remove('social-list--animate');
        }

        function showMenuLinks() {  
            setTimeout( () => {
                function menuLinksShow() {
                    for (let i = 0; i < menuLinks.length; i++) {
                        setTimeout( () => {
                            menuLinks[i].style.opacity = '1';
                        }, 150*i);
                    }
                }
                menuLinksShow(); 
            }, 500);
        }
    }
})();
