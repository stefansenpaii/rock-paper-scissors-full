function computerPlay(){
    let niz=["rock","paper","scissors"];
    let napad=Math.floor((Math.random() * 3) + 1);
    if(napad===1)
    {
        return niz[0];
    }
    else if(napad===2)
    {
        return niz[1];
    }
    else if(napad===3)
    {
        return niz[2];
    }
}
function playRound(playerSelection,computerSelection){
    if(b>=13)
    {
        const pp=document.querySelectorAll('.content');
        pp.forEach((p)=>{
            p.remove();
        });
        const pp1=document.querySelectorAll('.content2');
        pp1.forEach((p)=>{
            p.remove();
        });
        
        b=0;
    }
    if(computerSelection===playerSelection)
    {
        t=t+1;

        const container = document.querySelector('#storagel');
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = playerSelection;
        container.appendChild(content);

        const container2 = document.querySelector('#storager');
        const content2 = document.createElement('p');
        content2.classList.add('content2');
        content2.textContent = playerSelection;
        container2.appendChild(content2);
        b=b+1;
    }
    else if(playerSelection==="rock" && computerSelection==="paper")
    {
        l=l+1;
        roundLose(playerSelection,computerSelection)
        b=b+1;

    }
    else if(playerSelection==="rock" && computerSelection==="scissors")
    {
        w=w+1;
        roundWin(playerSelection,computerSelection);
        b=b+1;
    }
    else if(playerSelection==="paper" && computerSelection==="scissors")
    {
        l=l+1;
        roundLose(playerSelection,computerSelection)
        b=b+1;

        
    }
    else if(playerSelection==="paper" && computerSelection==="rock")
    {
        w=w+1;
        roundWin(playerSelection,computerSelection);
        b=b+1;

    }
    else if(playerSelection==="scissors" && computerSelection==="rock")
    {
        l=l+1;
        roundLose(playerSelection,computerSelection)
        b=b+1;
    }
    else if(playerSelection==="scissors" && computerSelection==="paper")
    {
        w=w+1;
        roundWin(playerSelection,computerSelection);
        b=b+1;

    }
    if(w===5)
    {
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;
        changeA(".buttons1");
        changeA(".buttons2");
        changeA(".buttons3");

        const w6=document.querySelector('#dec');
        w6.style.opacity="100%";
        w6.style.zIndex="6";
        w6.textContent="YOU WON!";

        changeZO(5,"#finish","70%");
        changeZO(6,"#endo","100%");
        changeZO(7,"#rightb","100%");
        changeZO(7,"#leftb","100%");
        changeZO(8,"#scyou","100%");
        changeZO(8,"#sccmp","100%");
        changeZO(8,"#scorey","100%");
        changeZO(8,"#scorec","100%");
        
    }
    else if(l===5)
    {
        btn1.disabled=true;
        btn2.disabled=true;
        btn3.disabled=true;
        changeA(".buttons1");
        changeA(".buttons2");
        changeA(".buttons3");
        
        const w6=document.querySelector('#dec');
        w6.style.opacity="100%";
        w6.style.zIndex="6";
        w6.textContent="YOU LOST!";

        changeZO(5,"#finish","70%");
        changeZO(6,"#endo","100%");
        changeZO(7,"#rightb","100%");
        changeZO(7,"#leftb","100%");
        changeZO(8,"#scyou","100%");
        changeZO(8,"#sccmp","100%");
        changeZO(8,"#scorey","100%");
        changeZO(8,"#scorec","100%");
        
    }

}
function changeZO(number,elements,opaci){
        const w13=document.querySelector(elements);
        w13.style.opacity=opaci;
        w13.style.zIndex=number;
}
function changeA(classs){
    const w2=document.querySelector(classs);
        w2.style.animationName="btn2";
        w2.style.animationIterationCount="infinite";
        w2.style.animationDuration= "0.9s";
        w2.animationTimingFunction="linear";
        w2.animationDelay= "0s";
        
}
function roundWin(playerSelection,computerSelection){
        const container = document.querySelector('#storagel');
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = playerSelection;
        container.appendChild(content);
        const container2 = document.querySelector('#storager');
        const content2 = document.createElement('p');
        content2.classList.add('content2');
        content2.textContent = computerSelection;
        container2.appendChild(content2);
        const w1=document.querySelector('#scyou');
        w1.textContent=w;
}
function roundLose(playerSelection,computerSelection){
        const container = document.querySelector('#storagel');
        const content = document.createElement('p');
        content.classList.add('content');
        content.textContent = playerSelection;
        container.appendChild(content);
        const container2 = document.querySelector('#storager');
        const content2 = document.createElement('p');
        content2.classList.add('content2');
        content2.textContent = computerSelection;
        container2.appendChild(content2);
        const l1=document.querySelector('#sccmp');
        l1.textContent=l;
}
var w=0;
var t=0;
var l=0;
var b=0;
const finish=document.querySelector('#endo');
finish.addEventListener('click', () => {
    document.location.href="";
});
const img1= document.querySelector('.buttons1');
img1.addEventListener('click', () => {

    img1.style.backgroundImage = "url('styles/rock.gif')";
    setTimeout(function(){img1.style.backgroundImage = "url('styles/ss1.png')";},1000)
    let playerSelection="rock";
    const computerSelection=computerPlay();
    playRound(playerSelection,computerSelection);;
});
const btn2 = document.querySelector('.buttons2');
btn2.addEventListener('click', () => {
    btn2.style.backgroundImage = "url('styles/paper.gif')";
    setTimeout(function(){btn2.style.backgroundImage = "url('styles/ss3.png')";},2100)
    let playerSelection="paper";
    const computerSelection=computerPlay();
    playRound(playerSelection,computerSelection);;
});
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    btn3.style.backgroundImage = "url('styles/makaze.gif')";
    setTimeout(function(){btn3.style.backgroundImage = "url('styles/ss2.png')";},1100)
    let playerSelection="scissors";
    const computerSelection=computerPlay();
    playRound(playerSelection,computerSelection);;
});
