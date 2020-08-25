// ==UserScript==
// @name         Outlook sidebar remove
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       kejn
// @match        https://outlook.live.com/mail/**/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
       document.querySelector('i[data-icon-name="OutlookLogo"]').parentElement.parentElement.parentElement.remove();
    }, 4000);
})();
