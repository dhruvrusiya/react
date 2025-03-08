import { Link } from "react-router-dom"


function Navbar(){
    return(
        <>
        <nav>
            <h1>
                logo
            </h1>
            <ul>
                <li> <Link to="/" >home </Link></li>
                <li><Link to="/about"> about</Link></li>
              <li> <Link to="/service"  >service</Link> </li>
                <li> <Link to="/contact">contact</Link> </li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar