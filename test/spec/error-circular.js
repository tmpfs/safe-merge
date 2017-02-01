const expect = require('chai').expect
    , merge = require('../..');

describe('safe-merge:', function() {

  it('should error on circular reference', function(done) {
    const a = {};
    const b = {a: a}
    a.b = b;

    const input = a;

    function fn() {
      merge({}, input);
    }

    console.log(a.__visited)

    expect(fn).throws(Error);

    done();
  })

})

