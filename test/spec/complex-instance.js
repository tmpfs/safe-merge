const expect = require('chai').expect
    , merge = require('../..');

class MockClone {
  clone() {
    return new MockClone();
  }
}

describe('safe-merge:', function() {

  it('should merge complex instances', function(done) {
    const input = [new MockClone()];
    const output = merge(input, [new MockClone(),2,3]);

    expect(output).to.eql([new MockClone(), 2, 3]);

    // check it is an instanceof
    expect(output[0]).to.be.an.instanceof(MockClone);

    // check that they are different instances
    expect(output[0]).to.not.equal(input[0]);

    done();
  })

})

