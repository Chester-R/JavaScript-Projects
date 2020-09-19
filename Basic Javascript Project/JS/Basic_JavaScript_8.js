function full_Sentence() {
    var part_1= "I have ";
    var part_2= "made this ";
    var part_3= "into a complete ";
    var part_4= "sentence.";
    var whole_sentence = part_1.concat (part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML= whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    var n= Sentence.search("Johnny");
    document.getElementById("Slice").innerHTML=Section.toUpperCase(Section);
    document.getElementById("Search").innerHTML=n;
}

function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML=x.toString();
}

function precision_Method() {
    var Y= 12938.3012987376112;
    document.getElementById("Precision").innerHTML=Y.toPrecision(10);
}

function fixed_Method() {
    var num = 5.56589;
    var n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = n;
}

function value_Method() {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("value_of").innerHTML = res;
}