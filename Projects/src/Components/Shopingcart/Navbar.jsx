import {useNavigate} from 'react-router-dom'
export default function Navbar(){
    const navigate=useNavigate();
       return(
          <div className='flex justify-between' >
             <div className='ml-[25%]'>
                 <h2 className=" font-bold text-2xl ">SHOPPING CART</h2>
             </div>
             <div className="flex mr-[25%] cursor-pointer" >
             <div className='mr-5 text-2xl' onClick={function(){
                  navigate('/shopping')
             }}>
                  Home
             </div>
             <div className='text-2xl cursor-pointer ml-5 ' onClick={function(){
                   navigate('/cart')
             }}>
                 Cart
             </div>
             </div>  
          </div>
       )
}