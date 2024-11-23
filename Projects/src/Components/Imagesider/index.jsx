import {BsArrowLeftCircle,BsArrowRightCircle} from 'react-icons/bs'
import {useState,useEffect} from 'react';
  import {RxDotFilled} from 'react-icons/rx'
export default function Iamgesider(){
     const slide=[
           {
               url : "/image1.jpeg"   
           },
           {
               url : "/image2.jpeg"
           },
           {
              url : "/image3.jpeg"
           },
           {  
            url : "/image4.jpeg"
           },{ 
            url : "/image5.jpeg"
           }
     ]
     const[image,setIamge]=useState(slide[0].url);
     const[index1,setIndex]=useState(0);
       const handleleft=function(){
                 if(index1==0){
                      setIamge(slide[slide.length-1].url);
                      setIndex(slide.length-1);
                      return ;
                 }
               if(index1>0){
                   setIamge(slide[index1-1].url);
                   setIndex(index1-1);
                   return ;
               }
       }
       const handleright=function(){
          console.log(index1);
          console.log(slide.length)
             if(index1==slide.length-1){
                  setIamge(slide[0].url);
                  setIndex(0);
             }
             if(index1<slide.length-1){
                  setIamge(slide[index1+1].url);
                  setIndex(index1+1);
             }
       }
       const dotclick=function(i){
            console.log(i);
               setIamge(slide[i].url);
               setIndex(i);
       }
      return( 
          <div  className='  max-w-[700px] h-[500px]  w-full m-auto px-2 py-16 relative  group ' >
             <div className=' h-full w-full rounded-2xl bg-cover bg-center ' style={{backgroundImage : `url(${image})`}} >  
             </div>
             <div className=' hidden group-hover:block absolute top-1/2 left-5   text-2xl p-2 cursor-pointer ' >
               <BsArrowLeftCircle size={"40"} color={"black"} onClick={handleleft } ></BsArrowLeftCircle>
             </div>
             <div className=' hidden  group-hover:block  absolute top-1/2  right-5 text-2xl p-2 cursor-pointer ' >
               <BsArrowRightCircle size={"40"} color={"black"} onClick={handleright} ></BsArrowRightCircle>
             </div>
             <div className='flex justify-center mt-4 ' >
             {
                     slide.map((_,index)=>{
                        return(
                            <div className='cursor-pointer key={index}  ' >
                            <RxDotFilled color="black" size={30} onClick={function(){
                                  dotclick(index)
                            }}  ></RxDotFilled>
                            </div>
                        ) 

                     })
                }
              </div>  
          </div> 
      )
}
   