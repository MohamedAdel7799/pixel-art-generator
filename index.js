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

let devicetype="";


let draw=false;
let erase=false;

const isTouchDevice= ()=>{
    try{
        document.createEvent("TouchEvent");
        devicetype="touch"
        return true;
    }
    catch(e){
        devicetype="mouse"
        return false;
    }
}
isTouchDevice();



gridButton.addEventListener("click", ()=>{
    container.innerHTML="";
    let count=0;

    for (let i=0; i<gridheight.value; i++){

        count+=2;
        let div =document.createEvent("div");
        div.classlist.add(gridRow)

        for (let j=0; j<gridwidth.value; j++){
           count +=2;
           let col = document.createEvent("div");
           col.classlist.add("gridCol")
           col.setAttribute("id",`grid${count}`);


           col.addEventListener(events[devicetype].down,()=>{
            draw=true;
            if(erase){col.style.backgroundcolor= "transparent";}
             else {col.style.backgroundcolor=colorbutton.value};
           });


           col.addEventListener(events[devicetype].move,(e=>{
            let elementid=Document.elementFormpoint(
                !isTouchDevice()? e.clientx:e.touches[0].clientx,
                !isTouchDevice()? e.clienty:e.touches[0].clienty,), id;

            checker(elementid);
           }));

           col.addEventListener(events[devicetype].up,()=>{
            draw=false;
           });
           div.appendChild(col);

        };
        container.appendChild(div);
    }
});

