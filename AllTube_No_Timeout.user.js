// ==UserScript==
// @id          AllTube_No_Timeout@https://github.com/kejn/user-scripts
// @name        AllTube No Timeout
// @namespace   https://github.com/kejn/user-scripts
// @description Pozwala pominąć odliczanie i od razu wyświetla źródła filmów
// @author      kejn
// @homepage    https://github.com/kejn/user-scripts/tree/master
// @homepageURL https://github.com/kejn/user-scripts/tree/master
// @downloadURL https://github.com/kejn/user-scripts/raw/master/AllTube_No_Timeout.user.js
// @updateURL   https://github.com/kejn/user-scripts/raw/master/AllTube_No_Timeout.user.js
// @supportURL  https://github.com/kejn/user-scripts/issues
// @include     http://alltube.tv/*
// @version     1.0.0
// @grant       none
// ==/UserScript==
$(document).ready(function() {
  var wait = $('#please-wait-container');
  if(wait) {
    wait.hide();
    $('#iframe-container').show();
  }
});
