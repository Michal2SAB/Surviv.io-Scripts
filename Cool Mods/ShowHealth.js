(function() {
    'use strict';
    var o = document.createElement("a");
    o.setAttribute("id","my_Heart");
    o.style.color = "green";
    o.style.fontSize = "25px";
    o.style.display = "block";
    document.getElementById("ui-boost-counter").parentNode.appendChild(o);
    var reference = document.getElementById('ui-boost-counter');
    reference.parentNode.insertBefore(o, reference);

    setInterval(function(){
        o.innerHTML ="HP: " + Math.round(document.getElementById("ui-health-actual").style.width.slice(0,-1));
        if(document.getElementById("game-area-wrapper").style.display == "block"){
            if(o.innerHTML.slice(5,8) < 25){
                o.style.color = "red";
            } else {
                if(o.innerHTML.slice(5,8) > 25){
                    o.style.color = "green";
                }
            }       
        }
    },500);
})();
