let answer = document.getElementById("answer");

function appendToDisplay(input){
    answer.value += input;
}

function clearDisplay(){
    answer.value = "";
}

function calculate(){
    try{
        answer.value = eval(answer.value);
    }
    catch(error){
        answer.value = "Error";
    }
}
