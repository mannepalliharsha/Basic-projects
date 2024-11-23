import {useState,useEffect} from 'react'
export default function TicTacToe({size}){
    const[arr,setArr]=useState(new Array(3*3).fill(""));
    const[turn,setTurn]=useState(true);
    const[winner,setWinner]=useState("");
    const[count,setCount]=useState(0);
    const[text,setText]=useState("");
    function handleClick(index){
          setCount(count+1);
        console.log(index);
         console.log("clickd")
           let nums=[...arr];
             if(nums[index]==="" && winner.length==0){
                nums[index]= turn==true ? "X" : "O" ;
               setTurn(!turn);
                setArr(nums);
             }
           
    }
    useEffect(function(){
        setText(turn? "NextPlayer is  X" : "NextPlayer is O");
    },[turn]);
    useEffect(function(){
         getWinner(arr)
    },[arr])
    function getWinner(arr){
          const patterns=[
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8,],
                [0,4,8],
                [2,4,6]
          ]
         for(let i=0;i<patterns.length;i++){
             const[x,y,z]=patterns[i];
              if(arr[x] && arr[x]===arr[y] && arr[x]===arr[z]){
                 console.log("winner"+arr[x]);
                   setWinner(arr[x]);
                   setText("winner is");
                   return ;
              }
         }
         if(count==9){
             console.log("Match");
              setText("Match draw");
              return ;
         }
    }
     console.log(text);
      return(
        <div>
          <div className='flex justify-center '>
                <div className='h-[300px] w-[300px] border rounded-md border-red-600' >
                <div className='grid grid-cols-3'>
             {
               arr.map(function(value,index){
                console.log(value);
                    return(
                     <div   className="border h-[100px] w-[100px]  border-red-600 " >
                         <div className='flex flex-col justify-center  h-full ' >
                          <div className='flex justify-center items-center'>
                               <button className=' text-3xl cursor-pointer  p-5 '  onClick={function(){
                                handleClick(index)}} >{value}</button>
                          </div>
                          </div>
                     </div>
                    )
})
             } 
           </div> 
           </div> 
          </div>
            <div className='flex justify-center' >
          <div className='mt-5' >
          <h2 className='font-bold text-3xl'> {text} {winner}</h2>
          <button className='p-2  text-3xl border rounded-md  text-center mt-5 ' onClick={function(){
               setArr(new Array(9).fill(""));
               setWinner("");
               setText("");
               setCount(0);
               setTurn(!turn);
          }}>Reset</button>
      </div> 
      </div>
     </div>
      )
}