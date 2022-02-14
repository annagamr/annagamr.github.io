
$(document).ready(function () {

    $nav = $('.navbar');
    $toggle = $(".toggle-collapse");

    $toggle.click(function () {
        $nav.toggleClass('collapse');
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav:true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],

    });
});

$body = $("body");
$sidebar = $(".sidebar")
$navbar = $(".navbar")
$toggleMode = $("#toggleMode")
$a = $("a[target!='_blank']")
$current=$(".current")
$social=$(".social i")


$toggleMode.click(function () {

    $toggleMode.toggleClass('active')
    $body.toggleClass('active')
    $sidebar.toggleClass('active')
    $navbar.toggleClass('active')
    $a.toggleClass('active')
    $current.toggleClass('active')
    $social.toggleClass('active')

    
});
