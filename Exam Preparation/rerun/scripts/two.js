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