let code = [];
let codeEnter =[];
let flag =false;

function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1) + min)
}

function createCode(){
    for(let i=0 ; i<4 ; i++)
        code[i] = randomNum(0,9)
}

createCode();
console.log(code)
const  inpCode = document.querySelectorAll(".code");

for(let i=0 ; i<4 ; i++)
    inpCode[i].addEventListener("input",(e)=>{
    let num = Number(e.target.value); 

    if(!isNaN(num)){ // isn't string
         codeEnter[i] = num; // number entered


        if(code.includes(num)){ // is that in code?
            if(code[e.target.id] == num ){ // is that in correct place?
                e.target.style.backgroundColor = "#27ae60"
                
        }
            else
            e.target.style.backgroundColor = "#3498db"
        }
        else{
            e.target.style.backgroundColor = "#c0392b"
        }  
        
        e.target.readOnly = true;   //can't change
    }
    else
        e.target.value = ""
})

function nextRound(){ 
   
    if(flag)
        return;

    if(isWin() && flag == false){
        flag = true
        let w=document.createElement("h4")
        w.innerText ="You Win";
        w.classList.add("win");
        document.querySelector(".app-body").appendChild(w)

        return
    }
    
    //create last input
    let d = document.querySelector(".last").cloneNode(true);
    d.style.display ="block"
    for(let i=0 ; i<4 ; i++){
        let sp = d.children
        sp[i].style.backgroundColor = inpCode[i].style.backgroundColor;
        sp[i].innerText = inpCode[i].value      
    }
    document.querySelector(".pravious").appendChild(d)
    defualt();
}

function reset(){ //reset game
        let last=document.querySelectorAll(".last")
        for(let i=1 ; i<last.length ; i++) //remove all inputs for pravious game
            last[i].remove()

        document.querySelector(".win").remove();
        defualt();
        createCode();
    console.log(code)

}

function isWin(){
    
    for(var j=0 ;code[j]==codeEnter[j] && j<4;j++);
    
    if(j!=4) return false

    return  true
}

function defualt(){
    for(let i=0 ; i<4 ; i++){
        //input back to defualt
        inpCode[i].style.backgroundColor = "white"
        inpCode[i].value ="";
        inpCode[i].readOnly = false;
        
    }
    flag = false;
}