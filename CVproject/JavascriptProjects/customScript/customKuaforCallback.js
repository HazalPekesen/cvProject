function kalfaMehmet() {
    setTimeout(function () {
        var kalfaMehmetSoyler = "benim adım mehmet 1 yildir calisiyorum";
        console.log(kalfaMehmetSoyler);
    }, 1000)
}

function kalfaVeli(callback) {
    setTimeout(function () {
        var kalfaVeliSoyler = "benim adım veli 2 yildir calisiyorum";
        console.log(kalfaVeliSoyler);
        callback();
    }, 2000)
}

function kalfaCan() {
    setTimeout(function () {
        var kalfaCanSoyler = "benim adım can 4 yildir calisiyorum";
        console.log(kalfaCanSoyler);        
    }, 4000)
}

