var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1name").innerHTML = player1_name + ": ";
document.getElementById("player2name").innerHTML = player2_name + ": ";
document.getElementById("player1score").innerHTML = player1_score;
document.getElementById("player2score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "question turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn - " + player2_name;

function send() {
    var word_save = document.getElementById("word").value;
    var wordlc = word_save.toLowerCase();
    var chracter1 = wordlc.charAt(1);

    var positioncenter = Math.floor(wordlc.length / 2);
    var chracter2 = wordlc.charAt(positioncenter);

    var lastpostion = wordlc.length - 1;
    var character3 = wordlc.charAt(lastpostion);

    var replace_char1 = wordlc.replace(chracter1, "_");
    var replace_char2 = replace_char1.replace(chracter2, "_");
    var replace_char3 = replace_char2.replace(character3, "_");


    question_word = "<h4 id='word_display'> Q. " + replace_char3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = ""
}

var question_turn= "player1" ;
var answer_turn= "player2";

function check(){
var answer_input= document.getElementById("input_check_box").value;
var answer_intolowercase= answer_input.toLowerCase();
console.log(answer_intolowercase);
if (answer_intolowercase==wordlc){
 if (answer_turn=="player1"){
  player1_score= player1_score+1;
  document.getElementById("player1score").innerHTML=player1_score;

 } 
 else {
 player2_score= player2_score+1;
 document.getElementById("player2score").innerHTML=player2_score;
 }
}
if (question_turn=="player1"){
 question_turn="player2";
 answer_turn="player1";
 document.getElementById("player_question").innerHTML = "question turn - " + player2_name;
 document.getElementById("player_answer").innerHTML = "answer turn - " + player1_name;
}
else{
 question_turn="player1" 
 answer_turn="player2" 
 document.getElementById("player_question").innerHTML= "question turn - " + player1_name;
  
  
}
document.getElementById("output").innerHTML="";

}