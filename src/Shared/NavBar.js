

function Navbar(){

   
    let loggeduserId=localStorage.getItem("userId")

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
                {
                    loggeduserId ==null &&
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Account
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="login">Login</a></li>
                            <li><a className="dropdown-item" href="create-account">New user? <span className="text-primary">start here</span></a></li>
                         
                        </ul>
                    </div> 

                }
            </div>
        </div>


       </nav>
    )
}
export default Navbar;