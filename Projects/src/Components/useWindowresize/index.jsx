import useWindow from "./windowresize"

export default function UseWindowresize(){
      const windowsize=useWindow();
       return(
          <div>
             <h2>Window</h2>
             <p> width is {windowsize.width} </p>
             <p>width is{windowsize.height}</p>
          </div>
       )
}