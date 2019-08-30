let runningTotal = 0;
let buffer = "0";//buffer is what will hold user input and is a string
let previousOperator;//tracks last user enter operation
const screen = document.querySelector
document.querySelector('calc-buttons').addEventListener("click", function(event) {
    buttonClick(event.target.valuer);
})

function buttonClick(value) {
    if (isNaN(parseInt(value))){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
}//this function spliuts the code paths based on whether the passed value is a number or a symbol

function handleNumber(value){
    if(buffer === "0"){
        buffer= value;
    }else{
        buffer += value;
    }
    rerender();
}

function handleSymbol(value){

}
function rerender(){
    screen.innerText = buffer;
}