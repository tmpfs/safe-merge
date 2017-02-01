const expect = require('chai').expect
    , merge = require('../..');

describe('safe-merge:', function() {

  it('should only copy own properties', function(done) {

    function Foo() {
      this.bar = 'qux';
    }

    Foo.prototype.qux = 'qux';

    const input = new Foo();
    const output = merge(input, new Foo());
    expect(output).to.eql(new Foo());

    done();
  })

})

