document.addEventListener('keydown', logKey);
document.addEventListener('keydown', random);

var out='';

setInterval("print()",400);
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
    print();
    
}
function print(){
    out=document.getElementById("Output");
    out.innerHTML=random()+out.innerHTML;

}






















