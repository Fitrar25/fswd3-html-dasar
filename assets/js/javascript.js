confirm("Selamat Datang dipermainan sederhana");
let nama = prompt("Masukkan nama anda :");
let game = prompt("Halo " + nama + ", silahkan ketik gunting, batu, atau kertas :");
if (game == "gunting"){
    alert(game + " melawan kertas = Anda Menang!!");
}else if(game == "batu"){
    alert(game + " melawan kertas = Anda Kalah!!");
}else if(game == "kertas"){
    alert(game + " melawan kertas = Anda Seri!!");
}