// Code for 7th question's correct and incorrect answers:

// Correct:
let isValid = false;
let elements = document.getElementsByTagName('input');
for(let index = 0; index < elements.length; index++){
    let element = elements[index];
    if (element.type == "checkbox" && element.checked == true)  {
        isValid = true;
        break;
    }
}
if(!isValid) {
    window.alert("Please select a topping.");
    return false;
}

// Incorrect:
let isValid = false;
let elements = document.getElementsByTagName('input');
for(let index = 0; index < elements.length; index++){
    let element = elements[index];
    if (element.type == "checkbox" && element.checked == true)  {
        isValid = true;
        break;
    }
}
if(!isValid) {
    window.alert("Please select a topping.");
}

// Code for 8th question's correct and incorrect answers:

// Correct:
var regex = /[^\w\.@-]/;
regex.test(data);

// Incorrect:
var regex = /[^\w\.@-]/;
data.test(regex);

// Code for 11th question's correct and incorrect answers:

// Correct:
try {
    JSON.parse(document.getElementById('data').value);
}
catch (e) {
    window.alert('Invalid JSON data');
}

// Incorrect:
try{
    JSON.stringify(document.getElementById('data').value);
}
catch (e) {
    window.alert('Invalid JSON data');
}

// Code for 12th question's correct and incorrect answers:

// Correct:
function Show(comment) {
    comment = comment.replace("<", "&lt;").replace(">","&gt;");
    var div = document.createElement('div');
    div.innerHTML = comment;
    comment.appendChild(div);
}

// Code for 13th question's correct answer:

// Correct:
$('#submitButton').click(function () {
   var isChecked = false;
   $('input:checkbox').forEach(function (index, value) {
      if (value.checked) {
          isChecked = true;
      }
      if(!isChecked) {
          alert('Please select a topping.');
      }
   });
});

// Code for 16th question's correct answer:

// Correct:
try{
    couldFail();
}
catch (e) {
    alert('Error!');
}
finally {
    // clean up
}

// Code for 27th question's correct answer:

// Correct:
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "orange";
ctx.fillRect(0, 0, 200, 200);

// Code for 28th question's correct answer:

// Correct:
var player = document.getElementById("player");
var videoFileInput = document.getElementById("videoFile");
if (videoFileInput.value) {
    player.src = videoFileInput.value;
    player.play();
}

// Code for 29th question's correct answer:

// Correct:
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.fillStyle = "#FF0000";
context.fillRect(0, 0, 100, 200);

// Code for 30th question's correct answer:

// Correct:
var audio = document.getElementById("myAudio");
var checkbox = document.getElementById("muteCheckBox");
audio.muted = checkbox.checked;

// Code for 31th question's correct answer:

// Correct:
var input = document.createElement("input");
input.style.display = "block";
input.setAttribute("type", "text");
var section = document.getElementById("memberSection");
section.appendChild(input);

// Code for 32th question's correct answer:

// Correct:
player.src = audioFileInput.value;
player.play();

// Code for 44th question's correct and incorrect answers:

// Correct:
$.ajax({
    url: "Weather.asmx/GetWeather",
    type: "POST",
    async: true,
    cache: false,
    data: {"ZipCode": zipCode},
    dataType: "html",
    success: function (result) {
        showWeather(result);
    }
});

// Incorrect
$.ajax({
   url: "Weather.asmx/GetWeather",
   type: "POST",
   async: true,
   cache: true,
   data: {"ZipCode": zipCode},
   dataType: "html",
   success: function (result) {
       showWeather(result);
   }
});

// Code for 46th question's correct answer:

// Correct:
$.ajax({
    url: "http://services.measureup.com/Exam",
    type: "GET",
    data: {examNumber: "70-480"},
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (result) {
        window.alert(result.price);
    }
});

// Code for 47th question's correct and incorrect answers:

// Correct:
var socket = new WebSocket("wss://ChatService");
socket.onmessage = function (event) {
    document.writeln(event.data);
};

// Incorrect:
var socket = new WebSocket("wss://ChatService");
socket.send("{document.writeln(socket.bufferedAmount)}");

// Code for 48th question's correct and incorrect answers:

// Correct:
GetCurrentLocation(
    function (position) {
        alert(position);
    },
    function (error) {
        alert(error);
    }
);

// Incorrect:
function onSuccess(position) {
    alert(position);
}
function onError(error) {
    alert(error);
}
GetCurrentLocation(onSuccess(), onError());

// Code for 51th question's correct answer:

// Correct:
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        // query database to find the nearest petrol station.
    });
}

// Code for 52th question's correct answer:

// Correct:
window.navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
});

// Code for 54th question's correct and incorrect answers:

// Correct:
/*
CACHE MANIFEST
Main.js
Main.css
NETWORK:
Functions.js
 */

// Incorrect:
/*
CACHE MANIFEST
CACHE:
Main.js
Main.css
FALLBACK:
Functions.js
 */

// Code for 56th question's correct answer:

// Correct:
/*
CACHE MANIFEST:
CACHE:
App.js
App.css
NETWORK:
Test.js
 */

// Code for 61th question's correct and incorrect answers:

// Correct:
var totalPrice = 0;
var prices = doc.selectNodes("//Item[@Name='Sandwich' or @Name='Lemonade']/@Price");
for (var index = 0; index < prices.length; index++){
    totalPrice += prices[index].value;
}

// Incorrect:
var totalPrice = 0;
var prices = doc.selectNodes("//Item[Name='Sandwich' or Name='Lemonade']/Price");
for (var index = 0; index < prices.length; index++){
    totalPrice += prices[index].value;
}

// Code for 62th question's correct answer:

// Correct:
var data = null;
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        data = request.responseText;
    }
};

// Code for 63th question's correct and incorrect answers:

// Correct:
var newMenu = JSON.parse(menu, function (key, value) {
    var newValue =  value;
    switch (key) {
        case "Calories":
        case "Type":
            newValue = undefined;
            break;
    }
    return newValue;
});

// Incorrect:
var newMenu = JSON.stringify(menu, function (key, value) {
    var newValue =  value;
    switch (key) {
        case "Calories":
        case "Type":
            newValue = undefined;
            break;
    }
    return newValue;
});