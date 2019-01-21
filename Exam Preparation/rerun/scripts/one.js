"use strict";
window.onload = function() {
    let firstCanvas = document.getElementById('firstCanvas');
    let context = firstCanvas.getContext('2d');

    context.beginPath();
    context.strokeStyle = 'red';
    context.arc(150, 100, 75, 0, 2 * Math.PI, false);
    context.lineWidth = 25;
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'orange';
    context.quadraticCurveTo(200, 200, 50, 99);
    context.lineWidth = 12;
    context.stroke();

    context.beginPath();
    context.bezierCurveTo(99, 366, 15, 20, 12, 33);
    context.strokeStyle = 'darkgreen';
    context.stroke();

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(175, 59);
    context.strokeStyle = 'purple';
    context.stroke();

    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 2; j++) {
            context.beginPath();

            let x = 25 + j * 50;  // x coordinate
            let y = 25 + i * 50;  // y coordinate
            let radius = 20;      // Arc radius
            let startAngle = 0;   // Starting point on circle
            let endAngle = Math.PI + (Math.PI * j) / 2;  // End point on circle
            let anticlockwise = i % 2 === 1;             // Draw anticlockwise

            context.arc(x, y, radius, startAngle, endAngle, anticlockwise);

            if (i > 1) {
                context.fill();
            } else {
                context.stroke();
            }
        }
    }

};