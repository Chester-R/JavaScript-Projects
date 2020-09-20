function Call_Loop() {
    var Digit= "";
    var X=1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loops").innerHTML=Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y=0 ; Y<Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0]= "Sleeping";
    Cat_Picture[1]= "Playing";
    Cat_Picture[2]= "Eating";
    Cat_Picture[3]= "Purring";
    document.getElementById("Array").innerHTML= "In this picture, the cat is "+ Cat_Picture[3]+".";
}

function constant_function() {
    const Musical_Instrument = {ype:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price= "$900";
    document.getElementById("Constant").innerHTML= "The cost of the " + 
        Musical_Instrument.type + " was " + Musical_Instrument.price + ".";
    
}

var M=100;
document.write(M);
{
    let M = 20;
    document.write("<br>" + M);
}
document.write("<br>" + M);

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML=car.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("Break").innerHTML = text;