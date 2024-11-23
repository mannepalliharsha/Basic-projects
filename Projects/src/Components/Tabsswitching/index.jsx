import data from './data'
import {useState,useEffect} from 'react'
export default  function Tabs(){
    const[dataitem,setItem]=useState([]);
    const[currindex,setCurrent]=useState(-1);
    const[color ,setColor]=useState([new Array(3).fill("")]);
    useEffect(function(){
          const element= data;
           setItem(element);
    },[])
    function handlechange(index){
        console.log(index);
          setCurrent(index)
          const arr=[...color];

          arr[index]="blue"
        for(let i= index+1;i<color.length;i++){
            arr[i]="red"
        }
        for(let i=0; i<index ;i++){
              arr[i]="red"
        }
          setColor(arr);
          console.log(arr);
    }
      return(
       <div className='cursor-pointer bg ' >
          <div className='inline-flex justify-center'>
           {dataitem.map(function(item,index){
               return(
                   <div className={` bg-${color[index]}-600 border border-black text-3xl cursor-pointer`} key={index} onClick={function(){
                      handlechange(index)
                   }}>
                    <h2>{item.label}</h2>
                   </div>
               )
           })}
             </div>
            {dataitem[currindex] && dataitem[currindex].content ? <div><h2 className='text-3xl font-bold text-center' >{dataitem[currindex].content} </h2> </div> : "" }
          </div>
      )
}