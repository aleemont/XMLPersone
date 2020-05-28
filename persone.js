var ppl = new Array();

function load(){
    var xmlhttp = new XMLHttpRequest;
    var url = "data.txt";

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4){
            if(xmlhttp.status == 200){
                persone = JSON.parse(xmlhttp.responseText);
                load();
            }
            else
                document.getElementById("error").innerHTML = "ERROR";
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function print(){
    /*here is where i should create the table
     where to put the content of data.txt*/
}



