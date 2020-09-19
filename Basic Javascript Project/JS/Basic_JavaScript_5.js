document.write(typeof 3);
document.write(typeof "<br> Word");

document.write("<br>"+ -3E310);
document.write("<br>"+ 3E310 + "<br>");

document.write(10>2);
document.write("<br>");
document.write(10<2);

console.log(2>10);

document.write("<br>10"+5 +"<br>");

document.write(10==10);
document.write("<br>");
document.write(3==10);
document.write("<br>");

x=10;
y=10;
document.write(x===y);
document.write("<br>");

a=10;
b="10";
document.write(a===b);
document.write("<br><br>");

document.write(5>2 && 10>4);
document.write("<br>");
document.write(5>10 && 10>4);
document.write("<br>");

document.write(5>2 || 10>4);
document.write("<br>");
document.write(5>10 || 10>4);
document.write("<br>");

function not_Function() {
    document.getElementById("Not").innerHTML=!(20>10);
}

function not_Function2() {
    document.getElementById("Not_2").innerHTML=!(5>10);
}