import {useEffect,useState} from 'react'
export default function useWindow(){
       const[windowsize,setWindowsize]=useState({
            width : 0,
            height : 0
       })
        function handler(){
              const width =window.innerWidth;
               const height=window.innerHeight;
               setWindowsize({
                  width : width,
                   height : height
               })
        }
       useEffect(function(){
               handler()
             window.addEventListener('resize',handler)
               return(
                function(){
                    window.removeEventListener('resize',handler)
                }
               )
       },[])
       return windowsize;

}