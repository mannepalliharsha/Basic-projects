import {data} from './data'
import {useState} from 'react'
export default function Accordian(){
    const[selected,setSelected]=useState();
    const[multiselected,setMultiSelected]=useState(new Array(data.length).fill(null));
    const[signal,setSignal]=useState(false);
    const handleSingleSelection= function(id){
          if(selected==id){
              setSelected(null);
          }
          else{
              setSelected(id);
          }
    }
    const handleMutlipleSelection=function(id){
        const newone=[...multiselected];
          if(newone[id-1]==id){
               newone[id-1]=null;
          }
          else{
            newone[id-1]=id;
          }
          setMultiSelected(newone);
    }
    console.log(multiselected);
      return( 
         <div className='flex justify-center'>
            <div>
            <div className='text-center'>
                <button className="text-3xl font-bold rounded-md border pl-2 pr-2 mt-8 bg-slate-800 hover:bg-slate-950 text-white"  onClick={function(){
                      setSignal(true);
                }} >Enable MutliSelection </button>
            </div>
            <div className='mt-4' >
             {data && data.length>0 ?  
                data.map(function(dataitem){
                   return <div>
                       <div className='border rounded-lg mt-4 bg-amber-800' onClick={function(){
                          handleSingleSelection(dataitem.id);
                          handleMutlipleSelection(dataitem.id);
                       }}>
                        <div className='flex justify-between'>
                        <div className='mt-2'>
                          <h2 className='text-black pl-4' >{dataitem.question}</h2>
                        </div>  
                         <div>
                            <h2 className='pr-2 text-2xl'>+</h2>
                         </div> 
                         </div>  
                         {!signal ? <div className=''>
                             {selected==dataitem.id ? <div className='w-96 h-40 mt-2' ><h2 className='text-white pl-4 text-justify'>{dataitem.answer}</h2> </div>  : <div> </div> }
                            </div> :  multiselected.map(function(value){
                                // console.log(typeof(id));
                               console.log(value);
                                  if(value==dataitem.id){
                                    return <div className='w-96 h-40 mt-2  ' > <h2 className='text-white text-justify pl-4' > {dataitem.answer}</h2></div>
                                  }
                                  return null;
                            
                            }) }
                           
                        
                    
                      </div>   
                     </div> 
                }) : <div>No data found</div> }
             </div>
             </div>   
         </div>
      )
}