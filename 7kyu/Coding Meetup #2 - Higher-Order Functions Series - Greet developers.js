/* You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >? */

function greetDevelopers(list) {
    var list = list.map((values) => {
    values.greeting = 'Hi ' + values.firstName + ', what do you like the most about ' + values.language + '?'
    console.log(values);
        return values 
    });
    console.log(list);   
        return list 
    
    };