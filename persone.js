var ppl = new Array();
function load(){
    var xmlhttp = new XMLHttpRequest();
    var url = "data.txt";

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4){
            if(xmlhttp.status == 200){
                ppl = JSON.parse(xmlhttp.responseText);
                print();
            }
            else
                document.getElementById("error").innerHTML = "ERROR";
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
function print(){

}



