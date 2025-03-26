// import { useState } from 'react'

// const App= () =>{
//   let [frmdata,setfrmdata]=useState()
//   let [gharkapata,setgharkapata]=useState()
//   let [mobile,setmobile]=useState()
//   let [email,setemail]=useState();

//   function Inputvalue(e){
//     console.log(e.target.value);
    
//     setfrmdata(e.target.value)
//   }
// function Gharkapata(a){
//     setgharkapata(a.target.value);
// }
// function Mobile(b){
//   setmobile(b.target.value);
// }
// function Email(s){
//   setemail(s.target.value);
// }
//   return (
//     <>
//       <h1> subh naam :
//         {frmdata}
//       </h1> 
//       <h1>address  :{gharkapata}</h1>
      

//       <h1>mobile number : {mobile}</h1>

//       <h1>Email  : {email}</h1>
     
//      <form action="">
//       <label htmlFor="">name</label>
//       <input type="text" onChange={Inputvalue} />
//       <br />

//       <label htmlFor="">address   </label>
//       <input type="text" onChange={Gharkapata} />
//       <br />

//       <label htmlFor="">mobile number</label>
//       <input type="text" onChange={Mobile} />
//       <br />

//       <label htmlFor="">email is</label>
//       <input type="text" onChange={Email} />
      

//      </form>

//     </>
//   )
// }

// export default App


import { useState } from 'react'

const App= () =>{
  let [frmdata,setfrmdata]=useState({
    username:"",age:"",
  })
    

  function Inputvalue(e){
    
    
   
  }

  return (
    <>
      <h1> subh naam :
        {frmdata}
      </h1> 
     
     
     <form action="">
      <label htmlFor="">name</label>
      <input type="text" onChange={Inputvalue} />
      <br />

      <label htmlFor="">address   </label>
      <input type="text" onChange={Gharkapata} />
      <br />

      <label htmlFor="">mobile number</label>
      <input type="text" onChange={Mobile} />
      <br />

      <label htmlFor="">email is</label>
      <input type="text" onChange={Email} />
      

     </form>

    </>
  )
}

export default App
