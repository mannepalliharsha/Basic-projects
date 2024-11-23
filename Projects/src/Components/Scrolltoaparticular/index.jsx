import useHook from "./hook"
import {useRef,useState} from 'react'
export default function Particularsection (){
    const[data,setData]=useHook();
    const[text,setText]=useState("");
    const divref=useRef();
     function scroll(event){
        let pos=divref.current.getBoundingClientRect().top;
         window.scrollTo({
             top : pos,
             behavior : "smooth"
         })
        //  divref.current.scrollIntoView({
        //      behavior : "smooth"
        //  })
         console.log(event.target.innerHTML);
        //  console.log(divref.current[1].event.target.value);
        const arr=[...data];
        arr[3]="hey";
        setData(arr); 
     }
     
      return(
          <div>
             <h2 className="text-center font-bold  text-3xl">Scroll to a particularsection</h2>
             <div className='flex justify-center mt-3'>
             <button className='text-center border text-xl p-2 mb-3 border-black bg-slate-500 ' onClick={function(e){scroll(e)}} >Click to Scroll</button>
             </div>
               {
                  data.map(function(item,index){
                     return(
                         <div className=" h-[400px] w-full border border-black bg-red-600" ref={index==3 ? divref : null}>
                           <h2 className="font-bold text-3xl text-center"  >{item} </h2>
                        </div>
                     )
                  })
               }
          </div>
      )
}