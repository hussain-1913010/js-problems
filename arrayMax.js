var points=[10,20,30,40,50,60];
var maxValue=[0];
for(var i=0; i<points.length; i++){
    var element=points[i];
    if(element>maxValue){
        maxValue=element;
    }
}
console.log(maxValue);

// making these as a function 
function arrrayMax(arm){
    var maxValue=[0];
    for(var i=0; i<arm.length; i++){
        var element=arm[i];
        if(element>maxValue){
            maxValue=element;
        }
    }
    return maxValue;
}
var points=[10,20,30,40,50,60,70];
var output=arrrayMax(points);
console.log(output);

var output=arrrayMax([10,20,30,40,50,60,210,70]);
console.log(output);