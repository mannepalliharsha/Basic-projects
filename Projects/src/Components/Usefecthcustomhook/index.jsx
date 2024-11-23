import useFetch from "./hook"
export default function Customhookusefetch(){
    const[products,setProducts]=useFetch({url : "https://dummyjson.com/products?limit=100"})
    console.log(products);

      return(
          <div className='flex justify-center' >
            <div>
            <div className='font-bold text-3xl'>UseFecth Hook</div>
                {
                    products.map(function(item){
                          return(
                              <div>
                                 {item.title}
                              </div>
                          )
                    })
                }
          </div>
          </div>
      )
}