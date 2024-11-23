 import Menulist from "./menu-list"
export default function Treeview({list}){
      return(
          <div className='min-h-screen w-[400px] bg-blue-600 mt-2' >
            <Menulist menus={list} ></Menulist>
          </div>
      )
}