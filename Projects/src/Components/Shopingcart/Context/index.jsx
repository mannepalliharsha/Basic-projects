import { createContext } from "react";
import {useState} from 'react'
import axios from 'axios'
export   const Gobalshop= createContext();
export default function Gobalcart({children}){
     const[clothes,setClothes]=useState([]);
     const[ cartitems,setItems]=useState([]);
     const[prices,setPrices]=useState(0);
     const[text,setText]=useState([]);
    async function Addtoclothes(){
        try{
            const response= await axios.get('https://api.escuelajs.co/api/v1/products');
            const res= await response.data;
             setClothes(res);
             console.log(res.length);
             let arr=[...text];
             if(arr.length==0){
                arr=new Array(res.length).fill("Add To Cart");
                setText(arr);
             }
              
     }
        catch(e){
              console.log(e);
        }
     }
     function Addtocart(item,i){
         console.log(item);
           const updateitems=[...cartitems];
           const index=updateitems.findIndex(element=>element.title===item.title);
            const arr=[...text];
              arr[i]= arr[i]==="Add To Cart" ? "Remove From Cart" : "Add To Cart"
              setText(arr);
           if(index==-1){
               updateitems.push(item);
               setPrices(price=> price+item.price*10);
               setItems(updateitems);
               return ;
           }
     }
     function removeitem(item,index){
         const updateitem=cartitems.filter(cartitem=>cartitem.title!==item.title);
          const arr=[...text];
          arr[index]=arr[index]==="Remove From Cart" ? "Add To Cart" : "Remove From Cart"
          setText(arr);
         setItems(updateitem);
     }
     return(
          <Gobalshop.Provider value={
              {
                 clothes,
                 Addtoclothes,
                 Addtocart,
                 cartitems,
                 removeitem,
                 prices,
                 text
              }
          }>
            {children}
          </Gobalshop.Provider>
     )
}