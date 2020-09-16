var x= "hello world!";
window.alert(x);


var blue= "I have Blue." , red="I have Red", yellow="I have Yellow", green="I have Green";
var blue= blue.fontcolor("blue"), red= red.fontcolor("red") , yellow= yellow.fontcolor("yellow"),
    green= green.fontcolor("green");
document.write("Yellow + Blue =");
document.write(green);

function My_First_Function() {              //Defining a function and naming it
    var str= "This text is green!";         //Defining a variable and giving it a string value
    var result= str.fontcolor("green");     //Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result;
}

