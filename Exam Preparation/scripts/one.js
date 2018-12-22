"use strict";
/*
let oneMainHeader = $("#one-main-header").value;
let oneHomeLink = $("#one-home");
let oneContactsLink = $("#one-contacts");
let oneAboutLink = $("#one-about");

let contactsHomeLink = $("#contacts-home");
let contactsContactsLink = $("#contacts-contacts");
let contactsAboutLink = $("#contacts-about");

let aboutHomeLink = $("#about-home");
let aboutContactsLink = $("#about-contacts");
let aboutAboutLink = $("#about-about");

console.log(oneMainHeader);
console.log(oneHomeLink);
console.log(oneContactsLink);
console.log(oneAboutLink);

console.log(contactsHomeLink);
console.log(contactsContactsLink);
console.log(contactsAboutLink);

console.log(aboutHomeLink);
console.log(aboutContactsLink);
console.log(aboutAboutLink);
*/

window.onload = function () {
    let drawingOne = document.getElementById('drawing-surface');
    let context = drawingOne.getContext("2d");
    console.log(context);

/*  Drawings of areas on the canvas in different colours

    context.beginPath();
    context.arc(150, 100, 75, 0, 2 * Math.PI, false);
    context.lineWidth = 25;
    context.strokeStyle = '#0f0';
    context.stroke();

    context.beginPath();
    context.arc(450, 100, 75, 1.5 * Math.PI, 2 * Math.PI, false);
    context.lineWidth = 25;
    context.strokeStyle = 'blue';
    context.stroke();

    context.beginPath();
    context.arc(150, 300, 75, 1 * Math.PI, 1.5 * Math.PI, false);
    context.lineWidth = 25;
    context.strokeStyle = '#0ff';
    context.stroke();

    context.beginPath();
    context.arc(450, 300, 75, .5 * Math.PI, 1 * Math.PI, false);
    context.lineWidth = 25;
    context.strokeStyle = '#f00';
    context.stroke();
*/

/*  A quadratic curve output on the canvas

    context.beginPath();
    context.moveTo(10, 380);
    context.quadraticCurveTo(300, -250, 580, 380);
    context.lineWidth = 25;
    context.strokeStyle = '#f00';
    context.stroke();
*/

/* A Bezier curve drawn on a canvas

    context.beginPath();
    context.moveTo(125, 10);
    context.bezierCurveTo(0, 200, 300, 300, 50,  400);
    context.lineWidth = 5;
    context.strokeStyle = '#f00';
    context.stroke();
*/

/* A custom path drawn on the canvas
    context.beginPath();
    context.arc(300, 200, 75, 1.75 * Math.PI, 1.25 * Math.PI, false);
    context.lineTo(150, 125);
    context.quadraticCurveTo(300, 0, 450, 125);
    context.lineTo(353, 144);
    context.strokeStyle = 'blue';
    context.lineCap = 'round';
    context.lineWidth = 10;
    context.stroke();
*/

/* A rectangle drawn on the canvas
    context.beginPath();
    context.rect(300, 200, 150, 75);
    context.stroke();
*/

/* A centered to the canvas rectangle
    context.beginPath();
    let x, y;
    x = 150;
    y = 75;
    context.rect(300 - (x / 2), 200 - (y / 2), x, y);
    context.stroke();
*/

/* Using the fill method to colour in a complex drawing
    context.beginPath();
    context.arc(300, 200, 75, 1.75 * Math.PI, 1.25 * Math.PI, false);
    context.lineTo(150, 125);
    context.quadraticCurveTo(300, 0, 450, 125);
    context.lineTo(353, 144);
    context.strokeStyle = 'blue';
    context.lineCap = 'round';
    context.lineWidth = 10;
    context.fillStyle = 'green';
    context.fill();
    context.stroke();
*/

/* The <canvas> element coloured with a linear gradient
    context.lineWidth = 3;
    context.rect(150, 150, 200, 125);
    let gradient = context.createLinearGradient(150, 150, 200, 125);
    gradient.addColorStop(0, 'black');
    gradient.addColorStop(0.5, 'gray');
    gradient.addColorStop(1, 'white');
    context.fillStyle = gradient;
    context.fill();
    context.stroke();
*/

/* A radial gradient coloured on the canvas
    context.lineWidth = 3;
    context.rect(150, 150, 250, 175);
    let gradient = context.createRadialGradient(200, 200, 5, 250, 250, 100);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(.5, 'orange');
    gradient.addColorStop(1, 'blue');
    context.fillStyle = gradient;
    context.fill();
    context.stroke();
*/

/* The canvas filled with a pattern drawn on it
    context.lineWidth = 3;
    context.rect(150, 150, 200, 125);
    let img = new Image();
    img.src = '../images/image-one.jpg';
    img.onload = function () {
        let pat = context.createPattern(img, 'repeat');
        context.fillStyle = pat;
        context.fill();
        context.stroke();
    };
*/

/* An image drawn on canvas
    let img = new Image();
    img.src = '../images/image-one.jpg';
    img.onload = function () {
        context.drawImage(img, 0, 0, img.width * .5, img.height * .5);
        context.stroke();
    };
*/

/* Progression of text with changing styles
    window.onload = function() {
        context.strokeText('1. Text with default font', 100, 100);
        context.font = '24px arial';
        context.strokeText('2. Text with altered font', 100, 125);
        context.strokeStyle = 'red';
        context.strokeText('3. Text with altered coloured font', 100, 150);
        context.fillStyle = 'red';
        context.fillText('4. Text with altered coloured font', 100, 175);
        context.font = '24px arial';
        context.textAlign = 'center';
        context.fillStyle = 'red';
        context.fillText('5. Text with altered coloured font Centered', 100, 200);
    }
*/




};