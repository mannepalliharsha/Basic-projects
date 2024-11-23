import {useState} from 'react'
export default function Pop({onClick}){
    const[clos,setClose]=useState(false);
    console.log(clos);
      return(
        <div className='' >
        {!clos ?
            <div className=''>
              <div className=' h-[100px] w-[1000px] border border-black  text-center bg-green-600'>
                    <span className="flex justify-end pr-4 font-bold text-3xl cursor-pointer animate-pulse" onClick={onClick
                    } > X</span>
                  <h2 className='mt-10 font-bold' >customises Header</h2>
              </div>
              <div className='h-[200px] w-[1000px] border border-black text-center bg-white '>
                  <h2 className='font-bold mt-20'> customised body</h2>
              </div>
              <div className=' h-[100px] w-[1000px] border border-black  text-center bg-green-600' >
                  <h2 className='mt-10 font-bold' >customised footer </h2>
              </div>
          </div> : "" }
          </div>
      )
}