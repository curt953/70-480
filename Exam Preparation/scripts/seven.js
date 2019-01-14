"use strict";

/* This whole file covers the implementation of XMLHttpRequest object */

//  First GET XMLHttpRequest
let http = new XMLHttpRequest();
    let results = $('#results');
    results.addClass('hide');

    http.onreadystatechange = function () {
        if(http.readyState === 4 && http.status === 200) {
            results.removeClass('hide');
            results.text(http.responseText);
        }
    };

    http.open(
        "GET",
        '../resources/data.xml',
        true
    );

    http.send();

//  Second GET XMLHttpRequest
let xReq = new XMLHttpRequest();
    xReq.open('GET', '../resources/data.xml', false);
    let timeout = 3000;
    xReq.ontimeout = function () {
        $('#results').text("Request Timed Out");
    };
    xReq.send(null);
    $('#results').text(xReq.response);

//  Third GET XMLHttpRequest
var xhr = new XMLHttpRequest(),
method = "GET",
url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
        $('#results').text(xhr.responseText);
    }
};
xhr.send();


// Fourth GET XMLHttp
xReq.open('GET', '../resources/data.xml', true);
xReq.timeout = 2000;
xReq.ontimeout = function () {
    $("#results").text('Request timed out');
};
xReq.onreadystatechange = function () {
    if (xReq.readyState === XMLHTTPReadyState_COMPLETE) {
        $('#results').text(xReq.response);
    }
    else {
        $('#results').text(xReq.statusText);
    }
};
xReq.send(null);


try {

    $('document').ready(function () {

        $('#btnGetXMLData').click(function () {

            let XMLHTTPReadyState_COMPLETE = 4;
            let xReq = new XMLHttpRequest();

            xReq.open('GET', '../resources/libraries.json', true);
            xReq.timeout = 2000;
            xReq.ontimeout = function () {
                $("#results").text('Request timed out');
            };
            xReq.onreadystatechange = function () {
                if (xReq.readyState === XMLHTTPReadyState_COMPLETE) {
                    $('#results').text(xReq.responseText);
                    console.log(xReq.responseText);
                }
                else {
                    $('#results').text(xReq.response);
                }
            };
            xReq.send(null);

        });

    });
}
catch (e) {
    console.error(e.message);
}