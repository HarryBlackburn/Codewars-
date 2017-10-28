/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg" */

function doubleChar(str) {
    return str.replace(/(.)/g, "$1$1")
}