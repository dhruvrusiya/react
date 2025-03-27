import { useState } from "react";

const Form =() =>{
   let [data,setdata]=useState({
    name:"",age:"",mobile:"",email:"",gender:""
   })

   function datasend(e){
    const{name,value}= e.target 
    setdata({...data,[name]:value})
   }

   function finals(e){
    e.preventDefault()
    console.log(data);
    
   }



    return(
        <>
      <h1>form from from component
        
      </h1>
      <form onSubmit={finals}>

   <label htmlFor="">name</label>
   <input type="text" name="name" onChange={datasend} />
     <br /> <br />
   <label htmlFor="">age</label>
   <input type="text" name="age" onChange={datasend} />
   <br /> <br />
   <label htmlFor="">mobile</label>
   <input type="text" name="mobile" onChange={datasend} />
 <br /> <br />
 <label htmlFor="">email</label>
   <input type="text" name="email" onChange={datasend} />
 <br /> <br />
 <label htmlFor="">gender</label>
   <input type="text" name="gender" onChange={datasend} />
 <br /> <br />

 <input type="submit" />

 </form>
   </>
    )

}

export default Form