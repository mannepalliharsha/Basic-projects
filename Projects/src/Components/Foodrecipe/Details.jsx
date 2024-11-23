import {useEffect,useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import { Gobalcontext } from './Context'
export function Details(){
     const {Addtofavourites,removeitem}=useContext(Gobalcontext);
    const params=useParams();
    const navigate=useNavigate();
    const[data,setData]=useState([]);
    const[image,setIamge]=useState();
    const[title,setTitle]=useState();
    const[bname,setBname]=useState("Add To Favourites");
      async function fetching(){
          try{
               const response=await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`);
            const res=await response.data;
            console.log(res);
            if(res && res.data && res.data.recipe && res.data.recipe.ingredients){
                 setIamge(res.data.recipe.image_url);
                 setData(res.data.recipe.ingredients);
                 setTitle(res.data.recipe.title);
            } 
          }
          catch(err){
                 console.log("error"+err);
          }
           
      }
    useEffect(function(){
      const time= setTimeout(function(){
          fetching();
      },0*1000)
      return(
            function(){
                 clearTimeout(time);
            }
      )
    },[params.id])
    
      return(
          <div className='flex ' >
               <div className='flex flex-col justify-center' >
                <div className='bg-center bg-cover h-[300px] w-[500px]  rounded-lg shadow-2xl ' style={{backgroundImage : `url(${image})`}}></div>
                </div>
                <div className='ml-8'>
                <div> 
                     <h2 className='text-teal-500 mt-2 text-3xl'>Simply Recipes</h2>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mt-4' >{`${title}`}</h2>
                </div>
                <div>
                     <button onClick={function(){
                           if(bname==="Add To Favourites"){
                              setBname("Remove from Favourites ")
                              Addtofavourites(`${params.id}`);
                           }
                           else{
                                setBname("Add To Favourites")
                                removeitem(`${params.id}`);
                           }
                             
                     }} className=' border p-2 text-xl text-white bg-black rounded-lg  mt-4'>{bname}</button>
                </div>
                <div>
                     <h2 className='text-2xl font-bold text-red-500 ' >Ingredients : </h2>
                      {data.map(function(des){
                          return(
                              <div className='flex' >
                                  <h2 className=' font-bold text-3xl'>{des.quantity}</h2>
                                  <h2 className=' font-bold text-3xl ml-2 ' >{des.description}</h2>
                               </div>
                          )
                      })}
                </div>
                </div>
          </div>
      )
}