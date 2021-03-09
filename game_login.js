function adduser(){
 var player_1=document.getElementById("player1").value;
 var player_2=document.getElementById("player2").value; 
 localStorage.setItem("player1_name", player_1);
 localStorage.setItem("player2_name", player_2); 
 window.location="game_page.html";
}

