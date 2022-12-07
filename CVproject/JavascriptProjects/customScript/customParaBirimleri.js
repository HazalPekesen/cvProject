var paraTurleri=[
    {sembol:'$', aciklama:'Dolar'},
    {sembol:'€', aciklama:'Euro'},
    {sembol:'₺', aciklama:'Türk Lirası'},
];

var select = document.querySelector('.form-select');
select.onchange= function(){
    var sembol= this.value;
    var aciklama=select.options[this.selectedIndex].text;
    console.log(sembol+ '/' + aciklama);

    var input= document.querySelector('#secilenPara');
    input.value=sembol + " " + aciklama;
}

for(para of paraTurleri){
    var option= new Option(para.aciklama, para.sembol);
    select.add(option);
}
