// ==UserScript==
// @id          Packtpub_Book_List_Filter@https://github.com/kejn/user-scripts
// @name        Book-list Filter @packtpub.com
// @namespace   https://github.com/kejn/user-scripts
// @description Adds custom searchbox to the book list to easily filter all the claimed titles
// @author      kejn
// @homepage    https://github.com/kejn/user-scripts/tree/master
// @homepageURL https://github.com/kejn/user-scripts/tree/master
// @include     https://www.packtpub.com/account/my-ebooks
// @version     1.0.0
// @grant       none
// ==/UserScript==
$(document).ready(function () {
  $('#account-right-content > h1').after('<input id="myCustomSearchBox" placeholder="Search..." type="text" style="width: 100%;" />');
  $('#myCustomSearchBox').on('input', function () {
    var newValue = $(this).val().toLowerCase();
    $('.product-line').each(function () {
      if ($(this).attr('title').toLowerCase().indexOf(newValue) > -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});