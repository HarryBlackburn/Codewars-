/* The function findDigit takes two numbers as input, num and nth. It outputs the nth digit of num (counting from right to left).

#Note

If num is negative, ignore its sign and treat it as a positive value.
If nth is not positive, return -1.
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0.
#Examples

findDigit(5673, 4)     returns 5
findDigit(129, 2)      returns 2
findDigit(-2825, 3)    returns 8 */

var findDigit = function(num, nth) {
    var nthString = nth.toString();
    var n = num + "";
    var split = n.split("");
    var reverse = split.reverse();
    var final = reverse.join("");
    console.log(final + " "+ nthString);
    
    
    if (nth <= 0) {
    return -1;
    }
    return final.charAt(nthString-1)*1;
}
    