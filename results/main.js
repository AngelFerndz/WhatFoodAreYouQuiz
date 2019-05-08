var answers = localStorage.getItem("answers");
var string = "You're a ";
string += build0(answers.charAt(0));
string += build1(answers.charAt(1));
string += build2(answers.charAt(2));

setResult(string);

function build0(index){
    var r = "";
    switch(index){
        case "a":
            r += "pizza with ";
            break;
        case "b":
            r += "plate of ";
            break;
        case "c":
            r += "cube of ";
            break;
    }
    return r;
}

function build1(index){
    var r = "";
    switch(index){
        case "a":
            r += "moldy ";
            break;
        case "b":
            r += "honey coated ";
            break;
        case "c":
            r += "coffee covered  ";
            break;
    }
    return r;
}

function build2(index){
    var r = "";
    switch(index){
        case "a":
            r += "pillows.";
            break;
        case "b":
            r += "baseballs.";
            break;
        case "c":
            r += "keyboards.";
            break;
    }
    return r;
}

function setResult(Text){
    changeElementValue("result",Text);
}

function back(){
    redirect("../index.html");
}
