const choke = require('../src/choke.js');

describe('choke test', function() {
  it('should throw error when first param is not a function', function() {
    expect(choke([])).toThrow(Error);
  });

  it('should throttle number of calls made to a function', function(done) {
    let i = 0;
    const stub = jest.fn(),
      throttledFunction = choke(stub, 500); // 1 call per 500 ms

    let t1 = performance.now();
    for (; i < 5; i++) {  // number of calls made within 500 ms
      throttledFunction();
    }
    let t2 = performance.now();

    console.log('time elapsed:', t2 - t1, ' ms')

    setTimeout(function() {
      expect(stub).toHaveBeenCalled();
      done();
    }, 500);
  });
});
