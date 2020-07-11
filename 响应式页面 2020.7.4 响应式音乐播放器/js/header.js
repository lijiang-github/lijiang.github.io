// header
$(function () {
    const navbar = $(".navbar");
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            navbar.css({ 'boxShadow': "rgba(0,0,0,.3) 0 3px 10px" });
        } else {
            navbar.css({ 'boxShadow': 'none' })
        }
    })

})