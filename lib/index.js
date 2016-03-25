'use strict';

module.exports = function (string, exp) {
  return new Promise(function(resolve, reject) {
    for (var i = 0; i < exp.length; i++) {
      if (!string) {
        reject('Input needed, "string" is: ' + undefined);
      }
      if (string.match(exp[i])) {
        var s = string.match(exp[i]);
        string = String(s);
      }
    }
    resolve(string);
  });
};
