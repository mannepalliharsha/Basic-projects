import {useEffect} from 'react'
export default function useOnclick(ref,handler){
      
    useEffect(function(){
        function listener(event){
             console.log(ref.current);
              console.log(event.target);
              if(!ref.current || ref.current.contains(event.target)){
                  return ;
              }
           handler();
        }
        window.addEventListener('mousedown',listener);
        //  document.addEventListener('touchstart',listener);
         return(
              function(){
                 window.removeEventListener('mousedown',listener);
                //   document.removeEventListener('touchstart',listener);
              }
         )

    })
}