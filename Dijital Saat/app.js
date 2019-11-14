var box = document.getElementById("saat");

function saatHesapla() {
    var time = new Date();

    var saat = time.getHours().toString();
    var dakika = time.getMinutes().toString();
    var saniye = time.getSeconds().toString();

    if(saat.length < 2){
        saat = "0" + saat;
    }
    else if(dakika.length < 2){
        dakika = "0" + dakika;
    }
    else if(saniye.length < 2){
        saniye = "0" + saniye;
    }

    var zaman = saat + " : " + dakika + " . " + saniye;
    box.textContent = zaman;

}
setInterval(saatHesapla, 1);


