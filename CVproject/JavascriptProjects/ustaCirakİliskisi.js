function fonk() {
    alert("hello çırak");
    setTimeout("fonk2()", 1000);
    fonk2();
}

function fonk2() {
    alert("hello usta");
    fonk3();
}

function fonk3() {
    alert("kasada ne kadar var bakalım söyle??");
    setTimeout("fonk4()", 1000);
    fonk4();
}

function fonk4() {
    var kasa = 1000;
    if (kasa >= 1000) {
        alert("ustam bugünlük iyiyiz!");
    }
}