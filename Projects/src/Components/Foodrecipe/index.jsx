import {useRef,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import {Home} from './Home'
export default function Homepage(){
    const[name,setName]=useState("");
    const inputref=useRef();
    const navigate=useNavigate();
    useEffect(function(){
        inputref.current.focus();
    },[])
    function handlechange(e){
        const value=e.target.value;
           setName(value);
    }
    useEffect(function(){
        if(name){
          const timer=  setTimeout(function(){
                navigate(`/home/${name}`);
            },0*1000)
            return(
                 function(){
                     clearTimeout(timer);
                 }
            )
        }
    },[name])
    return(
        <div>
          <div className='flex justify-between mt-4'>
              <div className="ml-2">
               <h2 className='text-2xl font-bold cursor-pointer' onClick={function(){
                   setTimeout(function(){
                    navigate(`/home/${name}`)
                   },0)
            
               }}>FoodRecipe</h2>
             </div>
             <div>
                 <input className=' shadow-md pl-2 text-3xl rounded-md' onChange={handlechange} ref={inputref} type="text" placeholder='Enter items...' />
             </div>
             <div className='flex' >
                 <div className='mr-8 text-2xl font-bold cursor-pointer' onClick={function(){
                    setTimeout(function(){
                        navigate("homepage")
                    },0)
                 }} >Home</div>
                 <div className='mr-8 text-2xl font-bold cursor-pointer' onClick={function(){
                      setTimeout(function(){
                        navigate("cart");
                      },0)
        
                 }}  >Favourites</div>
             </div>
          </div>
          </div>
    )
}