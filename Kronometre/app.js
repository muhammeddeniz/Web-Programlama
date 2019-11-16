var control = false;
var intervalId = 0;
var deneme = false;
var deneme2 = false;

function baslat() {
    if (deneme == false && deneme2 == false) {
        var counter = 0;
        var saniye = 0;
        var dakika = 0;
        var saat = 0;
        deneme = true;
        deneme2 = true;

        function timer() {
            var sayac = document.getElementById("kronomtre");
            counter++;

            if (counter == 100) {
                counter = 0;
                saniye += 1;
            }
            if (saniye == 60) {
                saniye = 0;
                dakika += 1;
            }
            if (dakika == 60) {
                dakika = 0;
                saat += 1;
            }

            var a = counter.toString();
            var b = saniye.toString();
            var c = dakika.toString();
            var d = saat.toString();

            if (a.length < 2) {
                a = "0" + a;
            }
            if (b.length < 2) {
                b = "0" + b;
            }
            if (c.length < 2) {
                c = "0" + c;
            }
            if (d.length < 2) {
                d = "0" + d;
            }

            var sonuc = d + " . " + c +
                " . " + b + " . " + a;
            console.log(sonuc);

            sayac.textContent = sonuc;
        }

        intervalId = setInterval(timer, 10);

    }
}
function durdur() {
    if (deneme == true) {
        deneme = false;
        clearInterval(intervalId);
    }
}
function sifirla() {
    if (deneme2 == true) {
        deneme2 = false;
        clearInterval(intervalId);
        document.getElementById("kronomtre").textContent = "00 . 00 . 00 . 00";
    }
}
