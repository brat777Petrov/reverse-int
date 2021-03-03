module.exports = function reverse (n) {
  if ( n < 0 ) n = n * (-1) ;
    var z;
    n = n + '';
    return z = n.split('').reverse().join('');
}
