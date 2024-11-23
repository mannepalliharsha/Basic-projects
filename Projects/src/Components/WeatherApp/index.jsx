import {useState,useEffect} from 'react'
import axios from 'axios'
import { BsTypeH2 } from 'react-icons/bs';
export default function Weather(){
    const[data,setData]=useState();
    const[value,setValue]=useState("");
    const[loading,setLoading]=useState(false);
    function handlechange(e){
          const text=e.target.value;
         setValue(text);
    }
    async function fecthingdata(){
        try{
            const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=8713a196279ed9dd3e0000aada51cc32`)
            const res=await response.data;
            setData(res);
            setLoading(true);
            console.log(res);
        }
        catch(e){
            setLoading(false);
              console.log(e);
        }
    }
     function handleclick(){
         fecthingdata();
    }
    function getcurrentdate(){
         return new Date().toLocaleDateString('en-us',{
             weekday : 'long',
             day : 'numeric',
             month : 'long',
             year : 'numeric'

         });
    }
      return(
        <div className='flex flex-col h-screen items-center justify-center' >
        <div className='flex  justify-center' >
          <div className='h-[400px] w-[500px] border border-black border-solid bg-green-600 rounded-2xl' >
             <div className='flex justify-between' >
             <input className='border border-black text-black mt-4 ml-2 pl-2 text-2xl font-bold'  onChange={function(e){
                  handlechange(e)
             }} type="text" placeholder="Search" />
             <button className='p-2  border bg-black rounded-md text-white mt-4 mr-2' onClick={handleclick} > Search </button>
             </div> 
             <div>
             {loading ? <h2 className='text-2xl text-center mt-4 font-bold '> {data?.name} <span>{data?.sys.country}</span>
             </h2> : ""}
             {data && data.weather && data.weather[0].description && loading? <p className='text-2xl text-center'>{data.weather[0].description}</p> : ""}
             </div>
             {loading ? <div className='flex justify-center font-bold text-3xl mt-[25px]' >{getcurrentdate()}</div> : ""}
             <div className='flex justify-between mt-[50px]' >
             <div className='ml-8' >
                {data && data.wind && data.wind.speed && loading ? <h2 className='text-center' >{data.wind.speed}</h2>: ""}
               {loading? <p className='text-center text-2xl font-bold'>Wind Speed</p> : ""}
             </div>
               <div className='mr-8' >
                  {data && data.main && data.main.humidity && loading ? <h2 className='text-center' >{data.main.humidity}%</h2> : ""}
                 {loading ? <p className='font-bold  text-center text-2xl pl-2' >Humidity</p> : ""}
               </div>
             </div>
          </div>
          </div>  
          </div>
      )
}