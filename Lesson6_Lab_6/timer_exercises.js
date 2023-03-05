function booyah1(){
    alert("BOOYAH!");
};
function helper(){
    alert("BOOYAH!");}
function booyah2(){
    setTimeout(helper,2000);
};
setTimeout(booyah1,2000);
setTimeout(booyah2(),2000);