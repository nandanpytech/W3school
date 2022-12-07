const interval=setInterval(myfunc,5);
var pos=0;
function myfunc(){
    if(pos==350){
        clearInterval(interval)
    }else{
        pos++;
        document.querySelector(".red").style.top=pos+'px';
        document.querySelector(".red").style.left=pos+'px';
    }
}