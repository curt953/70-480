// Code for 7th answer's correct and incorrect options:

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

// Code for 8th answer's correct and incorrect options:

// Correct:
var regex = /[^\w\.@-]/;
regex.test(data);

// Incorrect:
var regex = /[^\w\.@-]/;
data.test(regex);