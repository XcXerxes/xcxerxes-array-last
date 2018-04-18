'use strict'

require('mocha')
var assert = require('assert')
var flatten = require('../lib')

describe('flatten', function () {
  it('should flatten nested arrays', function () {
    assert.deepEqual(flatten(['a', 'b', ['c'], ['d'], ['e']]), ['a', 'b', 'c', 'd', 'e'])
  })
  it('should flatten deeply nested arrays:', function () {
    assert.deepEqual(flatten(['a', [[[[[[[['b', [['c']]]]]], 'd', ['e']]]]]]), ['a', 'b', 'c', 'd', 'e'])
    assert.deepEqual(flatten(['a', 'b', ['c'], 'd', ['e']]), ['a', 'b', 'c', 'd', 'e'])
  })
})
