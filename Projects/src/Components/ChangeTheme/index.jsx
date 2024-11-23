
 import useLocalstorage from './useLocalstorage'
import {useState} from 'react'
import {useEffect} from 'react'
export default function Theme(){
    const[theme,setTheme]=useLocalstorage({key : "theme",defaultValue : "Dark"})
    const[color,setColor]=useState("");
      useEffect(function(){
            if(theme=="Dark"){
                 setColor("black")
            }
            else{
                  setColor("white")
            }
      },[theme])
      const text=color=="white" ? "text-black" : "text-white";
      const bg=color=="white" ? "bg-white" : "bg-black"; 
    return(
          <div className={`${text} ${bg} h-screen transition easy-in-out duration-500 flex flex-col justify-center`} >
            <div className='flex justify-center'>
            <div  >
            <p className='font-bold text-4xl' >Hello World</p>
            <button className= {`${bg} border border-red-600 rounded-lg font-bold text-3xl mt-8 p-2 `}  onClick={function(){
                 if(theme=="Dark"){
                     setTheme("Light")
                 }
                 else{
                    setTheme("Dark")
                 }
            }} > ChangeTheme</button>
           </div> 
           </div>
          </div>
    )
}
