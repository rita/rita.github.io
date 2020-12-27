$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('#navBar').addClass('shadow-sm','p-3','mb-5','bg-white','rounded');
    } else {
        $('#navBar').removeClass('shadow-sm','p-3','mb-5','bg-white','rounded');
    }
});
