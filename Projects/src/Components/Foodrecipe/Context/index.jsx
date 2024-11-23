import { createContext } from "react";
import {useState} from 'react'
import axios from 'axios'

export const Gobalcontext=createContext();
export default function Gobalstate({children}){
  const[fav,setFav]=useState([]);
  const[id,setId]=useState([]);
 async  function Addtofavourites(getitem){
      const arr=[...fav];
      const arr2=[...id];
       try{
          const index=arr2.findIndex(ids => ids===getitem);
          if(index!=-1){
              return ;
          }
        const res=await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${getitem}`);
          const data= await res.data;
          const response=data;
          console.log(response);
          if(response && response.data && response.data.recipe && !arr.includes(response.data.recipes)){
               arr.push(response.data.recipe);
          }
          setFav(arr);
          arr2.push(getitem);
          setId(arr2);
       }
       catch(e){
         console.log(e);
       }
     
  }
   function removeitem(item){
    console.log(item);
        let updatefav=fav.filter(dd=> dd.id!==item);
        let updateid=id.filter(dd=>dd!==item);
         setFav(updatefav);
         setId(updateid);
   }
  return(
    <Gobalcontext.Provider
      value={{
         fav,
         Addtofavourites,
         removeitem
      }}
      >
        {children}
      </Gobalcontext.Provider>
   )
}
