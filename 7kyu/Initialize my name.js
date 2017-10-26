/* Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

For example,

'Jack Ryan' => 'Jack Ryan'
'Lois Mary Lane' => 'Lois M. Lane'
'Dimitri' => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis' */

function initializeNames(name) {
        console.log(name);
    if (name.split(' ').length <= 2) {
      return name; 
    }
    
    var sliced = name.split(' ').slice(1, -1);
        console.log(sliced);
        var middleNameCap = ''
        for (i = 0; i < sliced.length; i ++) {
            middleNameCap += sliced[i].charAt(0) + '. '; 
        }
        console.log(name.split(' ').slice(1,2));
        console.log(name.split(' ').slice(-1)); 
    
    return (name.split(' ').slice(0,1)) + (' ') + middleNameCap + name.split(' ').slice(-1);
}