let slickConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !1
};

function animationToSection(o) {
    $("html, body").animate({
        scrollTop: $(o).offset().top
    }, 5)
}
window.innerWidth < 992 && (slickConfig.slidesToShow = 1), $(".slider").slick(slickConfig), $("#nav_home").click(function() {
    animationToSection("#home")
}), $("#nav_projects").click(function() {
    animationToSection("#projects")
}), $("#nav_contact").click(function() {
    animationToSection("#contact")
}), $("#nav_blog").click(function() {
    animationToSection("#contact")
}), $(window).scroll(pageScroll);
let topScrollButton = $("#scroll-to-top");

function pageScroll() {
    window.scrollY > 50 && !topScrollButton.hasClass("show") ? topScrollButton.addClass("show") : window.scrollY < 50 && topScrollButton.hasClass("show") && topScrollButton.removeClass("show");
    let o = $("#header").height();
    window.scrollY >= $("#projects").offset().top - o && window.scrollY <= $("#contact").offset().top - o ? $("#header").addClass("projects-header") : $("#header").hasClass("projects-header") && $("#header").removeClass("projects-header"), window.scrollY >= $("#contact").offset().top - o ? $("#header").addClass("contacts-header") : $("#header").hasClass("contacts-header") && $("#header").removeClass("contacts-header")
}

function scrollToTop() {
    window.scroll(0, 0)
}
pageScroll();