

import Form from './Form'
import React,{ useEffect, useState } from 'react'

const App = () => {
  let [frmdata,setfrmdata]= useState({
    username:"",address:""
  })
    
  let [userdata,setUserdata]=useState({})

  function Inputvalue(e){
    const {name,value} = e.target
    setfrmdata({...frmdata,[name]:value})
    
    
   
  }

  function finalsubmit(e){
    e.preventDefault()
 
    localStorage.setItem("userdata",JSON.stringify(frmdata))
    
    ///vvb
  }

  useEffect(()=>{
    let localdata= JSON.parse(localStorage.getItem('userdata'))
    setUserdata(localdata)
  },[finalsubmit])

  return (
    <>
     
     
     
     <form onSubmit={finalsubmit}>
      <label htmlFor="">name</label>
      <input type="text" name='username' onChange={Inputvalue} />
      <br />

      <label htmlFor="">address   </label>
      <input type="text"  name='address'  onChange={Inputvalue} />
      <br />

      <label htmlFor="">mobile number</label>
      <input type="text"  name='mobile'   onChange={Inputvalue} />
      <br />

      <label htmlFor="">email is</label>
      <input type="text"  name='email'  onChange={Inputvalue} />
      
      <input type="submit" />

     </form>

    

     
     <h1>name :{userdata.username}</h1>
     <h1>address :{userdata.address}</h1>
     <h1>mobile :{userdata.mobile}</h1>
     <h1>email :{userdata.email}</h1>
    </>
  )
}

export default App






