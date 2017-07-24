// ==UserScript==
// @id           Packtpub_Navigate_To_Free_Book@https://github.com/kejn/user-scripts
// @name         Navigate to free books @packtpub.com
// @namespace    https://github.com/kejn/user-scripts
// @version      1.0.0
// @description  Navigates to the daily free book page
// @author       kejn
// @homepage     https://github.com/kejn/user-scripts/tree/master
// @homepageURL  https://github.com/kejn/user-scripts/tree/master
// @downloadURL  https://github.com/kejn/user-scripts/raw/master/Packtpub_Navigate_To_Free_Book.user.js
// @updateURL    https://github.com/kejn/user-scripts/raw/master/Packtpub_Navigate_To_Free_Book.user.js
// @supportURL   https://github.com/kejn/user-scripts/issues
// @include      https://www.packtpub.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var links = $('.hero-blocks').first().find('a');
    for(var i=0; i < links.length; ++i) {
        if(links[i].href && links[i].href.indexOf('free-learning') >= 0) {
            window.location.href = links[i].href;
            break;
        }
    }
})();
