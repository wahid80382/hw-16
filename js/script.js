var div = document.getElementById("manu");
var display = 0;
function btn(){
    if (display==1){
        div.style.display = "block";
        display = 0;
    }else{
        div.style.display = "none"
        display = 1;
    }
}