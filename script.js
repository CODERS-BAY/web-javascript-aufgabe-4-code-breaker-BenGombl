var code, user, attempt;
var correctNum, correctPlace;
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
    
    correctNum = 0;
    correctPlace = 0;
    user = [document.getElementById("first").value, document.getElementById("second").value, document.getElementById("third").value];
    for(i = 0; i < 3; i++){
        if(user[i] == code[i]){
            correctPlace++;
        }
        if(user[i] == code[0]||user[i] == code[1]||user[i] == code[2]){
            correctNum++;
        }
        
    }
    doc.innerHTML += "" + user[0] + " " + user[1] + " " + user[2] + " || " + correctNum + " correct | " + correctPlace + " right place<br>";
    if(correctPlace == 3){
        msg.innerHTML = "you win!"
        msg.className = "big";
        gameover = true;
    }
   
    else if(attempt > 12){
        gameover = true;
        msg.innerHTML = "you lose!";
        msg.className = "big";
    }
    
    attempt++;
}