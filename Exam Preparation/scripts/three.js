"use strict";

/* This block of code contains try...catch...finally implementation */

window.onload = function () {
    try {
        window.dosomeunsupportedmethod();
    }
    catch (e) {
        console.error('Error: ', e);
    }
};

