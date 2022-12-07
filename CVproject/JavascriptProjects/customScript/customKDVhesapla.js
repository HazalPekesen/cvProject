var select = document.querySelector('#select');
select.onchange = function KDVgetir() {
    var birinciSayi = Number(document.getElementById("sayi1").value);
    var oran= (this.value);
    var sonuc= (birinciSayi * oran) / 100;
    document.getElementById("sayi2").value = sonuc;
}