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
// @version     1.1.0
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
  
  var pausePlayerExecutionCounter = 0;
  var pausePlayer = function(player) {
    ++pausePlayerExecutionCounter;
    var button = player.find('.tvppause');
    if(button.length && button.is(':visible')) {
      button.click();
    } else if(pausePlayerCounter < 60) { // w ciągu 30 sekund na pewno się w końcu uruchomi ta reklama :)
      setTimeout(function() {
        pausePlayer(player);
      }, 500);
    }
  };
  
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
      try {
        searchInIframe(player[0].documentElement.innerHTML, function (url) {
          console.log('Pobierz film: ' + url);
          $('#download-movie').empty();
          $('#download-movie').append($('<a/>', {
            'href': url,
            'target': '_blank',
            'text': '> Pobierz film / Oglądaj bez reklam <',
            'style': 'font-weight: bold; font-size: 2em; color: white;'
          }));
          pausePlayer(player);
        });
      } catch(err) {
        $('#download-movie p:first-child').text(err.message);
      }
    }
  }, 5000);
});
