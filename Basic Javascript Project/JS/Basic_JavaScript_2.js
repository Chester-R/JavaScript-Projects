function my_Function() {
    var str= "Chester";
    var result= str.fontcolor("red");
    document.getElementById("my_Name").innerHTML=result;
}

function my_Age_Function() {
    var sentence= "I'm ";
    sentence += "23 years old.";
    document.getElementById("my_Age").innerHTML= sentence;
}