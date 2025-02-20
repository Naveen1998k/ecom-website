import { useState } from "react";
import { checkUserLoggedIn } from "../Utils/Utils";
import { Link } from 'react-router-dom';
import { searchAPI } from "../Services/searchService";

function Navbar() {
    let loggeduserId = checkUserLoggedIn();
    let [showDropDown, setShowdropDown] = useState(true);
    let [sugestionforSearch, setSuggestionForSearch] = useState([]);

    const handleSearch = async (e) => {
        let keyword = e.target.value;

        if (keyword.length > 0) {
            try {
                let searchresponse = await searchAPI({ searchWord: keyword });
                let suggestionList = searchresponse.data.data;
                let suggestions = suggestionList.map(suggestion => suggestion.value);

                setSuggestionForSearch([...suggestions]);
                setShowdropDown(true);
            } catch (error) {
                console.log(error);
            }
        } else {
            setShowdropDown(false);
        }
    };

    const handleSuggestionClick = (data) => {
        console.log(data);
        window.location = "/product-search?keyword=" + data;
    };

    const logOutUser = () => {
        let trackingid = localStorage.getItem("trackingId");
        localStorage.clear();
        localStorage.setItem("trackingId", trackingid);
        window.location = '/';
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold fs-3" to="/">Amazon</Link>

                <div className="input-group ms-3 w-50">
                    <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action before</a></li>
                        <li><a className="dropdown-item" href="#">Another action before</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                    <input type="text" className="form-control rounded-start-pill" placeholder="Search products..." onChange={handleSearch} />
                    <button className="btn btn-outline-light rounded-end-pill" type="button"><i className="bi bi-search"></i></button>

                    {showDropDown && (
                        <div className="search-dropdown position-absolute w-50 bg-white mt-1 shadow rounded">
                            <ul className="list-group">
                                {sugestionforSearch.map((suggestion, i) => (
                                    <li key={i} className="list-group-item list-group-item-action" onClick={() => handleSuggestionClick(suggestion)}>
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="d-flex ms-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link text-white fw-semibold" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white fw-semibold" to="/services">Services</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white fw-semibold" to="/contact">Contact Us</Link></li>
                    </ul>

                    <div className="dropdown ms-3">
                        <button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Account
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {!loggeduserId ? (
                                <>
                                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                    <li><Link className="dropdown-item" to="/create-account">New user? <span className="text-primary">Start here</span></Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link className="dropdown-item" onClick={logOutUser}>Logout</Link></li>
                                    <li><Link to="/cart" className="dropdown-item">Cart Items</Link></li>
                                    <li><Link to="/address" className="dropdown-item">Manage Address</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
