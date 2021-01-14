var new_element=document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","tools.js");
document.body.appendChild(new_element);
var d =document.getElementById("now_time");
d.innerHTML=showTime();
var timer = setInterval(function(){
    d.innerHTML=showTime();
},1000);
