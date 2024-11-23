import {useContext} from 'react';
import { Gobalshop } from './Context';
export default function Cart(){
   const {cartitems,removeitem,prices}=useContext(Gobalshop);
   console.log(prices);
      return(
        <div className='flex justify-center'>
          <div className='grid grid-cols-3 mt-[20px]'>
             {cartitems.map(function(item){
                  return(
                      <div className='h-max w-[250px] border rounded-md shadow-md border-red-500 ml-10 mt-10' >
                        <div className='flex justify-center mt-4' >
                          <div className='bg-center bg-cover h-[150px] w-[150px] rounded-md' style={{backgroundImage : `url(${item.images[1]})`}} >
                         </div>
                        </div>
                         <div className='mt-[10px]' >
                             <h2 className='font-bold text-center' >{item.title}</h2>
                        </div>
                          <div className='mt-[10px]'>
                              <h2 className='font-bold text-2xl text-center'> Price : {item.price*10}</h2>
                            </div>  
                        <div className='mt-4 mb-4 flex justify-center'>
                             <button className='text-2xl border text-white rounded-lg p-2 bg-slate-800 hover:bg-slate-950' onClick={function(){
                                  removeitem(item)
                             }} >Remove from Cart</button>
                        </div>    
                      </div>
                  )
             })}
          </div>
          <div className='mt-[100px] ml-[50px] border h-max p-4'>
            <div>
                 <h2 className='text-3xl font-bold text-red-600'> Your Cart Summary</h2>
            </div>
            <div className='mt-4' >
                 <h2 className='font-semibold text-2xl' > Total Items : {cartitems.length}</h2>
            </div>
            <div className='mt-4' >
                 <h2 className='font-semibold text-2xl' >Total Amount : {prices} /-</h2>
            </div>
            </div>  
          </div> 
      )
}