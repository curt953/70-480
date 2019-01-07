"use strict";

/* This block of code is the starting one of the chapter*/
let n = 2000, s = '2000';
console.log(n == s);
console.log(n === s);

let userAge = 24, gender = 'M';
let minimumAge = 11;


/* This block of code contains the if, if else and switch statements*/
if(userAge > minimumAge) {
    if (gender == 'M') {
        console.log('You are a MAN.');
    }
    else {
        console.log('You are a woman.');
    }
}
else if (gender == 'M') {
    console.log('You are under-aged man.');
}
else {
    console.log('You are under-aged woman.');
}

let div1 = document.getElementById('Div1');
switch (div1.style.backgroundColor) {

    case  'yellow':
        console.log('slow down');
        break;

    case 'green':
        console.log('proceed');
        break;

    case 'red':
        console.log('stop');
        break;

    default:
        console.log('unknown condition');
        break;
}

div1.style.backgroundColor == 'green' ? div1.innerText = 'proceed' : div1.innerText = 'stop'


/* This block of code contains the default array methods*/
var anArray = new Array(1, 3, 54, 532);
var stringArray = ['Valar Morghulis', 'Valar Dohaeris', 'no,u'];

console.log(anArray.length);
anArray[7] = 420;
console.log(anArray.length);
console.log(stringArray[2]);

let multiArray = new Array(3);
multiArray[0] = new Array(3);
multiArray[1] = new Array(3);
multiArray[2] = new Array(3);

multiArray[0][0] = 'Smoke weed everyday!';
console.log(multiArray[0][0]);

let sports = ['football', 'basketball', 'volleyball'];
let moreSports = new Array('tennis', 'golf', 'pool', 'rugby', 'bowling');
let combinedSports = sports.concat(moreSports);

console.log(combinedSports);
combinedSports.push('darts');
combinedSports.pop();
combinedSports.shift();
combinedSports.unshift('skiing', 'snowboarding');
console.log(combinedSports);


let index = sports.indexOf('basketball', 0);
let joinedSports = combinedSports.join(', ');
let reversedSports = combinedSports.reverse();
let sortedSports = combinedSports.sort();
let slicedSports = moreSports.slice(0, 1);
let splicedSports = moreSports.splice(0, 1, ['cricket']);

console.log(combinedSports);
console.log(index);
console.log(joinedSports);
console.log(reversedSports);
console.log(sortedSports);
console.log(slicedSports);
console.log(splicedSports);


/* This block of code contains more complicated array methods*/
let evenNumbers = [0, 2, 4, 6, 8, 9, 10];
let allEven = evenNumbers.every(evenNumberCheck, this);

if (!allEven) {
    console.log(allEven);
}

function evenNumberCheck(value, index, array) {
    return (value % 2) == 0;
}

let evenNumbers1 = [0, 2, 4, 6, 8, 9, 10];
let allEven1 = evenNumbers1.some(evenNumberCheck, this);

if (allEven1) {
    console.log(allEven1);
}

let teslaModels = ['Roadster', 'S', '3', 'X'];
teslaModels.sort().forEach(printCarModels);

function printCarModels(value, index, array) {
    let teslaList = document.getElementById("teslaList");
    let bullet = document.createElement('li');

    bullet.innerText = value;
    teslaList.appendChild(bullet);
}

let oddNums = [1, 3, 5, 7, 9, 11, 13];
let allOdd = oddNums.filter(oddNumberCheck, oddNums);

function oddNumberCheck(value, index, array) {
    return (value % 2);
}

if (allOdd) {
    console.log(allOdd);
}

let money = [1.7, 3.14, 4.20, 5.90];
let roundedMoney = money.map(roundOff, money);

function roundOff(value, position, array) {
    return Math.round(value);
}

console.log(roundedMoney);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let factorials = numbers.reduce(factorial);
let backFact = numbers.reduceRight(factorial);

function factorial(previous, current) {
    return previous * current;
}

console.log(factorials);
console.log(backFact);

/* This block of code contains iterative program flow with different loops*/

for(let i = 0; i <= 10; i++){
    document.write(i);
    document.write('<hr/>')
}

for(let i = 10; i >= 0; i--){
    document.write(i);
    document.write('<hr/>')
}

for(let i = 1; i < 100; i *= 2){
    document.write(i);
    document.write('<hr/>')
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
for(let i = 0; i < alphabet.length; i++){
    document.write(alphabet[i]);
    document.write('<hr/>');
}


let person = {
    firstName: 'Svilen',
    lastName: 'Nikolov',
    age: 24,
    birthDay: '11.08.1994'
};

for(let prop in person) {
    document.write(person[prop]);
    document.write('<hr/>');
}

let i = 0;
while(i <= 10) {
    document.write(i);
    document.write('<hr/>');
    i++;
}


/* This block of code contains different event handling on the window object*/
window.onload = () => console.log('Hello There');
window.addEventListener('load', onLoadHandler1, false);
window.addEventListener('load', onLoadHandler2, false);
window.addEventListener('load', onLoadHandler3, false);

function onLoadHandler1() {
    console.log('General Kennoby');
}

function onLoadHandler2() {
    console.log('You are a BOLD one');
}

function onLoadHandler3() {
    console.log('KILL HIM');
}

window.removeEventListener('load', onLoadHandler3, false);
window.addEventListener('load', function () {
    document.getElementById('outer')
            .addEventListener('click', outerDivClick, false);
}, false);

window.onload = function () {
    let a = document.getElementById('aLink');
    a.onclick = OverrideAnchorClick;
};

function OverrideAnchorClick(e) {
    e.preventDefault();
    console.info('The anchor tag was clicked.');
}

window.onload = function () {

    document.getElementById('outer')
            .addEventListener('click', outerDivClick, false);

    document.getElementById('middle')
            .addEventListener('click', middleDivClick, true);

    document.getElementById('inner')
            .addEventListener('click', innerDivClick, false);

};

function outerDivClick() {
    appendText('The outer div tag was clicked.');
}

function middleDivClick() {
    appendText('The middle div tag was clicked.');
}

function innerDivClick() {
    appendText('The inner div tag was clicked.');
    window.event.cancelBubble = true;
}

function appendText(s) {
    let li = document.createElement('li');
    li.innerText = s;
    document.getElementById('eventOrder').appendChild(li);
}

function clearList() {
    let ol = document.createElement('ol');
    ol.id = 'eventOrder';
    document.getElementById('bod').replaceChild(ol,
        document.getElementById('eventOrder'));
}

window.onload = function () {

    document.getElementById('aRange')
            .addEventListener('change', rangeChangeEvent);

    document.getElementById('aText')
            .addEventListener('change', rangeChangeEvent);

};

function rangeChangeEvent() {
    document.getElementById('rangeValue').innerText = this.value;
}


/* This block of code contains focus event handling*/

window.onload = function () {
    document.getElementById('firstNameText').focus();
    document.getElementById('firstNameText')
            .addEventListener('blur', function () {
                if (this.value.length < 3) {
                    document.getElementById('ruleViolation').innerText =
                        'First name is required to be more than 3 characters.'
                    document.getElementById('ruleViolation').style.color = 'red';
                    this.focus();
                }
            });
};


/* This block of code contains keyboard events*/

window.onload = function (event) {
    var x = event.which || event.keyCode;
    document.getElementById('firstNameText')
            .addEventListener('keydown', function () {
               document.getElementById('outputText').innerText = x;
            });
};

document.onkeydown = function () {
    if (window.event.ctrlKey && String.fromCharCode(window.event.keyCode) === 'F') {
        document.getElementById('firstNameText').focus();
    }
    if (window.event.ctrlKey && String.fromCharCode(window.event.keyCode) === 'L') {
        document.getElementById('lastNameText').focus();
        return false;
    }
};


/* This block of code contains mouse events*/

window.onload = function () {
    document.getElementById('yellowBox').addEventListener('click', yellowBoxClick);
};

function yellowBoxClick() {
    document.write('Client X: ' + document.event.clientX + ' Client Y: ' + document.event.clientY);
    document.write('<hr/>');
    document.write('Offset X: ' + document.event.offsetX + ' Offset Y: ' + document.event.offsetY);
    document.write('<hr/>');
    document.write('Screen X: ' + document.event.screenX + ' Screen Y: ' + document.event.screenY);
}


window.onload = function () {
    document.getElementById('yellowBox').addEventListener('mouseenter', yellowBoxEnter);
    document.getElementById('yellowBox').addEventListener('mouseleave', yellowBoxLeave);
};

function yellowBoxEnter() {
    this.classList.add('scale');
}

function yellowBoxLeave() {
    this.classList.remove('scale');
}

/* This block of code contains drag and drop events*/

window.onload = function () {
    let chip = document.getElementById('chip');
    let b1 = document.getElementById('bucket1');

    chip.addEventListener('dragstart', function () {
        event.dataTransfer.setData('Text', this.id);
    });

    b1.addEventListener('dragenter', function () {
        b1.classList.add('over');
        document.event.returnValue = false;
    });

    b1.addEventListener('dragleave', function () {
        b1.classList.remove('over');
    });

    b1.addEventListener('drop', function () {
        document.event.returnValue = false;
        let data = event.dataTransfer.getData('Text');
        let d = document.getElementById(data);
        d.classList.remove('begin');
        d.classList.add('dropped');
        this.appendChild(d);
    });

};


/* This block of code contains a custom event*/
let myEvent = new CustomEvent('anAction', {
    detail: {
        description: 'a description of the event',
        timeOfEvent: new Date(),
        eventCode: 2
    },
    bubbles: true,
    cancelable: true
});

document.addEventListener('anAction', customEventHandler);

function customEventHandler() {
    alert(document.event.detail.description);
}

document.dispatchEvent(myEvent);
