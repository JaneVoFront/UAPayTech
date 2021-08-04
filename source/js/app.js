'use strict';
//Tabs
    (function() {
    window.onload = function() {
        let tabs = document.querySelector('.tabs')
        if (tabs  != null) {
            let mitem = tabs.querySelectorAll('.tabs-menu__item')
            let citem = tabs.querySelectorAll('.tabs-content__item')

            function change(arr, i) {
                arr.forEach(item => {
                    item.forEach(i => {
                        i.classList.remove('is-active')
                    })
                    item[i].classList.add('is-active')
                })
            }

            for (let i = 0; i < mitem.length; i++) {
                mitem[i].addEventListener('click', () => {
                    change([mitem, citem], i)
                })
            }
        } else {
            return false;
        }
    };
    //burger
        window.onload = function() {
            document.querySelector('.toggle-menu').addEventListener('click', function () {

                document.body.classList.add('menu-mobile-wrap--show');
                document.querySelector('.menu-mobile-container').classList.remove('slide-right');
            })

            document.querySelector('.btn-close').addEventListener('click', function () {
                window.setTimeout(function () {

                    document.body.classList.remove('menu-mobile-wrap--show');
                }, 300);
                document.querySelector('.menu-mobile-container').classList.add('slide-right');
            });
            document.querySelector('.close-outer').addEventListener('click', function () {
                window.setTimeout(function () {

                    document.body.classList.remove('menu-mobile-wrap--show');
                }, 300);
                document.querySelector('.menu-mobile-container').classList.add('slide-right');
            });

            document.querySelector('.link-more-show').addEventListener('click', function () {
                document.querySelector('.content-text__more').classList.remove('hide', 'fadeInDown', 'fadeInUp');
                document.querySelector('.content-text__more').classList.add('fadeInDown');
                this.setAttribute('style', 'display: none');
            });

            document.querySelector('.link-more-hide').addEventListener('click', function () {
                document.querySelector('.content-text__more').classList.add('hide');
                document.querySelector('.content-text__more').classList.remove('fadeInDown');
                document.querySelector('.content-text__more').classList.add('fadeInUp');
                document.querySelector('.link-more-show').setAttribute('style', 'display: inline-flex');
            });
        };
//Go to top
    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('btn-go-top--show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('btn-go-top--show');
        }
    }

   /* function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }*/
    let goTopBtn = document.querySelector('.btn-go-top');
    window.addEventListener('scroll', trackScroll);
    /*goTopBtn.addEventListener('click', backToTop);*/
})
();

