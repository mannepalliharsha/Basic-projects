import {useRef} from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
export default function Profile(){
    const[name,setName]=useState("harsha");
    const[loading,setLoading]=useState(false);
    const[data,setData]=useState({});
    const inputref=useRef("");
    useEffect(function(){
        inputref.current.focus();
    },[])
    useEffect(function(){
         async function handle(){
                const response= await  axios.get(`https://api.github.com/users/${name}`)
                  const data=await response.data;
                  console.log(data);
                  setData(data);
               }
               handle();
    },[loading])
    console.log(data.login);
      return(
          <div>
              <div className='flex justify-center'>
              <input type="text" className="text-2xl border rounded-md text-center" ref={inputref} onChange={function(e){
                  
                    setName(e.target.value);
              }}  placeholder="SearchGithubUsername" />
               <button className='border rounded-md p-3 text-2xl ml-2' onClick={function(){
                   setLoading(!loading);
               }} 
                    > Search</button>
               </div>
               {data ? <div className='mt-4 border border-black bg-amber-100 rounded-3xl flex justify-center'>
                       <div className=''>
                      <div className='bg-contain h-[200px] w-[200px] bg-center rounded-full' style={{
                          backgroundImage : `url(${data.avatar_url})`
                      }} ></div>
                    <h2 className='text-3xl font-bold ' > Login : {data.login}</h2>
                    <h2 className='text-3xl font-bold' >id : {data.id}</h2>
                    <h2 className='text-3xl font-bold' >node_id : {data.node_id} </h2>
                      </div>  
                 </div> : ""}
          </div>
      )
}