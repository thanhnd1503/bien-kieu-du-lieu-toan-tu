// Bài 1
function printSomething() {
    let i = 10
    let f = 20.5
    let b = true
    let s = 'Hà Nội'
    document.write('i = ' + i)
    document.write('<br/>')
    document.write('f = ' + f)
    document.write('<br/>')
    document.write('b = ' + b)
    document.write('<br/>')
    document.write('s = ' + s)
}

// Bài 2
function printArea() {
    let width = 20
    let height = 10
    let area = width * height
    document.write('Area = ' + area)
}

// Bài 3
function area() {
    let a = prompt("Enter a:");
    let b = prompt("Enter b:");
    let c = a%b;
    if(c==0){
        alert(a + "chia het cho" + b);
    }else {
        alert(a + "kh chia het cho"+ b);
    }
}
//area nhập từ bàn phím
function Dientich() {
    let inputWidth = prompt("Enter the width");
    let inputHeight = prompt("Enter the height");
    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);
    let area= width*height;
    alert(area);
}
//Điểm trung bình và tổng
function averageAndSum() {
    let inputMath = prompt("Enter point of math:");
    let inputPhysics = prompt("Enter point of Physics:");
    let inputChemistry = prompt("Enter point of Chemistry:");
    let math = parseInt(inputMath);
    let physics = parseInt(inputPhysics);
    let chemistry = parseInt(inputChemistry);
    let sum = math+physics+chemistry;
    let average  = sum/3;
    document.write("Tổng điểm 3 môn là :" + sum);
    document.write('<br>')
    document.write("Điểm trung bình 3 môn là :" + average);
}
// Chuyển đổi độ C sang độ F
function Convert() {
    let inputCelsius = prompt("Enter the Celsius");
    let celsius = parseFloat(inputCelsius,10);
    let fahrenheit = ((celsius*9)/5)+32;
    document.write("F =" +fahrenheit);
}
//Diện tích hình tròn
function circleDiameterAndArea() {
    const PI = 3.14159;
    let inputR = prompt("Enter R");
    let R = parseFloat(inputR,10);
    let s = R*R*PI;
    let c = R*2*PI;
    document.write("Diện tích hình tròn là :" + s);
    document.write('<br>')
    document.write("Chu vi hình tròn là : " + c);
}




