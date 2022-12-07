var paraTuru=['euro','dolar','türk lirası',100];
console.log(paraTuru);
console.log(paraTuru.length);

var paraKasası=paraTuru[1];
console.log(paraKasası);

for(var paraTurununDiziElemanlari = 0 ; paraTurununDiziElemanlari < paraTuru.length ; paraTurununDiziElemanlari ++)
{
    console.log("veri bakim" + " " + paraTuru[paraTurununDiziElemanlari])
}