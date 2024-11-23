import {useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
export function Home(){
    const {name}=useParams();
    const navigate=useNavigate();
    const[items,setItem]=useState([]);
    async function fecthing(){
        try{
            const response=await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${name}`);
            const res=await response.data;
            console.log(res);
            if(res && res.data && res.data.recipes){
                  setItem(res.data.recipes);
            }
        }
        catch(err){
             console.log("error fetching the recipes")
             console.log(err);
        }
       
  }
 useEffect(function(){
    
     const timer= setTimeout(function(){
          fecthing();
     },[0*1000]);
     return(
            function(){
                 clearTimeout(timer);
            }
     ) 
 },[name])
      return(
          <div>
             {items.length>0 ?
             <div className='' >
              <div className='grid grid-cols-5 mt-4' >
                {items.map(function(item){
                     return(
                          <div className='h-max w-[250px] shadow-md rounded-2xl mt-4 '> 
                           <div className='flex justify-center' >
                            <div className='bg-center bg-cover h-[100px] w-[200px] border  mt-4 rounded-xl flex justify-center' style={{backgroundImage : `url(${item.image_url})`}} ></div>
                            </div>
                             <div > 
                                 <h2 className='pl-[20px] text-xl text-cyan-300' ><h2>{item.publisher}</h2></h2>
                             </div>
                             <div><h2 className='text-lg font-bold pl-4'>{item.title} </h2></div>
                               <div className='mt-2' > 
                                  <button className='border p-2 bg-black text-white rounded-md ml-2 mb-4'onClick={function(){
                                                                  navigate(`/Details/${item.id}`)                                                 
                                  }} >RECIPE DETAILS</button>
                               </div>
                          </div>
                     )
                })}
              </div>
              </div>
               : <h2> Nothing to show you</h2> }
          </div>
      )
}