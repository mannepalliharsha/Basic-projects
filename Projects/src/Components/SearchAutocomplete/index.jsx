import {useState} from 'react'
import{useEffect,useRef} from 'react'
import axios from 'axios'
export default function Autocomplete(){
    const inputref=useRef();
    const[mem,setMem]=useState([]);
    const[inputbox,setInputbox]=useState("");
    // const[name,setName]=useState("");
     const[existing,setExisting]=useState([]);
      useEffect(function(){
         console.log(inputref.current);
          inputref.current.focus();
      },[])
      useEffect(function(){
        async function getUser(){
             const response=await axios.get("https://dummyjson.com/users");
             const res=await response.data;
             if(res && res.users && res.users.length>0 ){
               setMem(res.users.map(function(us){
                    return us.firstName
               }));
            }
        } 
        getUser();   
   },[])
    function handlechange(e){
      const value=e.target.value.toLowerCase();
      setInputbox(value);
      console.log(value);
       console.log(typeof(value));
         if(value.length >1){
          const arr= mem && mem.length>0  ? mem.filter(function(first){
                const value2=first.toLowerCase();
                 console.log(value2);
                  return value2.indexOf(value)>-1;
             }) : []
             setExisting(arr);
         }
          else{
              setExisting([]);
           }
    }
      return( 
        <div className='flex justify-center'>
          <div>
          <input type="text" value={inputbox} placeholder="enter the name" ref={inputref} onChange={handlechange} className='border rounded-md text-2xl pl-2'  />
           {existing && existing.length>0 ? <div> 
                 {existing.map(function(first){
                      return(
                         <div > 
                            <h2 className='text-3xl font-bold cursor-pointer' onClick={function(e){
                                console.log(e.target.innerText);
                                setInputbox(first);
                                setExisting([]);
                            }} >{first}</h2>
                         </div>
                      )
                 })}
           </div> : ""}
         </div>
         </div>
      )
}