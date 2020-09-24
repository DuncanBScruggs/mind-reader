var content = document.getElementById("content").innerHTML;
var top = document.getElementById("top").innerHTML;

var sym = ["~","!","@","#","$","%","^","&","*","?"]

var st = 0;

var ans = null;

function randomSymbol(){
    var a = sym[Math.floor(Math.random() * 10)];
    str = "";
    for(var i = 0; i <= 99; i++){
        if(i % 9){
            str += i + " = " + sym[Math.floor(Math.random() * 10)] + "<br>"
        }
        else{
            str += i + " = " + a + "<br>"
            ans = a;
        }
    }
    return str;
}

function next(){
    st++;
    update();
}

function reset(){
    st = 0;
    update();
}

var element =document.getElementById("top");

function update() {
    switch(st){
        case 0:
            element.classList.add("align-items-center"); // re-add align center if reset on case 4
            document.getElementById("top").innerHTML ="I can read your mind";
            document.getElementById("content").innerHTML ="OoOoOoOoOoOoOo";
            document.getElementById("btnC").style.visibility = "initial";
            document.getElementById("btnR").style.visibility = "hidden";
            break;
        case 1:
            document.getElementById("top").innerHTML ="Pick a number from 01 - 99";
            document.getElementById("content").innerHTML ="When you have it <br> click to continue.";
            document.getElementById("btnC").style.visibility = "initial";
            document.getElementById("btnR").style.visibility = "initial";
            break;
        case 2:
            document.getElementById("top").innerHTML ="Add both digits together to get a new number.";
            document.getElementById("content").innerHTML ="Ex: 14 is 1 + 4 = 5 <br> click to continue.";
            document.getElementById("btnC").style.visibility = "initial";
            document.getElementById("btnR").style.visibility = "initial";
            break;
        case 3:
            document.getElementById("top").innerHTML ="Subtract your new number from the original number.";
            document.getElementById("content").innerHTML ="Ex: 14 - 5 = 9 <br> click to continue.";
            document.getElementById("btnC").style.visibility = "initial";
            document.getElementById("btnR").style.visibility = "initial";
            break;
        case 4:
            element.classList.remove("align-items-center"); // removes align center so it gets all numbers
            var str = randomSymbol();
            document.getElementById("top").innerHTML = str;
            document.getElementById("content").innerHTML ="Find your new number. <br> Note the symbol beside the number.";
            document.getElementById("btnC").style.visibility = "initial";
            document.getElementById("btnR").style.visibility = "initial";
            break;
        case 5:
            element.classList.add("align-items-center"); // re-add align center
            document.getElementById("top").innerHTML = ans;
            document.getElementById("content").innerHTML ="Your symbol is : " + ans;
            document.getElementById("btnC").style.visibility = "hidden";
            document.getElementById("btnR").style.visibility = "initial";
            break;
    }
}
update();