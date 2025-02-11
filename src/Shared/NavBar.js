import Login from "./Login";
import Signup from "./Signup";

function Navbar(){

    return(
       <nav className="navbar bg-body-tertiary navbar-expand-lg">
        <div className="container">
            <h3 className="navbar-brand">NavBar Brand</h3>
            <div className="d-flex">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/serices">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
                </ul>
                <Login/>
                <Signup/>
            </div>
        </div>


       </nav>
    )
}
export default Navbar;