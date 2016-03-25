'use strict';

module.exports = function (p, exp) {
  for (var i = 0; i < exp.length; i++) {
    if (p.match(exp[i])) {
      var s = p.match(exp[i]);
      p = String(s);
    }
  }
  return p;
};
