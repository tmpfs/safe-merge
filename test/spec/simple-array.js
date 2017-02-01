const expect = require('chai').expect
    , merge = require('../..');

describe('safe-merge:', function() {

  it('should merge simple arrays', function(done) {
    const input = ['a'];
    const output = merge(input, [1,2,3]);

    expect(output).to.eql([1,2,3]);

    done();
  })

})

