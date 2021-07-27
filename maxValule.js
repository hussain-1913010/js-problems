// max value comparison between two elements
var a=10;
var b=20;
if(a>b){
    console.log("a is bigger");
}
else{
    console.log("b is bigger");
}

// max value comparison between three elements
var x=60;
var y=50;
var z=30;
if(x>y){
    if(x>z){
        console.log("x is bigger");
    }
    else{
        console.log("z is bigger");
    }
}
else{
    if(y>z){
        console.log("y is bigger");
    }
    else{
        console.log("z is bigger");
    }
}

// max value comparison between multiple elements in a shortcut way
var p=5;
var q=7;
var r=10;
var result=Math.max(p,q,r);
console.log(result);