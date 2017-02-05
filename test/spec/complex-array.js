const expect = require('chai').expect
    , merge = require('../..');

describe('safe-merge:', function() {

  it('should merge complex arrays', function(done) {
    const input = ['a', [3,2,1],'b', /bar/gim, 'c'];
    const output = merge(input, [/foo/gim, [1,2,3], /qux/]);
    expect(output).to.eql([/foo/gim, [3,2,1,1,2,3], /qux/, /bar/gim, 'c']);
    done();
  })

  it('should merge complex array properties', function(done) {
    const input = {ignore: [/layout.sgr$/]};
    const output = merge(input, {ignore: [/\.md$/]});
    expect(output).to.eql({ignore: [/layout.sgr$/, /\.md$/]});
    done();
  })

})

