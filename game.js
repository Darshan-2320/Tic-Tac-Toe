let boxes=document.querySelectorAll(".box");
let turn0=true;
let newbtn=document.querySelector("#new");
let rebtn=document.querySelector("#reset");
let msg=document.querySelector(".msg");
let msgcontainer=document.querySelector(".msg-container")
const pattern=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];
function disabled(){
    for (box of boxes) {
        box.disabled=true;
    }
}
function enabled(){
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
function showwinner(winner){
    msgcontainer.classList.remove("hide")
    msg.innerText=`Congratulation,Winner ${winner}`;

}
newbtn.addEventListener("click",() =>{
    msgcontainer.classList.add("hide");
    enabled();
})
rebtn.addEventListener("click",() =>{
    enabled();
    msgcontainer.classList.add("hide");
})

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
})
function checkwinner(){
    for ( winpattern of pattern) {
        let pos1=boxes[winpattern[0]].innerText;
        let pos2=boxes[winpattern[1]].innerText;
        let pos3=boxes[winpattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2 && pos2==pos3 && pos1==pos3){
                disabled();
                showwinner(pos1);
            }
        }
    }
}