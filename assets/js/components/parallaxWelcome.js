$('.page--welcome').mousemove(function (e) {
    let moveX = (e.pageX * -1 / 1000);
    let moveY = (e.pageY * -8 / 1000);

    $(this).css('background-position', moveX + 'px ' + moveY + 'px');
});