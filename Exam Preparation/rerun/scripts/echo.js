onmessage = function (e) {
    setTimeout(function () {
        postMessage(e.data.message);
    }, e.data.timeout * 1000);
};