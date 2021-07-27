var points=[10,20,30,40,50,60,70];
var maxValue=[0];
for(var i=0; i<points.length; i++){
    var element=points[i];
    if(element>maxValue){
        maxValue=element;
    }
}
console.log(maxValue);



function brickCalculator(n){
    if(n<0){
        return "Brick number cannot be negative. Enter a positive value.";
    }
    if(n<=10){
        return n*15*1000;
    }
    if(n>10 && n<=20){
        return 3*10*1000+n*12*1000;
    }
    if(n>20){
        return 5*10*1000+2*10*1000+n*10*1000;
    }
}
var result=brickCalculator(-50);
console.log(result);



var arr = ['first item', 'second item is longer than the third one', 
           'third longish item'];
var lgth = 0;
var longest;
for(var i=0; i < arr.length; i++){
    if(arr[i].length > lgth){
        var lgth = arr[i].length;
        longest = arr[i];
    }      
} 
console.log(longest);




var arr = ['audi','bmw','mercedes','ab','volks'];
var minValue = Infinity;
var smallest;
for(var i=0; i < arr.length; i++){
    if(arr[i].length < minValue){
        var minValue = arr[i].length;
        smallest = arr[i];
    }      
} 
console.log(smallest);


function tinyFriend(aray){
    var minValue = Infinity;
    var smallest;
    for(var i=0; i < aray.length; i++){
        if(aray[i].length < minValue){
            var minValue = aray[i].length;
            smallest = aray[i];
        }      
    }
    return smallest;
}
var result = tinyFriend(['audi','bmw','mercedes','ab','volks']);
console.log(result);




