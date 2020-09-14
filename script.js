var code, user, attempt;
var a, b, c;
var gameover;
msg = document.getElementById("msg");
doc = document.getElementById("doc");
newTry();
 
function newTry(){
    doc.innerHTML = "";
    msg.innerHTML = "break the code";
    msg.className = "small";
    gameover = false;
    attempt = 1;
    
    
    code = [(Math.floor(Math.random() * 10)), (Math.floor(Math.random() * 10)), (Math.floor(Math.random() * 10))];
   

}




function guess(){
    if(gameover){
        return;
    }
    
    correct = 0;
    user = [document.getElementById("first").value, document.getElementById("second").value, document.getElementById("third").value];
    for(i = 0; i < 3; i++){
        if(user[i] == code[i]){
            correct++;
        }
    }
    doc.innerHTML += "" + user[0] + " " + user[1] + " " + user[2] + " || " + correct+ "<br>";
    if(correct == 3){
        msg.innerHTML = "you win!"
        msg.className = "big";
        gameover = true;
    }
    attempt++;
    if(attempt > 12){
        gameover = true;
        msg.innerHTML = "you lose!";
        msg.className = "big";
    }
}