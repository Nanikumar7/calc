 const display=document.getElementById("display");

function appendValue(input){
    display.value += input;
}
function clearDisplay(){
    
    display.value= "";
}
function compute(){
    try{

        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}

