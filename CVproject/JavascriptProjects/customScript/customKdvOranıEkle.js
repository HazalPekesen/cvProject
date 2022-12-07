var btn = document.getElementById("kdvOranEkleBtn");
btn.onclick = function KdvOranıEkle() {
        var optionElemanlari = "<option>" + document.getElementById('kdvOranıGir').value + "</option>";
        document.getElementById('select').innerHTML+= optionElemanlari;
}


var btn2= document.getElementById("kdvHesaplaBtn");
btn2.onclick = function KdvHesapla() {
    var birinciSayi = Number(document.getElementById("sayi1").value);
    var oran= (select.value);
    var sonuc= (birinciSayi * oran) / 100;
    document.getElementById("sonuc").value = sonuc;
}
