onmessage = function (evt) {

    let work = 10000000;
    let i;
    let a = new Array(work);
    let sum = 0;

    for(i = 0; i < work; i++) {
        a[i] = i * i;
        sum += i * i;
    }

    self.postMessage(sum);
};