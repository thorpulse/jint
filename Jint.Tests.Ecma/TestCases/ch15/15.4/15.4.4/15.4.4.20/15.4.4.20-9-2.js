/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.20/15.4.4.20-9-2.js
 * @description Array.prototype.filter considers new value of elements in array after it is called
 */


function testcase() { 
 
  function callbackfn(val, idx, obj)
  {    
    srcArr[2] = -1;
    srcArr[4] = -1;
    if(val > 0)
      return true;
    else
      return false;
  }

  var srcArr = [1,2,3,4,5];
  var resArr = srcArr.filter(callbackfn);
  if(resArr.length === 3 && resArr[0] === 1 && resArr[2] === 4)
      return true;  
  
 }
runTestCase(testcase);