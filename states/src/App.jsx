import { use, useState } from "react"

function App() {

  let [name,setname]=useState(" dhruv rusiya")
  let [age,setage]=useState("22")
  let [address,setadd]=useState("bhopal")
  let [course,setcourse]=useState("frontend dev")
  let [color,setcolor]=useState("black")
  function fun(){
    setname("harsh bediya")
  }
  function fun2(){
    setage("55")
  }

  function fun3(){
    setadd("chhatarpur")
  }
  return (
    <>
    <div style={{height:"100vh",width:"100vw" ,backgroundColor: color}}>
      <h1>my name is {name} </h1>
      <h1>and my age is {age}</h1>
      <h1>I am from {address}</h1>
      <h1>i am doing {course}</h1>


      <button onClick={fun}>change name </button>
      <button onClick={fun2}>change age</button>
      <button onClick={fun3}>change address</button>
      <button onClick={ ()=>setcourse("fullstack dev") }>change course</button>
      <button onClick={ ()=>setcolor("white")}>white hoja</button>
      <button onClick={ ()=>setcolor("red")}>red hoja</button>
      <button onClick={ ()=>setcolor("brown")} >bhora hoja</button>
     


      </div>
    </>
  )
}

export default App
