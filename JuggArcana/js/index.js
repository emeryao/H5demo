"use strict";
$(document).ready(() => {
    let duration = 200;
    $('#left-detect').on('mouseenter', () => {
        $('#right-content').removeClass('show-index');
        $('#mid-line').addClass('hide');
        $('#left-content').addClass('show-index');
        $('#left-content').addClass('show');
    });
    $('#left-detect').on('mouseleave', () => {
        $('#left-content').removeClass('show');
        setTimeout(() => {
            $('#left-content').removeClass('show-index');
        }, duration);
        $('#mid-line').removeClass('hide');
    });
    $('#right-detect').on('mouseenter', () => {
        $('#left-content').removeClass('show-index');
        $('#mid-line').addClass('hide');
        $('#right-content').addClass('show-index');
        $('#right-content').addClass('show');
    });
    $('#right-detect').on('mouseleave', () => {
        $('#right-content').removeClass('show');
        setTimeout(() => {
            $('#right-content').removeClass('show-index');
        }, duration);
        $('#mid-line').removeClass('hide');
    });
});