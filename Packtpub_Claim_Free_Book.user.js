// ==UserScript==
// @id           Packtpub_Claim_Free_Book@https://github.com/kejn/user-scripts
// @name         Claim free book @packtpub.com
// @namespace    https://github.com/kejn/user-scripts
// @description  Clicks on the 'Claim free book' button
// @author       kejn
// @homepage     https://github.com/kejn/user-scripts/tree/master
// @homepageURL  https://github.com/kejn/user-scripts/tree/master
// @downloadURL  https://github.com/kejn/user-scripts/raw/master/Packtpub_Claim_Free_Book.user.js
// @updateURL    https://github.com/kejn/user-scripts/raw/master/Packtpub_Claim_Free_Book.user.js
// @supportURL   https://github.com/kejn/user-scripts/issues
// @include      https://www.packtpub.com/*packt/offers/free-learning*
// @version      1.0.1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('#free-learning-claim').click();
})();
