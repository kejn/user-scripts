// ==UserScript==
// @name         Planete+ Downloader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Pozwala oglądać bez reklam materiały na planeteplus.pl
// @author       kejn
// @match        https://www.planeteplus.pl/*
// @grant        none
// ==/UserScript==

(function() {
    var player = $('.videoPlayer');
    if (player) {
        var url = player.attr('data-src');
        $('.planeteplus-belka-content').first()
            .append($('<a>')
                    .attr({'href': url})
                    .css(
            {
                'font-weight': 'bold',
                'font-size': '1rem',
                'text-decoration': 'none',
                'color': 'orange',
                'background-color': 'white',
                'border': '1px solid white',
                'border-radius': '3px',
                'padding': '0 1em'
            }
        ).text('Pobierz film'));
        console.log('Pobierz film: ' + url);
    } else {
        console.log('Brak filmu na stronie');
    }
})();
