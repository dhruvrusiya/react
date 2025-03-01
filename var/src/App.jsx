
function App() {
 let name="qasim"
 let ob= {
  fname : "harsh",
  lname : "bediya",
  age : 22,
  contact : 2651651

 }
 let arr=[
  "dhruv","aditya","harsh","nitin","qasim",22,54
 ]

  return (
    <>
      <h1>welome {name}</h1>
      <h1>My First name is {ob.fname}   {ob.lname}  </h1>
      <h1>{arr[0]}</h1>
      <h1>{arr[1]}</h1> 
      <h1>{arr[2]}</h1>
      <h1>{arr[3]}</h1>
      <h1>{arr[4]}</h1> 
      <h1>{arr[5]}</h1>
    </>
  )
}

export default App
