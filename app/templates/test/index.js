'use strict'

var test = require('tape')
var <%= safeSlugname %> = require('../')

test('awesomeness', function (t) {
  t.ok(<%= safeSlugname %>() === 'awesome', 'module must be awesome')
  t.end()
})
