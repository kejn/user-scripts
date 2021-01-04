// ==UserScript==
// @name         Outlook sidebar remove
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       kejn
// @match        https://outlook.live.com/mail*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var tryme = setInterval(function(){
        var elem = document.querySelector('i[data-icon-name="OutlookLogo"]');
        if (elem) {
            elem.parentElement.parentElement.parentElement.remove();
            clearInterval(tryme);
        }
        console.log('see this?');
    }, 1000);
})();
