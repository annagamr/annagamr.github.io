
$(document).ready(function () {

    $nav = $('.navbar');
    $toggle = $(".toggle-collapse");

    $toggle.click(function () {
        $nav.toggleClass('collapse');
    })

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
