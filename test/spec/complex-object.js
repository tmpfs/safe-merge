const expect = require('chai').expect
    , merge = require('../..');

describe('safe-merge:', function() {

  it('should merge complex objects', function(done) {
    const input = {a: 'def', b: 2, foo: 'bar'};
    const output = merge(input, {a: {n: 'q'}, b: 3, qux: 'bar'});

    // overrides `a` and `b`, adds `qux` and leaves `foo` intact
    expect(output).to.eql({a: {n: 'q'}, b: 3, qux: 'bar', foo: 'bar'});

    done();
  })

})

