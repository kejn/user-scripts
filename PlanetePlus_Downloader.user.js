// ==UserScript==
// @id           PlanetePlus_Downloader@https://github.com/kejn/user-scripts
// @name         Planete+ Downloader
// @namespace    https://github.com/kejn/user-scripts
// @version      1.0
// @description  Pozwala na pobieranie lub oglądanie z pominięciem reklam materiałów wideo z serwisu planeteplus.pl
// @author       kejn
// @homepage     https://github.com/kejn/user-scripts/tree/master
// @homepageURL  https://github.com/kejn/user-scripts/tree/master
// @downloadURL  https://github.com/kejn/user-scripts/raw/master/PlanetePlus_Downloader.user.js
// @updateURL    https://github.com/kejn/user-scripts/raw/master/PlanetePlus_Downloader.user.js
// @supportURL   https://github.com/kejn/user-scripts/issues
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
