function changeMoney() {
    let giaTriVao = document.getElementById('dauvao').value;
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;

    if (from==to){
       document.getElementById('result').innerHTML  = 'Result :' + 'Đ';
    }
    if(from=="VND" && to=="USD"){
        document.getElementById('result').innerHTML = 'Result :' + (giaTriVao/24000);

    }
    if (from=="USD" && to=="VND"){
        document.getElementById('result').innerHTML = 'Result :' + (giaTriVao*24000);
    }
}