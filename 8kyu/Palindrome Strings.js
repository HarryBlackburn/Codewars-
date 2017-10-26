/* A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers. */

function isPalindrome(line) {
    var re = /[^A-Za-z0-9]/g;
    var cleanString = line.toLowerCase().replace(re, ''); 
    var reverseString = cleanString.split('').reverse().join(''); 
    if (cleanString === reverseString) {
      return true; 
    }
      return false; 
      
    }