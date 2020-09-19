function my_Function() {
    document.getElementById("Test").innerHTML= isNaN('0087')
}

function get_Date() {
    if (new Date().getHours() <18) {
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}