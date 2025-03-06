import { useState } from "react"
function Neww(){
    let [st,setst]=useState(true)
    let [show,setshow]=useState(true)
    let [count,setcount]=useState(1)
    function fun(){
        setcount(count+1)

    }
    function dec(){
        if(count>0){

        
        setcount(count-1)
        }
    }
    return(
        <>
        <h1>thi is new file</h1>
        { st ? <h1>welcome chacha</h1> : ""   }
        
        
        <button onClick={()=>setst(false)} >hide</button>
        <button onClick={()=>setst(true)} >show</button>
        <button onClick={()=>setst(!st)} >
            {st ? "hide" :"show"   }
        </button>
          
        <button onClick={fun} >increment</button>
        <button onClick={dec} >decrement</button>
        {count}
         


        </>
    )
}
export default Neww