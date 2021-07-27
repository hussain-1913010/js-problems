var points=[10,20,30,40,50,60];
var sum=0;
for(var i=0; i<points.length; i++){
    var element=points[i];
    sum=sum+element;
}
console.log(sum);

// making these as a function
function arraySum(ars){
    var sum=0;
    for(var i=0; i<ars.length; i++){
        element=ars[i];
        sum=sum+element;
    }
    return sum;
}
var points=[10,20,30,40,50,70,60];
var result=arraySum(points);
console.log(result);

var result=arraySum([10,20,30,40,50,70,60,80]);
console.log(result);