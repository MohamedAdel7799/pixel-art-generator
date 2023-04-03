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
        
    }
}
