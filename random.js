var dice=Math.random()*6;
var output=Math.round(dice);
console.log(output);

// in shortcut way
var result=Math.round(Math.random());
console.log(result);

// elaborate process in a for loop ...for every 10th times
for(var i=0; i<10; i++){
    var dice=Math.random()*6;
    var output=Math.round(dice);
    console.log(output);
}