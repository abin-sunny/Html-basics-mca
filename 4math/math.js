function showPI(){
    document.getElementById("pi").innerHTML=Math.PI;
}

function showEu(){
    document.getElementById("euler").innerHTML=Math.E;
}
function rounds(x){
    document.getElementById("roundp").innerHTML=Math.round(x);
}

function floors(x){
    document.getElementById("floorp").innerHTML=Math.floor(x);
}

function ceils(x){
    document.getElementById("ceilp").innerHTML=Math.ceil(x);
}

function truncs(x){
    document.getElementById("truncp").innerHTML=Math.trunc(x);
}



function pows(x,y){
    y=Math.pow(x,y)
    document.getElementById("powp").innerHTML=y;
}

function sqrts(x){
    document.getElementById("sqrtp").innerHTML=Math.sqrt(x);
}

function abss(x){
    document.getElementById("absp").innerHTML=Math.abs(x);
}

function sin(x){
    document.getElementById("sinp").innerHTML=Math.sin(x);
}

function cos(x){
    document.getElementById("cosp").innerHTML=Math.cos(x);
}

function mins(x,y){
    document.getElementById("minp").innerHTML=Math.min(x,y);
}

function maxs(x,y){
    document.getElementById("maxp").innerHTML=Math.max(x,y);
}

function randoms(){
    document.getElementById("randomp").innerHTML=Math.random()*1000;
}