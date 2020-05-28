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
var e;
var ul;
var li;
function print(){
  ul = document.createElement("UL");
  for(var i in ppl){
    li = document.createElement("LI");
    for(var x in ppl[i]){   
        e = document.createTextNode(ppl[i][x]+ " ");
        li.appendChild(e);        
    }
     
    ul.append(li);
  }
  console.log(ul);
  doc = document.getElementById("ppl");
  doc.appendChild(ul);
  }



