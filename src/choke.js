!(function(factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define('choke', factory);
  } else {
    window.choke = factory();
  }
})(function() {
  var timerID,
    choke = function(fx, delay) {
      return function(ev) {
        if (typeof fx !== 'function') {
          throw Error('Please provide a valid function');
        }
        if (timerID) {
          return;
        }

        timerID = window.setTimeout(function() {
          fx.call(null, ev);
          timerID = null;
        }, +delay || 0);
      }
    };

    return choke;
});
