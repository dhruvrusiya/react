import { useState } from "react";

function About(){
    let[color,setcolor]=useState("pink")
    let[state,setstate]=useState("block")
    let [ar,setAr] =useState({
        name:"Qasim",contact:1234
    })
    let [data,setData] =useState([
        1,2,3,"dhruv","rusiya"
    ])
    function fun5(){
        setAr({name:"dhruv",contact:15646})
     
    }
    function fun(){
        setData([4,5,2,5,])
    }

    
    return(
    <>
    <div style={{height:"100vh",width:"100vw" ,backgroundColor:color}} >
    <h1>About {ar.name} {ar.contact}</h1>
    <h1>array is {data[1] } {data[1]}</h1>
    <h1 style={{display:state}} >happy birthday qasim sir </h1>
    <button onClick={fun5} >change obj</button>
    <button onClick={fun} > chnagena arr</button>
    <button  onClick={()=>setcolor("black")}  >dark</button>
    <button onClick={()=>setstate("none")} > hide it</button>
    <button onClick={()=>setstate("block")} > show it</button>

    </div>
    </>
    )
}

export default About
