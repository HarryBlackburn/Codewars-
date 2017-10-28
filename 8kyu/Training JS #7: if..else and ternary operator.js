/* Condition and statement separated by "?", different statement separated by ":" in both Ruby and JS; in Python you put the condition in the middle of two alternatives. The two examples above can be simplified with ternary operator:

function oddEven(n){
  return n%2==1 ? "odd number" : "even number";
}
function oldYoung(age){
  return age<16 ? "children" : age<50 ? "young man" : "old man";
}
*/

function saleHotdogs(n){
    return n < 5 ? n * 100 : n >= 10 ? n * 90 : n * 95;
  }