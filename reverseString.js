var spech="hi there i am muneem";
var doReverse="";
for(var i=0; i<spech.length; i++){
    var char=spech[i];
    doReverse=char+doReverse;
}
console.log(doReverse);

// making these with function
function reverseString(str){
    var reverse="";
    for(var i=0; i<str.length; i++){
        var char = str[i];
        reverse=char+reverse;
    }
    return reverse;
}
var makeReverse="amader deshe hobe sei chele kobe je kothay na boro hoye kaje boro hobe";
var result=reverseString(makeReverse);
console.log(result);

var result=reverseString("nesha kete gele tumio kete jabe ...gaja khao");
console.log(result);