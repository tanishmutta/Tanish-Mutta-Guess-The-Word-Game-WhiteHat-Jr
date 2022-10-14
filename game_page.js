player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn- " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn- " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in Lower Case = " + word);

   CharAt1 = word.CharAt(1);
   console.log(ChartAt1);

   length_divide_2 = Math.floor(word.length/2);
   CharAt2 = word.CharAt(length_divide_2);
   console.log(ChartAt2);

   length_minus_1 = word.length-1;
   CharAt3 = word.CharAt(length_minus_1);
   console.log(ChartAt3);

   remove_ChartAt1 = word.replace(CharAt1 , "_");
   remove_CharAt2 = remove_CharAt1.replace(CharAt2 , "_");
   remove_CharAt3 = remove_CharAt2.replace(CharAt3 , "_");
   console.log(remove_CharAt3);

   question_word = "<h4 id = word_display>Q. "+ remove_CharAt3 + "</h4>";
   input_box = "<br> answer: <input type = 'text' id = 'input_check_box'>";
   check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row = question_word + input_box + check_button;
   document.getElementById("output").innerHTML = row;
   document.getElementById("word").value = "";
}