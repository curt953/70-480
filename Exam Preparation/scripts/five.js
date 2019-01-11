"use strict";

/* This block of code contains the animation frame implementation with bouncing ball example */
window.requestAnimationFrame = (function (callback) {
    return window.requestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           function (callback) {
               window.setTimeout(callback, 1000 / 30);
           };
})();

let x = 176, y = 176, w = 600, h = 600, r = 26;
let d, s, c;
let rColor, gColor, bColor;
let hd = 'r';
let horizontal = true;

window.onload = function () {
    try {
        c = document.getElementById('c');
        w = c.width;
        h = c.height;
        s = parseInt(document.getElementById('speedy').value);
        getDirection();
        drawBall();
        
        document.onkeydown = function (e) {
            let keyNum;

            if(e.which){
                keyNum = e.which;

                switch(keyNum) {

                    case 40:
                        horizontal = false;
                        hd = 'd';
                        break;

                    case 37:
                        horizontal = true;
                        hd = 'l';
                        break;

                    case 38:
                        horizontal = false;
                        hd = 'u';
                        break;

                    case 39:
                        horizontal = true;
                        hd = 'r';
                        break;

                }
            }
        }
    }  
    catch (e) {
        console.error(e.message);
    }
    
    function increaseSpeed() {
        s++;
        document.getElementById('speedy').value = s;
    }

    function decreaseSpeed() {
        s--;
        document.getElementById('speedy').value = s;
    }

    function changeDirection() {
        let cx = window.pageXOffset;
        let cy = window.pageYOffset;

        x = cx;
        y = cy;

        document.getElementById('speedy').value = s;
    }

    function setNewPoint(d) {
        try {

            switch (horizontal) {
                case true:
                    if (x < (w - r) && hd == 'r') {
                        x += s;
                    }
                    else if (x > r && hd == 'l') {
                        x -= s;
                    }
                    break;

                case false:
                    if (y < (h - r) && hd == 'd') {
                        y += s;
                    }
                    else if (y > r && hd == 'u') {
                        y -= s;
                    }
                    break;
            }

            if (x >= (w - r)) {
                hd = 'l';
            }
            if (x <= r) {
                hd = 'r';
            }
            if (y >= (h - r)) {
                hd = 'u';
            }
            if (y <= r) {
                hd = 'd';
            }
        }
        catch (e) {
            console.error(e.message);
        }
    }
    
    function getDirection() {
        
        horizontal = !horizontal;
        let d = Math.ceil(Math.random() * 2);

        if (horizontal) {
            if (d === 1) {
                hd = 'r';
            }
            else {
                hd = 'l';
            }
        }
        else {
            if (d === 1) {
                hd = 'u';
            }
            else {
                hd = 'd';
            }
        }

    }
    
    function drawBall() {
        try {
            let rgbFill = 'rgb(0, 0, 0)';
            let rgbStroke = 'rgb(128, 128, 128)';

            setNewPoint(d);

            let context = c.getContext('2d');
            context.clearRect(0, 0, c.width, c.height);
            context.beginPath();
            context.lineWidth = '5';
            context.strokeStyle = rgbStroke;
            context.arc(x, y, r, 0, 360);
            context.fillStyle = rgbFill;
            context.fill();
            context.stroke();

            s = parseInt(document.getElementById('speedy').value);
            requestAnimationFrame(function () {
                drawBall();
            });

        }
        catch (e) {
            console.error(e.message);
        }
    }
    
    function DoIntensiveWork() {

        let result = document.getElementById('workResult');
        result.innerText = '';

        let work = 10000000;
        let i;
        let a = new Array(work);
        let sum = 0;

        for(i = 0; i < work; i++) {
            a[i] = i * i;
            sum += i * i;
        }

        result.innerText = sum;

    }
    
};

/* This block of code contains the WebWorker implementation */

document.getElementById('intensiveWork').onclick = function () {
    let result = document.getElementById('workResult');
    result.innerText = '';

    let webWorker = new Worker('./CalculateWorker.js');
    
    webWorker.onmessage = function (evt) {
        try {
            result.innerText = evt.data;
        }
        catch(e) {
            console.error(e.message);
        }
    };
    
    webWorker.onerror = function (err) {
        console.error('Error message: ' + err.message +
                      ' Filename in which error occurred: ' + err.filename +
                      ' Line number in which error was spotted: ' + err.lineno);
    };

    webWorker.postMessage('');

    document.getElementById('stopWorker').onclick = function () {
        webWorker.terminate();
    };

};