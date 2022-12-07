var progressDegeri=0;
var progresscubugu=document.getElementById("progressArtır");

function progress(){   
    if(progressDegeri <100 ){
        progressDegeri +=20;
        progresscubugu.style.width=progressDegeri + "%";
        progresscubugu.innerText=progressDegeri + "%";
    }
    setTimeout("progress()",100);
}