var colorPalets = document.getElementsByClassName("colorPalets");
var newColors = document.querySelector(".newColor");
var ans;
var ans_pos ;
var question = document.querySelector("#question");
function changePalets () {
    document.querySelector("#heading").style.backgroundColor = "#247BA0";
    document.querySelector("#change_this").innerHTML = "<strong>&nbspNEW COLORS&nbsp</strong>";
    document.querySelector(".correct").style.visibility = "hidden";


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
        if(ans === this.style.backgroundColor) {
            document.querySelector("#heading").style.backgroundColor = ans;
            document.querySelector(".correct").style.visibility = "visible";
            document.querySelector("#change_this").innerHTML = "<strong>&nbspPLAY AGAIN?&nbsp</strong>";
            for(var j=0;j<colorPalets.length;j++)
            {
                colorPalets[j].style.backgroundColor = ans;
            }
        }
        else {
            this.style.backgroundColor = "#232323";
        }
    })
}
newColors.addEventListener("click",changePalets);