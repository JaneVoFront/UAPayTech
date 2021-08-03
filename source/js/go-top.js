(function() {
    'use strict';

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('.btn-go-top--show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('.btn-go-top--show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    var goTopBtn = document.querySelector('.btn-go-top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();
/* end begin Back to Top button  */