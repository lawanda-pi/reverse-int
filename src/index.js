module.exports = function reverse (n) {
 let a = Math.abs(n);
 a = a + "";
 return a.split("").reverse().join(""); 
}
