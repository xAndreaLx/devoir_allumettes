function init(){
    
//    var pere = document.getElementsByTagName("body") ;
    var flamme = document.getElementById("flamme") ;
    
    //Si c'est la première initialisation
    if (flamme != null) { 
    flamme.parentNode.removeChild(flamme) ; 
    }

    var nb = document.getElementById("reinit").value;
    
    //récupération du span (que j'aurais aussi pu créer)
    var foo = document.getElementById("all") ;

    for (var i = 0 ; i < nb ; i++) {
        var img = document.createElement("img") ;
        img.src = "allumette.gif";
        img.className = "allumette" ;

        //insere img avant avant le premier fils du span
        foo.insertBefore(img, foo.childNodes[0]) ;
    }

    //si c'est la première réinitialisation : 
    if (flamme != null) {    
    
    foo.appendChild(document.createElement("br")) ; 
    var button = document.createElement("button") ;
    var btxt = document.createTextNode("Enlever") ; 
    button.appendChild(btxt) ;
    button.id = "bouttonEnlever" ;
    button.setAttribute("onclick", "del()") ;
    
    foo.appendChild(button) ; 
    
    foo.appendChild(document.createTextNode(" ")) ; 

    var input = document.createElement("input") ; 
    input.setAttribute("type", "text") ;
    input.id = "enlever"
    foo.appendChild(input) ;

    
    var txt = document.createTextNode(" allumette(s)") ; 
    foo.appendChild(txt) ; 

    foo.appendChild(document.createElement("br")) ; 
    }

}
//avec une petite 'ia' en joueur 2 : 
var joueur = 2; 
function del() { 
    
    var allumettes = document.getElementsByClassName("allumette")  ;
    var nbAll = allumettes.length 
    
    if (joueur == 1) {
        joueur = 2 ;
        var inp = parseInt((Math.random()*3)+1) ;
        
        if (inp > nbAll) {
            inp = nbAll ;
        }
        
        alert("le joueur 2 en enlève " + inp);
        
        
        for (var i = 0 ; i < inp ; i++) {
            var span = document.getElementById("all") ;
            span.removeChild(allumettes[0]) ; 
        }
        
    } else {
        joueur = 1 ; 
        
        var inp = document.getElementById("enlever").value ;
        if (inp > 3) {
            inp = 3;
        } else if (inp > allumettes.length) {
            inp = allumettes.length ;
        }
        for (var i = 0 ; i < inp ; i++) {
            var span = document.getElementById("all") ;
            span.removeChild(allumettes[0]) ; 
        }
    } 
    
    
    if (allumettes.length == 0) {
        if (joueur == 1) {
            joueur = 2 ;
            alert("le joueur " + joueur + " a gagné!") ;
        } else {
            joueur = 1 ;
           alert("le joueur " + joueur + " a gagné!") ;
        }
    }

}
