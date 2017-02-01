const expect = require('chai').expect
    , merge = require('../..');

describe('safe-merge:', function() {

  it('should ignore non-complex source', function(done) {
    const input = 'foo';
    const output = merge(input);
    expect(output).to.equal(input);
    done();
  })

  it('should ignore non-complex input', function(done) {
    const input = [1,2,3];
    const output = merge(input, 'foo');
    expect(output).to.eql(input);
    done();
  })

})

