function kalfa() {
    var kalfaOzellik = {
        adi: "can",
        tecrubesi: 1,
        goz: "mavi",
        yas: 23,
        calismaEngeli: function () {
            console.log("herhangi bir engeli yoktur.");
            var a = 3,
                b = 4,
                c = a + b,
                d = c + a;
            return {c , d};
        },
        yasGetir: function(){
            if(this.yas > 20){
               var buyukYas="18 den büyük";
            }
            else{
                var buyukYas="18 den küçük";
            }
            return buyukYas;
        }
    }

   // js asenkron çalışır!!

    console.log(kalfaOzellik.adi);
    console.log(kalfaOzellik.tecrubesi);
    console.log(kalfaOzellik);

    kalfaOzellik.calismaEngeli();

    var gonderOzellik = kalfaOzellik.goz;
    var engelGonder1 = kalfaOzellik.calismaEngeli().c;
    var engelGonder2 = kalfaOzellik.calismaEngeli().d;
    var yasiYaz= kalfaOzellik.yasGetir();
    return { gonderOzellik, engelGonder1, engelGonder2, yasiYaz };   
}
