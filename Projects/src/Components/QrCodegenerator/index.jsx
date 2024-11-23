import QrCode from 'react-qr-code'
import {useState,useEffect} from 'react'
import {useRef} from 'react'
export default function QrCodegenerator(){
    const[input,setInput]=useState("");
    const[qr,setQr]=useState("");
    const inputref=useRef();
    //console.log(inputref);
       useEffect(function(){
           inputref.current.focus();
       },[input])
      return(
          <div>
            <h1 className='font-bold text-3xl text-center' >QRCODE GENERATOR</h1>
            <div className='flex justify-center mt-2' >
            <div>
            <div >
                 <input type="text" className='text-center text-3xl' ref={inputref} value={input}  placeholder="Enter the value" onChange={function(e){
                      setInput(e.target.value);
                 }} />
                 <button className='text-3xl border rounded-md border-black bg-slate-500 hover:bg-slate-800 ml-3' onClick={function(){
                      setQr(input);
                      setInput("");
                 }} >Generate</button>
            </div>
            <div className='mt-4' >
                { qr=="" && qr.length==0 ? "" :  <QrCode value={qr} size={400} bgColor='white'  ></QrCode> }
            </div>
            </div>
            </div>
          </div>
      )
}