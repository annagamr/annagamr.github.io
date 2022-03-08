const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}
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
        responsive: responsive
    });
});

$body = $("body");
$sidebar = $(".sidebar")
$navbar = $(".navbar")
$toggleMode = $("#toggleMode")
$a = $("a[target!='_blank']")
$current = $(".current")
$footer = $(".footer")
$social = $(".social i")
$footerh2 = $(".footer h2")
$move_up = $(".move-up span")
$blog = $(".blog")
$site_title = $(".site-title")


$toggleMode.click(function () {

    $toggleMode.toggleClass('active')
    $body.toggleClass('active')
    $sidebar.toggleClass('active')
    $navbar.toggleClass('active')
    $a.toggleClass('active')
    $current.toggleClass('active')
    $social.toggleClass('active')
    $footer.toggleClass('active')
    $footerh2.toggleClass('active')
    $move_up.toggleClass('active')
    $blog.toggleClass('active')
    $site_title.toggleClass('active')
});
