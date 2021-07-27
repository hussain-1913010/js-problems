var speech="hello there    i am Muneem Hussain"
var count=0;
for(var i=0; i<speech.length;i++){
    var word = speech[i];
    if(word == " " && speech[i-1] !=" "){
        count++;
    }
}
count++;
console.log(count);