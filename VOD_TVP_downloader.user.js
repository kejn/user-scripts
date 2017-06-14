// ==UserScript==
// @id          VOD_TVP_downloader@https://github.com/kejn/user-scripts
// @name        VOD TVP downloader
// @namespace   https://github.com/kejn/user-scripts
// @description Pozwala na pobieranie lub oglądanie z pominięciem reklam materiałów wideo z serwisu vod.tvp.pl
// @author      kejn
// @homepage    https://github.com/kejn/user-scripts/tree/master
// @homepageURL https://github.com/kejn/user-scripts/tree/master
// @downloadURL https://github.com/kejn/user-scripts/raw/master/VOD_TVP_downloader.user.js
// @updateURL   https://github.com/kejn/user-scripts/raw/master/VOD_TVP_downloader.user.js
// @supportURL  https://github.com/kejn/user-scripts/issues
// @include     https://vod.tvp.pl/*
// @version     1.0.0
// @grant       none
// ==/UserScript==
$(document).ready(function () {

  function searchInIframe(iframeContent, callback) {
    var url = iframeContent.match(/\'https?:\/\/(.*)type\: \'video\//g);
    if (url === undefined || url === null) {
      console.error('Silverlight');
      throw new Error('Ta wtyczka nie generuje linków dla filmów obsługiwanych przez Silverlight');
    }
    url = url.toString().split('\'') [1];
    callback(url);
  }
  
  $('.playerContainer').prepend($('<div/>', {
    'id': 'download-movie',
    'style': 'background-color: rgba(0,0,0,.6); padding: 15px 0 0 0; margin: 0; text-align:center;'
  }).append($('<p/>', {
    'text': 'Szukam filmu...',
    'style': 'font-weight: bold; font-size: 2em; color: white;'
  })));
  
  setTimeout(function () {
    var wrapper = $('.playerContainer iframe').contents();
    if (wrapper) {
      var player = wrapper.find('iframe').contents();
      searchInIframe(player[0].documentElement.innerHTML, function (url) {
        console.log('Pobierz film: ' + url);
        $('#download-movie').empty();
        $('#download-movie').append($('<a/>', {
          'href': url,
          'target': '_blank',
          'text': '> Pobierz film / Oglądaj bez reklam <',
          'style': 'font-weight: bold; font-size: 2em; color: white;'
        }));
      });
    }
  }, 5000);
});
