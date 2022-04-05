document.addEventListener('keydown', logKey);
document.addEventListener('keydown', random);
document.addEventListener('keydown',presstostart);

var out='';
function presstostart() {
    setInterval("print()", "400");
    //400毫秒產生一次字母
    this.removeEventListener('keydown', presstostart);
}
function logKey(e) {
    var word=out.innerHTML.substr(-1);  
    if(e.key==word)
    {
        out.innerHTML=out.innerHTML.substr(0,out.innerHTML.length-1);  
    }
    document.getElementById("valueInput").innerHTML+=e.key;
}

function random(){
    var a=Math.floor(Math.random()*26);
    var out=String.fromCharCode(a+65);
    temp=out;
    return temp;

}
function print(){
    out=document.getElementById("Output");
    out.innerHTML=random()+out.innerHTML;

}






















