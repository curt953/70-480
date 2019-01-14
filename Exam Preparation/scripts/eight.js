"use strict";

// This file contains the serialize, deserialize and transmit data using the XMLHttpRequest object

// First POST request using xml data
window.onload = function () {
    document.getElementById('btnGetXMLData').onclick = function () {
        let xmlData = "<Person firstName='Rick' lastName='Grimes' hairColor='Black' />";
        let xReq = new XMLHttpRequest();
        let results = document.getElementById('results');

        xReq.open(
            "POST",
            '../resources/ReceiveXmlData.aspx',
            false
        );
        xReq.responseType;
        xReq.send(xmlData);
        results.innerText = xmlData;
    };
};

// Second POST request using an JSON object
window.onload = function () {
    document.getElementById('btnGetXMLData').onclick = function () {
        let person = {
            firstName: 'Svilen',
            lastName: 'Nikolov',
            age: 24
        };
        let jsonPerson = JSON.stringify(person);
        let xReq = new XMLHttpRequest();
        let results = document.getElementById('results');

        xReq.open(
            "POST",
            '../docs/eight.html',
            false
        );
        xReq.responseType;
        xReq.send(jsonPerson);
        results.innerText = jsonPerson;
    };
};

// Third GET request using a local .json file
window.onload = function () {
    document.getElementById('btnGetXMLData').onclick = function () {
        let req = new XMLHttpRequest();
        req.open('GET', '../resources/libraries.json', false);
        req.send(null);
        let jsonPerson = JSON.parse(req.responseText);
        let results = document.getElementById('results');
        results.innerText = JSON.stringify(jsonPerson);
    };
};

// Fourth GET request using a local .jpg file
window.onload = function () {
    let req = new XMLHttpRequest();
    req.open('GET', '../images/image-one.jpg', false);
    req.responseType = 'blob';
    req.send(null);
    let blob = req.response;
    document.getElementById('result').src = URL.createObjectURL(blob);
};

// Fifth POST request using AJAX event handler of a form submission
$('document').ready(function () {
   $('#signupForm').submit(function () {

        let fName = $('#firstName').val();
        let lName = $('#lastName').val();
        let qString = 'First Name: ' + fName + ' Last Name: ' + lName;

        $.ajax({
            url: '../resources/processSignUp.aspx',
            type: 'POST',
            data: qString,
            success: function (r) {
                console.log(r);
            }
        });

        return false;

   });
});

// Sixth POST request using the jQuery.serialize() method
$('form').submit(function () {

    let qString = $(this).serialize();
    alert(qString);

    $.ajax({
        url: '../resources/processSignUp.aspx',
        type: 'POST',
        data: qString,
        success: function (r) {
            return r;
        }
    });

    return false;

});