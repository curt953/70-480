"use strict";

/*
NOTES to write down are pages:

1.Table 3-1 HTML5 input elements: p.193

 */


// This block of code contains the user verification process of a HTML site
window.onload= function() {
    (function() {


        document.getElementById('submitButton').onclick = function () {
            console.info('The submit event was triggered.');
        };

        document.getElementById('resetButton').onreset = function () {
            console.info('The reset event was triggered.');
        };

        document.getElementById('cancelButton').oncancel = function () {
            console.info('The cancel event was triggered.');
        };

    })();
};