var colorPalets = document.getElementsByClassName("colorPalets");
var newColors = document.querySelector(".newColor");
var ans;
var ans_pos ;

function changePalets () {
    ans  = "rgb("+(Math.floor(Math.random()*256))+", "+(Math.floor(Math.random()*256))+", "+(Math.floor(Math.random()*256))+")";
    ans_pos = Math.floor(Math.random()*6);
    console.log("Function called");
    for(var i=0;i<colorPalets.length;i++)
    {
        if(i===ans_pos){
            colorPalets[i].style.backgroundColor = ans;
        }
        else {
            colorPalets[i].style.backgroundColor = "rgb(" + (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ")";
        }
    }
}

changePalets();

newColors.addEventListener("click",changePalets);