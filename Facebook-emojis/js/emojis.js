(function stopAnimationOnHover() {
    $('.emoji').hover(function () {
        $(this).find('*').toggleClass('paused')
    });
}());