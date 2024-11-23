import {useState,useEffect} from 'react'
export default function Loadmoredata(){
    const[products,setProducts]=useState([]);
    const[count,setCount]=useState(0);
     const[loading,setLoading]=useState(false);
     const[disablebutton,setDisablebutton]=useState(false);

     async function fetchProducts() {
        try {
          setLoading(true);
          const response = await fetch(
            `https://dummyjson.com/products?limit=20&skip=${
              count === 0 ? 0 : count * 20
            }`
          );
    
          const result = await response.json();
            if(count==0 && result && result.products && result.products.length){
                  setProducts(result.products);
                  setLoading(false);
                  return 
            }
          if ( count>0 && result && result.products && result.products.length) {
             setProducts((previousdata)=>[...previousdata,...result.products]);
             setLoading(false);
          }
    
          console.log(result);
        } catch (e) {
          console.log(e);
          setLoading(false);
        }
      }
      useEffect(function(){
           fetchProducts();
      },[count]);
      useEffect(function(){
        console.log("product"+ products.length);
           if(products && products.length==100){
                setDisablebutton(true);
           }
      },[products])
      const handlebutton=function(){
       //  console.log(count*products.length);
            if(products && products.length>0){
                setCount(count+1);
            }
      }
       if(loading && products.length==0){
          return <div> Loading data please wait</div>
       }
      return(
        <div>
          <div className='  grid grid-cols-3' >
             { 
                products && products.length ?
                      products.map((product)=>(
                        <div  className="h-[300px] w-[400px] border ml-2 mt-2 flex justify-center border-black rounded-md ">
                          <img src={product.thumbnail} alt={product.title} />
                       </div>
                       )) : null
            } 
         </div >
            <div className="mt-4 flex justify-center" >
             <button  disabled={disablebutton} className='text-4xl border rounded-md p-4 text-white border-black bg-slate-950 hover:bg-slate-800 ' onClick={handlebutton} >Loadmoredata</button>
              </div> 
             {disablebutton ? <p className='text-4xl text-center font-bold'> you have reach 100 products</p> : null}
          </div>    
      )
}