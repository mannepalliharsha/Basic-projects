import Menulist from "./menu-list"
import {FaMinus ,FaPlus} from 'react-icons/fa'
import {useState} from 'react'
export default function Menuitem({item}){
    const[displaycurrentchildren,setDisplaycurrentchild]=useState({});
    const  togglebutton=function(label){
            console.log(label);
          setDisplaycurrentchild({
              ...displaycurrentchildren,[label] : !displaycurrentchildren[label],
          });
    }
    console.log(displaycurrentchildren);
      return(
          <li className=' mt-2 ml-4'  >
            <div className="flex justify-between items-center gap-4 cursor-pointer text-white" >
               <p className="text-2xl font-bold" >{item.label}</p>
                {item && item.children && item.children.length >0 ? <span onClick={() => togglebutton(item.label)}  >
                    { 
                        displaycurrentchildren[item.label] ? <FaMinus size={25} color={"white"} ></FaMinus> : <FaPlus size={25} color ={"white"}   ></FaPlus>
                    }
                </span> : null }
            </div>  
              {
                item && item.children && item.children.length>0 && displaycurrentchildren[item.label] ? (
                 <Menulist menus={item.children}   ></Menulist> ) : null
              }  
          </li>
      )
}