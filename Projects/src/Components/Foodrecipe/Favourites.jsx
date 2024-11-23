import {useParams} from 'react-router-dom'
import {useEffect,useState,useContext} from 'react'
import axios from 'axios'
import { Gobalcontext } from './Context'
export function Favourites(){
   const{fav,removeitem} =useContext(Gobalcontext);
   console.log(fav);
      return(
           <div className='grid grid-cols-5 mt-10' >
               {
                    fav.map(function(item,index){
                          return(
                                <div className='h-max w-[250px] shadow-lg mt-5 rounded-lg flex justify-center' >
                                    <div >
                                   <div className='h-[150px] w-[200px] bg-center bg-cover rounded-lg' style={{backgroundImage : `url(${item.image_url})`}}> </div>
                                   <div className='mt-2' > 
                                       <h2 className='text-xl font-bold text-cyan-300' >{item.publisher}</h2>
                                     </div>
                                     <div className='mt-1'> 
                                        <h2 className='text-xl font-bold ' >{item.title}</h2>  
                                     </div>
                                  <div className='mt-2 ' >
                                     <button className='border p-2 rounded-lg bg-black text-white mb-2' onClick={function(){
                                          console.log(item.id);
                                           removeitem(item.id);
                                     }}>Remove from favourites</button>
                                  </div>  
                                  </div>    
                               </div>
                          )
                    })
               }
           </div>
      )
}