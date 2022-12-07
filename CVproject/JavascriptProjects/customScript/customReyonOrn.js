function Reyon(){
        var meyveler= ['elma','muz','çilek','karpuz'];
        var sebzeler=['domates','biber','patlıcan'];
        // for(var x in meyveler){
        //     console.log(meyveler[x]);
        // }

        for(var x =0; x<meyveler.length; x++){
            console.log(meyveler[x]); 
        }
        return {meyveler}
}

// Reyon();

function Cagir(){
        var test= Reyon();
        console.log(test);   
}

// Cagir();


function ParaSelect(){
    var paraBirimleri=["tl","euro","dolar"];
    for(var i =0 ; i < paraBirimleri.length; i++){
        var optionElemanlari="<option>" + paraBirimleri[i] + "</option>";
        document.getElementById('select').innerHTML+= optionElemanlari;
        var optionElemanlari="value=" + paraBirimleri[i];
        document.getElementById('floatingInputGrid').value+= optionElemanlari;
    }
}

ParaSelect();




