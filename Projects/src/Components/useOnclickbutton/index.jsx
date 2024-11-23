import {useState,useRef} from 'react'
import useOnclick from './index';
export default function OnClickOutside(){
    const[showcontent,setShowcontent]=useState(false);
    console.log(showcontent);
    const ref=useRef();
    useOnclick(ref,()=>setShowcontent(!showcontent));
      return(
          <div ref={ref} >
            {
               showcontent?<div> 
                  <h2>Random information</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque exercitationem quas rem earum architecto quisquam ex minima asperiores soluta, beatae quia id quaerat doloribus unde alias blanditiis, fuga vitae deleniti!</p>
               </div> : <button className='p-2 border' onClick={function(){

                    setShowcontent(true);
               }}> Show Content </button>
            }
          </div>
      )
}