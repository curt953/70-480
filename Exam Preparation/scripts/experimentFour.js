let libraryOne = document.getElementById('library1');
let libraryTwo = document.getElementById('library2');
let libraryThree = document.getElementById('library3');

loadJson(function (response) {
   let actualJson = JSON.parse(response);
   libraryOne.innerText = JSON.stringify(actualJson);
});

function loadJson(callback) {
    let http = new XMLHttpRequest();
    http.overrideMimeType('application/json');
    http.get("GET", "./libraries.json", true);

    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            callback(http.responseText);
        }
    };

    http.send(null);
}