function textCount(){
let t =document.getElementById("lenPara").innerHTML.length;
document.getElementById("strLen").innerHTML=t;
}

function textSlice(sliceNo){
    let t=document.getElementById("slice").innerHTML;
    let p = t.slice(sliceNo)
    document.getElementById("slice").innerHTML=p;
}

function subStr(a,b){
    let t = document.getElementById("subStr").innerHTML;
    let p = t.substring(a,b);
    document.getElementById("subStr").innerHTML=p;
}

function replace(s1,s2){
    let t = document.getElementById("replacep").innerHTML;
    let p = t.replace(s1,s2)
    document.getElementById("replacep").innerHTML=p;
}

function toUpper(){
   let t = document.getElementById("upperpara").innerHTML;
    document.getElementById("upperpara").innerHTML=t.toUpperCase();
}
function toLower(){
    let t = document.getElementById("lowerpara").innerHTML;
    document.getElementById("lowerpara").innerHTML=t.toLowerCase();
}

function conCat(s1,s2){
    let p=s1+" "+s2;
    document.getElementById("conp").innerHTML=p;
}