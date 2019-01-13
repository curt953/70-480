"use strict";

/* This block of code contains the regExp verification */

function CheckString() {

    try {

        let s = $('#regExString').val();
        let regExpression = /^[A-Z,a-z]\d[A-Z,a-z][\s{1}]?\d[A-Z,a-z]\d$/;
        let results = regExpression.exec(s);

        if (results != null) {
            console.info('Valid postal code: ' + results[0]);
        }
        else {
            console.info('Invalid postal code.');
        }

    }
    catch (e) {
        console.error(e.message);
    }

}