
import { Route, Routes} from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import Contact from "./Contact"
import Service from "./Service"
function App() {
  return (
    <>
     <Navbar />
      <Routes>
       <Route path="/contact" element={ <Contact/> } />
       <Route path="/service"  element={ <Service/> }  />
       <Route index  element={ <Home />} />
       <Route path="/about" element={ <About />} />
       <Route path="/Navbar" element={ <Navbar />} />
      </Routes>
    </>
  )
}

export default App
