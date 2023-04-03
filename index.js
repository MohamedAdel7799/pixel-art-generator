let container= document.querySelector(".container");
let gridButton=document.getElementById("submit-grid"); 
let clearGridButton =document.getElementById("clear-grid"); 
let gridwidth=document.getElementById("width-range"); 
let gridheight=document.getElementById("height-range"); 
let colorbutton=document.getElementById("color-input"); 
let erasebtn=document.getElementById("erase-btn"); 
let paintbtn=document.getElementById("paint-btn"); 
let widthvalue=document.getElementById("width-value"); 
let heightvalue=document.getElementById("height-value"); 


let events = {
    mouse:{
        down:"mousedown",
        move:"mousemove",
        up:"mouseup"
    },

    touch:{
        down:"touchstart",
        mobe:"touchmove",
        up:"touched",
    },

};

let deviceType="";


let draw=false;
let erase=false;

const isTouchDevice= ()=>{
    try{
        document.createEvent("TouchEvent");
        deviceType="touch"
        return true;
    }
    catch(e){
        deviceType="mouse"
        return false;
    }
}
isTouchDevice();



gridButton.addEventListener("click", ()=>{
    container.innerHTML="";
    let count=0;

    for (let i=0; i<gridheight.value; i++){
        count+=2;
        let div =document.createElement("div");
        div.classlist.add(gridRow);

        for (let j=0; j<gridwidth.value; j++){
           count +=2;
           let col = document.createElement("div");
           col.classlist.add("gridCol")
           col.setAttribute("id",`gridCol${count}`);
           col.addEventListener(events[deviceType].down,()=>{
            draw=true;
            if(erase){col.style.backgroundcolor= "transparent";}
             else {col.style.backgroundcolor=colorbutton.value};
           });


           col.addEventListener(events[deviceType].move,(e)=>{
            let elementid=Document.elementFormpoint(
                !isTouchDevice()? e.clientx:e.touches[0].clientx,
                !isTouchDevice()? e.clienty:e.touches[0].clienty,).id;

            checker(elementid);
           });

           col.addEventListener(events[deviceType].up,()=>{
            draw=false;
           });
           div.appendChild(col);

        };
        container.appendChild(div);
    }
});


function checker(elementid){
    let gridColumns= document.querySelectorAll(".gridol");
    gridColumns.forEach((element)=>{
        if(elementid==element.id){
            if(draw&& !erase){
                element.style.backgroundcolor=colorbutton.value;

            }else if(draw && erase){
                element.style.backgroundcolo="transparent"
            }
        }
    })
}


clearGridButton.addEventListener("click",()=>{
    container.innerHTML="";

});

erasebtn.addEventListener("click",()=>{
    erase=true;
});
paintbtn.addEventListener("click",()=>{
   erase=false; 
});

gridwidth.addEventListener("input",()=>{
   widthvalue.innerHTML=gridwidth.value < 9? `0${gridwidth.value}`:gridwidth.value;
})



gridheight.addEventListener("input",()=>{
    heightvalue.innerHTML=gridheight.value < 9? `0${gridheight.value}`:gridheight.value;
 });
 

 window.onload=()=>{
    gridheight.value=0;
    gridwidth.value=0;

 };
 
