import {useState,useEffect} from 'react'
export default function useHook(){
      const[data,setData]=useState([]);
      const arr=[
          {
             first : "firstcard"
          },
          {
            first  : "secondcard"
          },
          {
            first : "thirdcard"
          },{
            first : "fourthcard"
          }
      ]
      useEffect(function(){
        setData(function(){
            return arr.map(function(item){
                 return item.first
             })
         })
      },[])
      return [data,setData];
}