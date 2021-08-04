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
            // document.querySelector('.toggle-menu').addEventListener('click', function () {
            //     document.querySelector('.menu-mobile-wrap').classList.add('show-to-left', 'show');
            //     document.body.classList.add('menu-mobile-wrap--show');
            //     document.querySelector('.menu-mobile-container').classList.remove('slide-right');
            // })
            //
            //     document.querySelector('.btn-close').addEventListener('click', function () {
            //         window.setTimeout(function(){
            //             document.querySelector('.menu-mobile-wrap').classList.remove('show-to-left', 'show');
            //             document.body.classList.remove('menu-mobile-wrap--show');
            //     }, 500);
            //             document.querySelector('.menu-mobile-container').classList.add('slide-right');
            //     });
            //     document.querySelector('.close-outer').addEventListener('click', function () {
            //         window.setTimeout(function(){
            //             document.querySelector('.menu-mobile-wrap').classList.remove('show-to-left', 'show');
            //             document.body.classList.remove('menu-mobile-wrap--show');
            //     },500);
            // });


            document.querySelector('.toggle-menu').addEventListener('click', function(){
                document.body.classList.add('menu-mobile-wrap--show');
                document.querySelector('.menu-mobile-container').classList.remove('slide-right');
            });
            document.querySelector('.btn-close').addEventListener('click', function () {
                document.body.classList.remove('menu-mobile-wrap--show');
                document.querySelector('.menu-mobile-container').classList.add('slide-right');
            });
            document.querySelector('.close-outer').addEventListener('click', function () {
                document.body.classList.remove('menu-mobile-wrap--show');
                document.querySelector('.menu-mobile-container').classList.add('slide-right');
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
// Burger Menu
 //function(){
 //   $(".toggle-menu").on("click", function(){
 //       $('body').addClass('right_toggle_open');
 //   });
 //   $(".toggle_close").on("click", function(){
 //       $('body').removeClass('right_toggle_open');
 //   });
 //   $(".outer_close").on("click", function(){
 //       $('body').removeClass('right_toggle_open');
 //   });
//}