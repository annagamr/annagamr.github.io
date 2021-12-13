
$(document).ready(function () {

    $nav = $('.navbar');
    $toggle = $(".toggle-collapse");

    $toggle.click(function () {
        $nav.toggleClass('collapse');
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        // responsive: responsive
    });
});

$body = $("body");
$sidebar = $(".sidebar")
$navbar = $(".navbar")
$toggleMode = $("#toggleMode");

$toggleMode.click(function () {

    $toggleMode.toggleClass('active')
    $body.toggleClass('active')
    $sidebar.toggleClass('active')
    $navbar.toggleClass('active')

});
