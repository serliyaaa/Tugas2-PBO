let nama;
let umur;

nama = prompt("Siapa nama anda?")
umur = prompt("Berapa usia anda?")

if(umur <= 20 && umur > 15){
    alert("Selamat datang," + nama +", usia anda" + umur +", anda belum cukup umur");
}else if(umur <= 15){
    alert("Selamat datang<" + nama +", usia anda" + umur +", anda belum cukup umur, anda terlalu muda");
}else{
    alert("selamat datang," + nama +" usia anda" + umur +", anda belum cukup umur, anda terlalu muda");
}


