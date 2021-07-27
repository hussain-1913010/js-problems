var points=[10,20,30,10,40,50,40,50,20,60];
var unique=[];
for(var i=0; i<points.length; i++){
    var element=points[i];
    var indexno=unique.indexOf(element);
    if(indexno == -1){
        unique.push(element);
    }
}
console.log(unique);

// making these as a function
function arrayDuplicate(ard){
    var unique=[];
    for(var i=0; i<ard.length; i++){
        var element=ard[i];
        var index=unique.indexOf(element);
        if(index == -1){
            unique.push(element);
        }
    }
    return unique;
}
var points=[10,20,30,10,128,5,5,40,50,40,50,20,60];
var result=arrayDuplicate(points);
console.log(result);

var result=arrayDuplicate([10,20,30,10,5,5,40,50,40,50,20,60]);
console.log(result);