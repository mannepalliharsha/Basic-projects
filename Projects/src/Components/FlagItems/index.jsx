import {useState,useEffect } from 'react'
import dataservicecall from './data';
import TicTacToe from '../Tic-Tac-Toe';
import Accordian from '../Accordian';
export default function Flag(){
    const[data,setData]=useState([]);
      async function fecthdata(){
          const res=await  dataservicecall();
          console.log(res);
           const filterdata=(res.filter(function(item){
             //  console.log(item);
                  return item.unable=="No"
           }));
           setData(filterdata);
      }
       useEffect(function(){
           fecthdata();
       },[])
       console.log(data);
       const componentstorender=[
           {
              key : "TicTacToe",
              component : <TicTacToe></TicTacToe>
           },
           {
             key : "Accordian",
               component : <Accordian></Accordian>
           }
       ]
       function checkenableflags(currentkey){
            for(let i=0;i<data.length;i++){
                  if(data[i].key===currentkey){
                     console.log(true);
                      return true;
                  }
            }
            return false;
       }
      return(
          <div>
           {
              componentstorender.map((item)=>
                   checkenableflags(item.key)?item.component :null
              )
            }
         </div>  
       )
 }