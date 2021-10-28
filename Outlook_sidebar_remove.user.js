// ==UserScript==
// @name         Outlook sidebar remove
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       kejn
// @match        https://outlook.live.com/mail*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var remover = (selector, interval) => {
        var elem = document.querySelector(selector);
        if (elem) {
            elem.parentElement.parentElement.parentElement.remove();
            clearInterval(interval);
        }
    }
    var sidebar = setInterval(() => {
        remover('i[data-icon-name="OutlookLogo"]', sidebar);
    }, 1000);
    var navbar = setInterval(() => {
        remover('img[src*="premium"]', navbar);
    }, 1000);
    var reklama = setInterval(() => {
        remover('[aria-label="reklama"]', reklama);
    }, 1000);
})();
