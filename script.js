idoh();
function idoh(){
    document.getElementById('time').innerText=(new Date().toLocaleTimeString());
    requestAnimationFrame(idoh);
}


function villanyKapcsolo(id){
    if(document.getElementById(id).style.display != "none"){
        document.getElementById(id).style.display = "none";
    }
    else{
        document.getElementById(id).style.display = "block";
    }
}
