var colorPalets = document.getElementsByClassName("colorPalets");
var newColors = document.querySelector(".newColor");
var ans;
var ans_pos ;
var question = document.querySelector("#question");
function changePalets () {
    ans  = "rgb("+(Math.floor(Math.random()*256))+", "+(Math.floor(Math.random()*256))+", "+(Math.floor(Math.random()*256))+")";
    question.textContent = ans;
    ans_pos = Math.floor(Math.random()*6);
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
for(var i=0;i<colorPalets.length;i++)
{
    colorPalets[i].addEventListener('click',function () {
        if(ans === this.style.backgroundColor)
        {
            console.log("You Found it!!!!");
        }
    })
}
newColors.addEventListener("click",changePalets);