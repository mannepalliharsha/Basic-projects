import {useState,useEffect} from 'react'
import axios from "axios"
export default function useFetch({url}){
      const[data,setData]=useState([]);
      async function fetching(){
        try{
            const res= await axios.get(url)
            const finaldata=await res.data;
              setData(finaldata.products);
                  }
        catch(err){
              console.log(err);
        }
      }
        useEffect(function(){
             fetching()
        },[url])
     return[data,setData];
}