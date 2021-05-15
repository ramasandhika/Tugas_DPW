function pembilang(Num){
    var angka = ["","Satu","Dua","Tiga","Empat","Lima","Enam","Tujuh","Delapan","Sembilan","Sepuluh","Sebelas"];
    var hasil = "" ;
    var n = parseInt(Num) ;
    if(n >- 0, n <= 11){
        hasil = angka[n]
    } else if (n < 20) {
        hasil = pembilang(n -10) + " Belas ";
    } else if (n < 100) {
        hasil = pembilang(n / 10) + " Puluh " + pembilang(n % 10);
    } else if (n < 200) {
        hasil = "Seratus " + pembilang(n - 100);
    } else if (n < 1000) {
        hasil = pembilang(n / 100) + " Ratus " + pembilang(n % 100);
    } else if (n < 2000) {
        hasil = " Seribu " + pembilang(n - 1000);
    } else if (n < 1000000) {
        hasil = pembilang(n / 1000) + " Ribu " + pembilang(n % 1000);
    } else if (n < 1000000000) {
        hasil = pembilang(n / 1000000) + " Juta " + pembilang(n % 1000000);
    } else if (n < 1000000000000) {
        hasil = pembilang( n / 1000000000) + " Milyar " + pembilang(n % 1000000000);
    } else if (n < 1000000000000000) {
        hasil = pembilang(n / 1000000000000) + " Triliyun " + pembilang(n % 1000000000000);
    } else if (n == 1000000000000000) {
        hasil = "Satu Kuadriliun" ;
    } else {
        hasil = "Angka Hanya Sampai Satu Kuadriliun" ;
    }
    return hasil
}

function convert(Dom,Sub,Mny){
    var Money = parseInt(Mny)
    temp = 0
    if(Dom == "IDR"){
        if(Dom == "IDR", Sub == "IDR2"){
            op = Money * 1
            temp = op
        } else if(Dom == "IDR",Sub == "USD2"){
            op = Money * 0.00007
            temp = op
        } else if(Dom == "IDR",Sub == "EUR2"){
            op = Money * 0.000058
            temp = op
        } 
    } else if (Dom == "USD"){
        if(Dom == "USD",Sub == "USD2"){
            op = Money * 1
            temp = op
        } else if(Dom == "USD",Sub == "IDR2"){
            op = Money * 14284.10
            temp = op
        } else if(Dom == "USD",Sub == "EUR2"){
            op = Money * 0.82
            temp = op
        }
    } else if (Dom == "EUR"){
        if(Dom == "EUR",Sub == "EUR2"){
            op = Money * 1
            temp = op
        } else if(Dom == "EUR",Sub == "IDR2"){
            op = Money * 17345.28
            temp = op
        } else if(Dom == "EUR",Sub == "USD2"){
            op = Money * 1.21
            temp = op
        }
    }
    return temp
}

function klik(){
    var kurs = document.getElementById("Kurs").value ;
    var user = document.getElementById("Nominal").value ;
    var temp = pembilang(user) ;
    if(user == 0){
        document.getElementById("Result").innerHTML = 0 + kurs
    } else {
        document.getElementById("Result").innerHTML = temp + kurs
    }
}

function klik2(){
    var mny = document.getElementById("Nominal2").value
    var dom = document.getElementById("Dom").value
    var sub = document.getElementById("Sub").value
    var hasil = convert(dom,sub,mny)
    document.getElementById("Result2").innerHTML = hasil
}