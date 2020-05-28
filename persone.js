var ppl = new Array(); //array di oggetti che conterrà i dati del file data.txt
var e;
var ul;
var li;
var t = "Persone";
function load(){ //funzione per lettura e caricamento da file
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

function print(){ //funzione per la stampa
  ul = document.createElement("UL");    //creazione di un elemento HTML (lista) attraverso JavaScript
  for(var i in ppl){
    li = document.createElement("LI");  //creazione del "nodo" della lista
    for(var x in ppl[i]){  
        e = document.createTextNode(ppl[i][x]+ " "); //lettura dell'array 
        li.appendChild(e); //aggiungo all'elemento "li" il contenuto della cella dell'array
    }
    ul.append(li); //aggiungo all'elemento lista il "nodo"
  }
  ul.className = "w3-ul w3-border";
  var tit = document.createElement("DIV");
  var titolo = document.createTextNode(t);
  doc = document.getElementById("ppl");
  tit.appendChild(titolo);
  tit.className = "w3-padding-16 w3-xlarge w3-pale-blue";
  doc.appendChild(tit);
  doc.appendChild(ul);
  }



