let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let colorselect=document.querySelector(".colorselect");

let rgb1="#00f"
let rgb2="#fff"

const hexcolor=()=>{
    let hexcolor="0123456789abcdef";
   let color="#";
   for(let i=0;i<6;i++){
    color=color+hexcolor[Math.floor(Math.random()*16)];
   }
  return color;
}

const handlecolor1=()=>{
    rgb1=hexcolor();
    btn1.innerHTML=rgb1;
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    colorselect.innerHTML=`backgroundImage:linear-gradient(to right,${rgb1},${rgb2})`;
}

const handlecolor2=()=>{
     rgb2=hexcolor();
   btn2.innerHTML=rgb2;
    document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    colorselect.innerHTML=`backgroundImage:linear-gradient(to right,${rgb1} ${rgb2})`;
}


btn1.addEventListener("click",handlecolor1);

btn2.addEventListener("click",handlecolor2);

colorselect.addEventListener("click",()=>{
    navigator.clipboard.writeText(colorselect.textContent);
})
