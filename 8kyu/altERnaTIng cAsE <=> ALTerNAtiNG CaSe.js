/* Define to_alternating_case(char*) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. */ 

String.prototype.toAlternatingCase = function () {
    
    var flipped = "";
      
      for ( i = 0; i < this.length; i ++) {
        let letter = this[i];
            letter = letter.charCodeAt() <= 90 ? letter.toLowerCase() : letter.toUpperCase(); 
            flipped += letter; 
        }
    
    return flipped; 
}