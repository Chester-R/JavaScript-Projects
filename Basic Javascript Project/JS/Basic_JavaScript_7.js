//#1
var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

//#2
function Add_numbers_1() {
    console.log(20 + x + "<br>");
}
function Add_numbers_2() {
    console.log(x + 100);
}
Add_numbers_1();
Add_numbers_2();

//#3
if (4<20){
    document.write("<br>Left is less than right.")
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote="You are old enough to vote.";
    }
    else {
        Vote = "You are not old enough to vote.";
    }
    document.getElementById("How_old_are_you?").innerHTML=Vote;
}

//#4
function Time_function() {
    var Time= new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Morning Time!";
    }
    else if (Time >12 == Time < 18) {
        Reply = "Afternoon Time!";
    }
    else {
        Reply = "Evening Time!";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}