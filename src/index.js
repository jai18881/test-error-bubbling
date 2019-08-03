window.onerror = function (msg, url, lineNo, columnNo, error) {
    console.log('test error called......');
    var string = msg.toLowerCase();
    var substring = "script error";
    if (string.indexOf(substring) > -1) {
        alert('Script Error: See Browser Console for Detail');
    } else {
        var message = [
            'Message: ' + msg,
            'URL: ' + url,
            'Line: ' + lineNo,
            'Column: ' + columnNo,
            'Error object: ' + JSON.stringify(error)
        ].join(' - ');

        alert(message);
    }
};

const testObj = function() {
    }
    testObj.prototype.testError = function () {
    const obj = {};
    setTimeout(() => {
        console.log(obj.prop1.prop2);
    }, 2000);
    // console.log(obj.prop1.prop2);
};

const test = new testObj();
