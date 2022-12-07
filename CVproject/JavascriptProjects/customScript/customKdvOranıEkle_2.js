var kdvOranları = [];
var select = document.querySelector('#kdvOranları');
var kdvOranDegeri;
var kdvOranDegeriKontrol;

function kdvOranDegeriEkle() {
    kdvOranDegeri = Number(document.getElementById("kdvOranıDegeri").value);
    if (!kdvOranları.includes(kdvOranDegeri)) {
        kdvOranları.push(kdvOranDegeri);
        var option = new Option(kdvOranDegeri);
        select.add(option);
    }
    // yukarıdaki if ile aynı kdv değerinin eklenmemesini sağladık!!!!
}

function kdvOranDegeriKontrolEt() {
    kdvOranDegeri = Number(document.getElementById("kdvOranıDegeri").value);
    var diziKontrol=kdvOranları.filter(s => s<=kdvOranDegeri);
    if (diziKontrol== kdvOranDegeri) {
        console.log("zaten var");
    }
    else if (kdvOranDegeriKontrol !== "undefined" && diziKontrol != kdvOranDegeri) {
        kdvOranları.push(kdvOranDegeri);
        var option = new Option(kdvOranDegeri);
        select.add(option);
    } 
}


var btn2= document.getElementById("kdvHesaplaBtn");
btn2.onclick = function KdvHesapla() {
    var birinciSayi = Number(document.getElementById("sayi1").value);
    var oran= (select.value);
    var sonuc= (birinciSayi * oran) / 100;
    document.getElementById("sonuc").value = sonuc;
}