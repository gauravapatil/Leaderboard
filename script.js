data=[];
let btn=document.querySelector("button");
let fname=document.querySelector("#f_name");
let lname=document.querySelector("#l_name");
let cname=document.querySelector("#c_name");
let score=document.querySelector("#score");
let rank=document.getElementById("ranks");
let activateButtons=()=>{
    document.querySelectorAll("#board").forEach((ele,index)=>{
        ele.addEventListener("click",(e)=>{
            if(e.target.classList.contains("but1")){
                let score=parseInt(data[index].score);
                score+=5;
                data[index].score=score;
                UpdateonUI();
            }
            else if(e.target.classList.contains("but2")){
                data[index].score-=5;
                UpdateonUI();
            }
            else if(e.target.classList.contains("del")){
                data.splice(index,1);
                UpdateonUI();
            }
        })
     } )
    }

function UpdateonUI(){
    data.sort((p1,p2)=>{
         return p2.score-p1.score;
    })
    let show="";
    data.forEach(function(item){
        show+=`<div id="board" class="but-group">

       <div class="space"> <span class="sp">${item.fname}</span></div>
        <div class="space"><span class="sp">${item.lname}</span></div>
       <div class="space"> <span class="sp">${item.cname}</span></div>
       <div class="space"> <span class="sp">${item.score}</span></div>
        <button class="del" >X</button>
        <button class="but1">+5</button>
        <button class="but2">-5</button>   
    </div>`;

    })
    console.log(show);
    rank.innerHTML=show;
    activateButtons();
    
}

btn.addEventListener("click",function(e){
    e.preventDefault();
    if(lname.value==="" || fname.value==="" || cname.value==="" || score.value==="") {
        alert("*It is mandatory to fill all fields");
    }
    else{
    let playerObj=    {
            fname:fname.value,
            lname:lname.value,
            cname:cname.value,
            score:score.value
        }
        data.push(playerObj);
        UpdateonUI();
        fname.value="";
        cname.value="";
        lname.value="";
        score.value="";
}
});

