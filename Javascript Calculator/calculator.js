function calculation(){
let no1 = document.querySelector("#a").value;
let num1 = parseFloat(no1);
let no2 = document.getElementById("b").value;
let num2 = parseFloat(no2);
let operation = document.getElementById("operators").value;
let ans;
if(operation=="+"){
    ans = num1 + num2;
 
}
else if(operation=="-"){
    ans = num1 - num2;
  
}
else if(operation=="*"){
    ans = num1*num2;
   
}
else if(operation=="/"){
    ans = num1/num2;
    
}
display(ans);
}
function display(ans){
    document.getElementById("answer").innerHTML = ans;
    console.log(ans);
}
function empty(){
    document.getElementById("answer").innerHTML = "";
}
