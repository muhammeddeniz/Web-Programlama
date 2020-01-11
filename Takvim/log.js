
let bugun = new Date();
let buAy = bugun.getMonth();
let buYil = bugun.getFullYear();

var temp = [];
var tarih = "";

let aylar = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
];

let monthAndYear = document.getElementById("ay");
takvimGoster(buAy, buYil);
var saat;
var yil;
var gun; 
var ay;

function takvimGoster(ay, yil) {
    let firstDay = new Date(yil, ay).getDay();
    let daysInMonth = 32 - new Date(yil, ay, 32).getDate();


    let tbl = document.getElementById('calendar-body');

    tbl.innerHTML = "";

    monthAndYear.innerHTML = aylar[ay] + " " + yil;

    let sayacTarihi = 1;

    for (let i = 0; i < 6; i++) {
        let tr = document.createElement('tr');
        tr.setAttribute("style", "background : aqua");
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let td = document.createElement('td');
                td.setAttribute("style", "background : aqua");
                let tarihgunu = document.createTextNode('');

                td.appendChild(tarihgunu);
                tr.appendChild(td);

            } else if (sayacTarihi > daysInMonth) {
                break;

            } else {
                let td = document.createElement("td");
                td.setAttribute("style", "background : aqua");
                let tarihgunu = document.createTextNode(sayacTarihi);

                td.addEventListener("click", function () {

                    temp.push(td);

                    for (var i = 0; i < temp.length; i++) {
                        temp[i].style.background = "aqua";
                    }

                    if (tarihgunu.textContent == tr.firstChild.textContent || tarihgunu.textContent == tr.lastChild.textContent ) {
                        alert("Cumartesi ve Pazar Günleri Randevu Alamzsınız.");

                    } else {
                       yil = yil;
                       ay = Number(ay + 1);
                       gun = tarihgunu.textContent;

                        tarih = "Gün : " + tarihgunu.textContent + " \nAy : " + Number(ay + 1) + "\nYıl : " + yil;
                        td.style.background = "red";
                    }
                });


                td.appendChild(tarihgunu);
                tr.appendChild(td);
                sayacTarihi++;
            }
        }
        tbl.appendChild(tr);
    }
}

function Onceki() {
    buYil = buAy === 0 ? buYil - 1 : buYil;
    buAy = buAy === 0 ? 11 : buAy - 1;

    takvimGoster(buAy, buYil);

}


function Sonraki() {
    buYil = buAy === 11 ? buYil + 1 : buYil;
    buAy = (buAy + 1) % 12;

    takvimGoster(buAy, buYil);
}

function renkDegistir(temp, btnAdi) {
    hepsiniSifirla();
    document.getElementById(btnAdi).className = "btn btn-warning";
    saat = temp;
}
function hepsiniSifirla() {
    document.getElementById("btn1").className = "btn btn-success";
    document.getElementById("btn2").className = "btn btn-success";
    document.getElementById("btn3").className = "btn btn-success";
    document.getElementById("btn4").className = "btn btn-success";
    document.getElementById("btn5").className = "btn btn-success";
    document.getElementById("btn6").className = "btn btn-success";
    document.getElementById("btn7").className = "btn btn-success";
    document.getElementById("btn8").className = "btn btn-success";
}

function goster() {
    $("input[name *= 'rYili']").val(yil);
    $("input[name *= 'rAyi']").val(ay);
    $("input[name *= 'rGunu']").val(gun);
    if(saat == null){
        saat = "Saat Seçilmedi";
    }else{
        $("input[name *= 'rSaati']").val(saat);
    }
    
    alert(tarih + "\nSaat : " + saat);
}

