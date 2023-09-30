const calc = "1234567890.-*/+";
const display = document.getElementById("display");
document.addEventListener("keyup",(e)=>{
    if (calc.includes(e.key)){
        display.value += e.key;
    }else if(e.key == "Backspace" || e.key == "Delete"){
        display.value = display.value.toString().slice(0,-1);
    }else if (e.key == "Enter"){
        display.value = eval(display.value);
    }
});