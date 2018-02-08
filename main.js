var colorPalets = document.getElementsByClassName("colorPalets");

var ans  = "rgb("+(Math.floor(Math.random()*256))+", "+(Math.floor(Math.random()*256))+", "+(Math.floor(Math.random()*256))+")";
var ans_pos = Math.floor(Math.random()*6);
for(var i=0;i<colorPalets.length;i++)
{
    if(i===ans_pos){
        colorPalets[i].style.backgroundColor = ans;
    }
    else {
        colorPalets[i].style.backgroundColor = "rgb(" + (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ")";
    }
}
console.log("position"+ans_pos+"  :  "+ans);