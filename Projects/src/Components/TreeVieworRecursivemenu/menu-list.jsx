import  Menuitem from "./men-item"

export default function Menulist({menus}){
      return(
        <ul className='space-y-2' >
           { 
              menus && menus.length>0 ?
              menus.map((item)=>{
                 return(
                    <Menuitem item={item} ></Menuitem>
                 )
      } )   : null
            }
        </ul>
      )
}