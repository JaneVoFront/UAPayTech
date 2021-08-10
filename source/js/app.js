'use strict';
//Tabs
        window.onload = function ()
        {
            let tabs = document.querySelector('.tabs')
            if (tabs != null) {
                let mitem = tabs.querySelectorAll('.tabs-menu__item')
                let citem = tabs.querySelectorAll('.tabs-content__item')

                function change(arr, i) {
                    arr.forEach(item =>
                    {
                        item.forEach(i =>
                        {
                            i.classList.remove('is-active')
                        })
                        item[i].classList.add('is-active')
                    })
                }

                for (let i = 0; i < mitem.length; i++) {
                    mitem[i].addEventListener('click', () =>
                    {
                        change([mitem, citem], i)
                    })
                }
            } else {
                return false;
            }
        };
//Burger

        document.querySelector('.toggle-menu').addEventListener('click', function ()
        {

            document.body.classList.add('menu-mobile-wrap--show');
            document.querySelector('.menu-mobile-container').classList.remove('slide-right');
        })

        document.querySelector('.btn-close').addEventListener('click', function ()
        {
            window.setTimeout(function ()
            {

                document.body.classList.remove('menu-mobile-wrap--show');
            }, 300);
            document.querySelector('.menu-mobile-container').classList.add('slide-right');
        });
        document.querySelector('.close-outer').addEventListener('click', function ()
        {
            window.setTimeout(function ()
            {

                document.body.classList.remove('menu-mobile-wrap--show');
            }, 300);
            document.querySelector('.menu-mobile-container').classList.add('slide-right');
        })

// Подробнее/Скрыть
let moreShow = document.querySelector('.link-more-show')
    moreShow.addEventListener('click', function ()
        {
            let moreContent = document.querySelector('.content-text__more')
            moreContent.classList.add('slideShow');
            this.setAttribute('style', 'display: none');
        });
let moreHide =  document.querySelector('.link-more-hide')
    moreHide.addEventListener('click', function ()
        {
            let moreContent = document.querySelector('.content-text__more')
            moreContent.classList.remove('slideShow');
            //moreContent.classList.add('slideHide');
           // window.setTimeout(function ()
           // {
               // moreContent.classList.add('fadeInUp');
           // }, 400);
            moreShow.setAttribute('style', 'display: inline-flex');
        });

// Спойлер
window.addEventListener('resize', function () {
    var elements = document.querySelectorAll('.opportunity-item__discription');
    if (window.innerWidth <= 768) {
        // 0...768
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add('hide-content');
        }
    }
     else {
        // 769...Inf
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('hide-content');
        }
    }
});
var elements = document.querySelectorAll('.link_show-content');
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function(){
        this.querySelector('.hide-content').classList.toggle('show-content');
        this.querySelector('.opportunity-item__title').classList.toggle('active');
    };
}
// Go to top
window.onload = function()
{
    function trackScroll() {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;

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
    let goTopBtn = document.querySelector('.btn-go-top')
    window.addEventListener('scroll', trackScroll)
    /*goTopBtn.addEventListener('click', backToTop);*/
}

