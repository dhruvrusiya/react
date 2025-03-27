

import Form from './Form'
import React,{ useState } from 'react'

const App = () => {
  let [frmdata,setfrmdata]= useState({
    username:"",address:""
  })
    

  function Inputvalue(e){
    const {name,value} = e.target
    setfrmdata({...frmdata,[name]:value})
    
    
   
  }

  function finalsubmit(e){
    e.preventDefault()
    console.log(frmdata);
    localStorage.setItem("userdata",JSON.stringify(frmdata))
    
  }

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

    

     <Form/>
    </>
  )
}

export default App






