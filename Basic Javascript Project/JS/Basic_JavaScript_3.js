function add_Function() {
    var Addition= 2+2;
    document.getElementById("Math").innerHTML="2+2=" + Addition;
}

function sub_Function() {
    var Subtraction= 5-2;
    document.getElementById("Math2").innerHTML="5-2=" + Subtraction;
}

function mul_Function() {
    var Multiplication= 6*8;
    document.getElementById("Math3").innerHTML="6x8=" + Multiplication;
}

function div_Function() {
    var Division= 48/6;
    document.getElementById("Math4").innerHTML="48/6 =" + Division;
}

function multi_Op_Function() {
    var simple_Math= (1+2)*10/2-5;
    document.getElementById("Math5").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function mod_operator() {
    var Modulus= 25%6;
    document.getElementById("Math6").innerHTML="When you divide 25 by 6, you have a remainder of: " + Modulus;
}

function uni_operator() {
    var x= 10;
    document.getElementById("Math7").innerHTML= -x;
}


var i = 5 ;
i++;
document.write("Increment of 5 is " + i + "<br>");

var i = 5 ;
i--;
document.write(" Decrement of 5 is " + i);

window.alert(Math.round(Math.random()));

document.getElementById("demo").innerHTML = 
"The sine value of 90 degrees is " + Math.sin(90 * Math.PI / 180);