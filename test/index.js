'use strict';

var assert = require('assert');
var checkForMatch = require('../lib');

describe('check-for-match', function () {
  it('test checkForMatch should return "-el/io-el.html"', function () {
    assert(checkForMatch(String('elements/io-el/io-el.html'), [/-(.*).html/g, /\\(.*)-(.*).*/g]), '-el/io-el.html');
  });
});
