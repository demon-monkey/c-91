function addUser(){
    player_1=document.getElementById("player1Nm").value;
    player_2=document.getElementById("player2Nm").value;

    localStorage.setItem("player_1key",player_1);
    localStorage.setItem("player_2key",player_2);

    window.location="game_page.html";
}
