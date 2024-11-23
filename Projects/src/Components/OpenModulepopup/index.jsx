
import Pop from './pop';
import {useState} from 'react'
export default function Modulepop(){
    const[loading,setLoading]=useState(false);
    const[close,setClose]=useState(false);
      return(
           <div className='flex flex-col justify-center bg-yellow-500 h-screen' >
            <div className='flex justify-center' >
             {!loading ? <button className='border border-black text-3xl p-3 transition ease-in duration-150'  onClick={function(){
                      setLoading(true)
                      setClose(true);
              }} >PopUp</button> : "" }
              {
                  loading ? <div> 
                        <Pop onClick={function(){
                              setLoading(!loading)
                        }}></Pop>
                          </div>     : ""
              }
           </div>
           </div>
      )
}