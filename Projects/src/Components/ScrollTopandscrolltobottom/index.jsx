import {useState,useEffect} from 'react'
import {useRef} from 'react'
import axios from 'axios'
export default function ScrolltoTopandviceversa(){
    const[data,setData]=useState([]);
     const divref=useRef();
       async function fetchdata(){
            const res= await axios.get("https://dummyjson.com/products?limit=100");
            const finaldata= await res.data;
             if(finaldata && finaldata.products && finaldata.products.length>0){
                    setData(function(){
                         return finaldata.products.map(function(item){
                               return item.title
                          })
                    })
             }
       } 
     useEffect(function(){
          fetchdata();
     },[])
     function bottom(){
        // window.addEventListener('scrollBottom',handler);
        divref.current.scrollIntoView({
            behavior : "smooth"
        })
     }
     function top(){
        window.scrollTo({
            top : 0,
            left  : 0,
            behavior : 'smooth'
      })
     }
      return(
          <div>
            <div className='flex justify-center' >
            <div  >
            
               <h2 className='font-bold text-3xl' >Scroll To Top And Bottom Feature</h2>
               <h2 className="font-bold mt-2 text-xl text-center " > This is Top Section</h2>
               <button className='p-2 border border-black bg-slate-400 mt-2' onClick={bottom} >ScrolltoBottom</button>
               {data.length>0 ? data.map(function(item){
                  return(
                        <div>
                            <h2>{item}</h2>
                        </div>
                  )
               }): ""}
            <button className='border p-2 border-black bg-slate-500' onClick={top} >ScrolltoTop</button>
            <div ref={divref} >
            <h2 className='text-center font-bold text-xl' >This is a Bottom Section</h2>
            </div>
          </div>
          </div> 
          </div> 
      )
}