import {useState} from 'react';
import {FaStar} from 'react-icons/fa'
export default function StarRating({stars}){
    const[star,setStar]=useState(new Array(stars).fill(""));
    const [color,setColor]=useState("");
    194,209,5
    const handleclick=function(index){
         console.log(index);
        let newone=[...star];
        for(let i=0;i<=index;i++){
            newone[i]="rgb(194,209,5)"
        }
        setStar(newone);
         
        }
    const handlemousemove=function(index){
        let newone=[...star];
          for(let i=0;i<=index;i++){
              newone[i]="rgb(194,209,5)"
          }
          for(let i=index+1;i<stars;i++){
              newone[i]="";
          }
          setStar(newone);
          console.log(index)
    }
    const handlemouseleave=function(index){
            // let newone=[...star];
            // setStar(newone);
    }
  //  console.log(star);
      return(
          <div className='flex justify-center' >
            <div className='flex' >
               {
                 star.map((value,index)=>{
                     return(
                        <FaStar 
                           key={index}
                           size={40}
                           color={value}
                           onClick={function(){
                              handleclick(index)
                           }}
                           onMouseMove={function(){
                               handlemousemove(index)
                           }}
                           onMouseLeave={function(){
                            handlemouseleave(index)}
                           }
                        />
                     )
                 })

                 }
            </div>               
          </div>
      )
}