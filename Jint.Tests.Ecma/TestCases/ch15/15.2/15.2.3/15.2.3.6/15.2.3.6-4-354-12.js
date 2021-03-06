/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-354-12.js
 * @description Object.defineProperty will update [[Value]] attribute of indexed property successfully when [[Configurable]] attribute is true and [[Writable]] attribute is false, 'O' is an Arguments object (8.12.9 - step Note)
 */


function testcase() {

        var obj = (function () {
            return arguments;
        }());

        Object.defineProperty(obj, "0", {
            value: 1001,
            writable: false,
            configurable: true
        });

        Object.defineProperty(obj, "0", {
            value: 1002
        });

        return dataPropertyAttributesAreCorrect(obj, "0", 1002, false, false, true);
    }
runTestCase(testcase);
