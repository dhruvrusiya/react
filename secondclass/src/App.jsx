import myimg from './insta photo.jpg'
import './App.css'

function App() {
  let name ="dhruv"
  let age=22
  let st ={
    color:"yellow",
    backgroundColor:"black",
    padding:"20px"

  }

  return ( <div>
      <nav className='navbar'><ul>
        <li>home </li>
        <li>about</li>
        <li>carrier</li>
        <li>contact</li>
        </ul></nav>

     <h1>hello chacha</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laudantium quia, rem natus adipisci id quod praesentium quisquam harum totam!'</p>
     <img src={myimg} alt="" />

     <h1 style={{backgroundColor:"red",color:"white"}}>my name is {name}</h1>
     <h1 style={st} >my age is {age}</h1>
     <h1 className='ex'>sdjhfbfaekjlfhbvjehfverjfh</h1>
     </div>

  )
}

export default App
