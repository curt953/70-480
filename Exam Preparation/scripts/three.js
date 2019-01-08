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


function WalkthroughArray() {
    try {
        let canvas = document.getElementById('myCanvas');
        let context = canvas.getContext('2d');

        context.fillStyle = '#000fff';
        context.strokeStyle = 'red';

        contxt.arc(50, 50, 25, 0, 360, false);
        context.fill();
        context.stroke();
    } catch (e) {
        if(e) {
            console.error('Error name is: ', e.name, ', error type is: ', e.type);
        }
    } finally {
        console.info('I am tired of your errors.');
    }
}

window.onload = function () {
      WalkthroughArray();
};


let canvas;
let context;

try {
    document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    contxt.arc(50, 50, 25, 0, 360);
    context.fillStyle = 'blue';
    context.strokeStyle = 'red';
    context.fill();
    context.stroke();
}
catch(e) {
    context.strokeText(e.message, 50, 50);
    console.error(e.message);
}
finally {
    console.info('You motherfucker.');
}

window.onload = function () {

    try {
        WorkWithCanvas();
    }
    catch (e) {
        console.error(e.message);
    }

    function WorkWithCanvas() {

        let canvas = document.getElementById('myCanvas');
        let context = canvas.getContext('2d');

        contxt.arc(50, 50, 25, 0, 360, false);
        context.fillStyle = 'blue';
        context.strokeStyle = 'red';
        context.fill();
        context.stroke();

    }

};
function WorkWithCanvas() {

    try {
        let canvas = document.getElementById('myCanvas');
        let context = canvas.getContext('2d');

        contxt.arc(50, 50, 25, 0, 360, false);
        context.fillStyle = 'blue';
        context.strokeStyle = 'red';
        context.fill();
        context.stroke();
    }
    catch (e) {
        throw e;
    }
    finally {
        console.info('Bring that ASS here.');
    }

}

window.onload = function () {
    WorkWithCanvas();
};

let ball = {
    x: -1,
    y: -1,
    draw: function DrawBall() {
        if(this.x < 0){
            throw new Error('Invalid X coordinate');
        }
    }
};

window.onload = function () {
    try {
        let canvas = document.getElementById('myCanvas');
        let context = canvas.getContext('2d');

        ball.draw(context);
    }
    catch (e) {
        console.error(e.message);
    }
};
window.onload = function () {
    try {
        let a, b, c;

        a = 5;
        b = 10;

        let result = multiplyNumbers(a, b, c);
        console.log(result);
    }
    catch (e) {
        console.error(e.message);
    }

    function multiplyNumbers(first, second, third) {

        if (first === null || second === null || third === null) {
            throw new Error('Forgot to initialize a number.');
        }

        return first * second * third;

    }
};
