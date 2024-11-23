import {useState} from 'react';
export default function Randomcolor(){
    const[typeofcolor,setType]=useState("hex");
    const [color,setColor]= useState("#000000");
    const randomindex=function(length){
        //console.log(Math.floor( Math.random()));
          return Math.floor( Math.random()*length);
    }
    const sethexColor=function(){
          const values=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
          let hexvalue="#";
          for(let i=0;i<6;i++){
               hexvalue+=values[randomindex(values.length)];
          }
          setColor(hexvalue);
    }
    const setrgbColor=function(){
          let rgbvalue="";
          for(let i=0;i<3;i++){
               rgbvalue+=randomindex(255);
              if(i<2){
                rgbvalue+=",";
              }
          }
          let finalvalue="rgb()";
          let rgb=finalvalue.substring(0,4)+rgbvalue+finalvalue.substring(4);
           setColor(rgb);
    }
      return(
         <div className="h-screen " style={{backgroundColor : color}}  >
            <div className=' flex justify-center' >
             <button className='border rounded-lg text-2xl ml-2 text-white mt-4' onClick={function(){
                setType("hex")
             }}  >Create Hex Color</button>
             <button className='border rounded-lg text-2xl ml-2 text-white mt-4 ' onClick={function(){
                  setType("rgb")
             }} >Create Rgb Color </button>
              <button className='border rounded-lg text-2xl ml-2 mt-4 text-white' onClick={typeofcolor==="hex" ? sethexColor : setrgbColor}  >
                 Create Random Color
             </button>
             </div> 
             <div className='mt-60 flex flex-col items-center justify-center'>
                 <h2 className='text-white text-9xl font-bold' >{color}</h2>
             </div>  
         </div>
      )
}