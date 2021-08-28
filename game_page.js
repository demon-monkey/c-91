var player_1n = localStorage.getItem("player_1key");
var player_2n = localStorage.getItem("player_2key");

document.getElementById("player1_name").innerHTML = player_1n + " : ";
document.getElementById("player2_name").innerHTML = player_2n + " : ";

var player1s = 0;
var player2s = 0;

document.getElementById("player1Score").innerHTML = player1s;
document.getElementById("player2Score").innerHTML = player2s;

document.getElementById("player_question").innerHTML = "Question Turn:" + player_1n;
document.getElementById("player_answer").innerHTML = "Answer Turn:" + player_2n;

function send() {
    getWord = document.getElementById("word").value;
    if (getWord == "" || getWord.length < 5) {
        document.getElementById("l1").innerHTML = "Enter word with more the 5 letters !"
    } else {
        word = getWord.toLowerCase();
        console.log(word);
        char_1 = word.charAt(1);
        console.log(char_1);
        pos_2 = Math.floor(word.length / 2);
        char_2 = word.charAt(pos_2);
        console.log(char_2);
        char_3 = word.charAt(word.length - 1);
        console.log(char_3);
        U_1 = word.replace(char_1, "_");
        U_2 = U_1.replace(char_2, "_");
        U_3 = U_2.replace(char_3, "_");
        console.log(U_3);
        question = "<h3 id='word_display'>Q." + U_3 + "</h3>";
        input_box = "<br>Answer:<input id='input_check_box'>"
        button_tag = "<br><br><button class='btn btn-info' onclick='check()'>Check Answer</button>"
        row = question + input_box + button_tag;
        document.getElementById("output").innerHTML = row;
        document.getElementById("word").value = ""
    }
}
var Q_turn = "player1"
var A_turn = "player2"

function check() {
    getAnswer = document.getElementById("input_check_box").value;
    answer = getAnswer.toLowerCase();
    if (answer == word) {
        if (A_turn == "player1") {
            player1s = player1s + 1;
            document.getElementById("player1Score").innerHTML = player1s;
        } else {
            player2s = player2s + 1;
            document.getElementById("player2Score").innerHTML = player2s;
        }
    }
    if(Q_turn=="player1"){
        Q_turn="player2";
        document.getElementById("player_question").innerHTML = "Question Turn:" + player_2n;
    }
    else{
        Q_turn="player1";
        document.getElementById("player_question").innerHTML = "Question Turn:" + player_1n;
    }
    if(A_turn=="player2"){
        A_turn="player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn:" + player_1n;
    }
    else{
        A_turn="player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn:" + player_2n;
    }
    document.getElementById("output").innerHTML="";
}