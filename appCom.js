

function addition() {
    let num1 = Number(document.getElementById("setNum1").value);
    let num2 = Number(document.getElementById("setNum2").value);
    let s = parseInt(num1)+num2;
    document.getElementById('result').innerHTML  = 'Result :' +s;
}
function subtraction() {
    let num1 = Number(document.getElementById("setNum1").value);
    let num2 = Number(document.getElementById("setNum2").value);
    let sub = parseInt(num1)-num2;
    document.getElementById('result').innerHTML  = 'Result :' +sub;
}
function multiplication() {
    let num1 = Number(document.getElementById("setNum1").value);
    let num2 = Number(document.getElementById("setNum2").value);
    let mul = parseInt(num1)*num2;
    document.getElementById('result').innerHTML  = 'Result :' + mul;
}
function division() {
    let num1 = Number(document.getElementById("setNum1").value);
    let num2 = Number(document.getElementById("setNum2").value);
    let divi = parseInt(num1)/num2;
    document.getElementById('result').innerHTML  = 'Result :' +divi;
}