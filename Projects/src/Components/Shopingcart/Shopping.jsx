import {useState,useEffect} from 'react'
import axios from 'axios'
import { Gobalshop } from './Context';
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
export default function Shopping(){
    // api=https://fakestoreapi.com/products
    const {clothes,Addtoclothes,Addtocart,removeitem,text}= useContext(Gobalshop);
    // const[text,setText]=useState("Add To Cart")
    const navigate=useNavigate("");
    console.log(clothes);
    useEffect(function(){
         Addtoclothes();    
    },[])
      return(
          <div className='grid grid-cols-5' >
              {clothes.map((item,index)=>{
                return(
                 item.images && item.images[1] && (
                        <div className='h-max w-[250px] border shadow-md rounded-md mt-4 border-red-500 ml-[20px]' key={index} >
                            <div className='flex justify-center' >
                            <div className='bg-center bg-cover h-[150px] w-[150px]  border border-black shadow-md rounded-lg mt-2'  style={{backgroundImage : `url(${item.images[1]})`}} > 

                            </div>
                            </div>
                            <div className='mt-4'>
                               <h2 className='text-center text-black font-semibold' >{item.title}</h2>
                             </div> 
                             <div className='mt-[10px]'> 
                                <h2 className='text-2xl font-bold text-center' >Price : {item.price *10} /-</h2>
                             </div>
                             <div className='flex justify-center mt-4 mb-4' >
                                 <button className='border rounded-lg text-center p-2 bg-slate-700 font-bold text-white hover:bg-slate-950' onClick={function(){
                                       if(text[index]=="Add To Cart"){
                                        Addtocart(item,index);
                                       }
                                       else{
                                          removeitem(item,index);
                                       }
                
                                    
                                 }} > {text[index]}</button>
                             </div>
                         </div>   
                 )  
                )   
              })}
          </div>
      );
}