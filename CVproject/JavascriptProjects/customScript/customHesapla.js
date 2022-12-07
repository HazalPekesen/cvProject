function topla() {
    var hesaplamadanGelenSayilar = HesaplamaDegerleri();
    birincisayi = isNaN(hesaplamadanGelenSayilar.birincisayi) ? 0 : hesaplamadanGelenSayilar.birincisayi;
    if(isNaN(hesaplamadanGelenSayilar.ikinciSayi)){
        hesaplamadanGelenSayilar.ikinciSayi=0;
    }

    var sonuc=hesaplamadanGelenSayilar.birinciSayi + hesaplamadanGelenSayilar.ikinciSayi;
    progress();
    document.getElementById("kutuSonuc").innerHTML = "En son işlem : " + 
    hesaplamadanGelenSayilar.birinciSayi + "" + "+" +hesaplamadanGelenSayilar.ikinciSayi + "=" + sonuc;
    // temizle();
}

function cikar() {
    var hesaplamadanGelenSayilar = HesaplamaDegerleri();
    birincisayi = isNaN(hesaplamadanGelenSayilar.birincisayi) ? 0 : hesaplamadanGelenSayilar.birincisayi;
    if(isNaN(hesaplamadanGelenSayilar.ikinciSayi)){
        hesaplamadanGelenSayilar.ikinciSayi=0;
    }

    var sonuc=hesaplamadanGelenSayilar.birinciSayi - hesaplamadanGelenSayilar.ikinciSayi;
    progress();
    document.getElementById("kutuSonuc").innerHTML = "En son işlem : " + 
    hesaplamadanGelenSayilar.birinciSayi + "" + "-" +hesaplamadanGelenSayilar.ikinciSayi + "=" + sonuc;
    // temizle();
}


function carp() {
    var hesaplamadanGelenSayilar = HesaplamaDegerleri();
    birincisayi = isNaN(hesaplamadanGelenSayilar.birincisayi) ? 0 : hesaplamadanGelenSayilar.birincisayi;
    if(isNaN(hesaplamadanGelenSayilar.ikinciSayi)){
        hesaplamadanGelenSayilar.ikinciSayi=0;
    }

    var sonuc=hesaplamadanGelenSayilar.birinciSayi * hesaplamadanGelenSayilar.ikinciSayi;
    progress();
    document.getElementById("kutuSonuc").innerHTML = "En son işlem : " + 
    hesaplamadanGelenSayilar.birinciSayi + "" + "*" +hesaplamadanGelenSayilar.ikinciSayi + "=" + sonuc;
    // temizle();
}

function bol() {
    var hesaplamadanGelenSayilar = HesaplamaDegerleri();
    birincisayi = isNaN(hesaplamadanGelenSayilar.birincisayi) ? 0 : hesaplamadanGelenSayilar.birincisayi;
    if(isNaN(hesaplamadanGelenSayilar.ikinciSayi)){
        hesaplamadanGelenSayilar.ikinciSayi=0;
    }

    var sonuc=hesaplamadanGelenSayilar.birinciSayi / hesaplamadanGelenSayilar.ikinciSayi;
    progress();
    document.getElementById("kutuSonuc").innerHTML = "En son işlem : " + 
    hesaplamadanGelenSayilar.birinciSayi + "" + "/" +hesaplamadanGelenSayilar.ikinciSayi + "=" + sonuc;
    // temizle();
}


function sonuclar(){

}