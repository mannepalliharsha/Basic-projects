import {useState,useEffect} from 'react'
import axios from "axios"
export default function Scroll({url}){
      const[data,setData]=useState([]);
      const[loading,setLoading]=useState(false);
      const[per,setPer]=useState();
      useEffect(function(){
        try{
              setLoading(true);
           async function fecthdata(){
                  const response=await axios.get(url);
                  const finalone= await response.data;
                 if(finalone.products && finalone.products.length>0){
                    setData(finalone.products)
                 }
            }
            fecthdata();
        }
        catch(err){
              console.log(err);
        }
      },[url])
       function access(){
          // console.log(document.body.scrollTop);
          const howmuchyousroll=document.documentElement.scrollTop;
          console.log(howmuchyousroll+"hey")
          const scrollperecentage=document.documentElement.scrollHeight-
                                   document.documentElement.clientHeight
          setPer(howmuchyousroll/scrollperecentage*100);
       }
       console.log(per);
      useEffect(function(){
          window.addEventListener('scroll',access) ;
          return(
            function(){
                window.removeEventListener('scroll',access)
            }
          )  

      },[])
      return(
        <div className='' >
         <div className='fixed w-[100%] border bg-slate-800 top-0' >
          <h2 className='font-bold text-3xl text-center' >Scroll Indicator</h2>
          <div className='h-10 w-[100%] bg-red-600 '>
            <div className={` h-10 bg-green-600`} style={{width : `${per}%`}} >

            </div>
            </div>
         </div>    
         <div className='flex justify-center' >
            <div className="" > 
            {data.map(function(item){
                  return(
                      <h2>{item.title}</h2>
                  )
            })}
          </div>
          </div>
        </div>
      )
}