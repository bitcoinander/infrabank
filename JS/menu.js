window.onload = function(e) {
    var offset = document.getElementsByClassName('navbar-container')[0].offsetTop;
    var menu = document.getElementsByClassName('navbar-container')[0];

    document.addEventListener('scroll', function() {
        if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
            menu.style.position = 'fixed';
        } else {
            menu.style.position = 'initial';
        }
    });
}