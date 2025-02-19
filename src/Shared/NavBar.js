import { useState } from "react";
import { checkUserLoggedIn } from "../Utils/Utils";
import { Link } from 'react-router-dom'
import { searchAPI } from "../Services/searchService";


function Navbar(){

   
    let loggeduserId=checkUserLoggedIn();
    let[showDropDown,setShowdropDown]=useState(true);
    let [sugestionforSearch,setSuggestionForSearch]=useState([])
    


    const handleSearch=async(e)=>{
       let keyword=e.target.value;

        if(keyword.length>0){
                try {
                    let searchresponse=await searchAPI({searchWord:keyword})
                      //  console.log(searchresponse)
                        let suggestionList=searchresponse.data.data;
                       let suggestions= suggestionList.map(suggestion=>{
                            return suggestion.value;


                            
                        })
                        console.log(suggestions)
                        setSuggestionForSearch([...suggestions])
                        setShowdropDown(true)
                } catch (error) {
                    console.log(error)
                }
        }else{
            setShowdropDown(false)
        }

    }

    const handleSuggestionClick=(data)=>{

        console.log(data)
        window.location="/product-search?keyword="+data
    }

    const logOutUser=()=>{
        let trackingid= localStorage.getItem("trackingId");
        localStorage.clear();
        localStorage.setItem("trackingId",trackingid)
        window.location='/'
    }

    return(
       <nav className="navbar bg-body-tertiary navbar-expand-lg">
        <div className="container-fluid">
            <h3 className="navbar-brand">Amazon</h3>
            <div className="input-group">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action before</a></li>
                    <li><a className="dropdown-item" href="#">Another action before</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
                <input type="text" className="form-control" aria-label="Text input with 2 dropdown buttons" onChange={e=>handleSearch(e)}/>
                <button className="btn btn-outline-secondary " type="button" ><i className="bi bi-search"></i></button>
                {
                    showDropDown==true &&
                    <div className="search-dropdown">
                        {
                            sugestionforSearch.map((suggestion,i)=>(
                               <div key={i} className="suggestion-items" onClick={e=>handleSuggestionClick(suggestion)}>{suggestion} </div>
                                
                            ))
                        }
                    
                </div>
                }
            </div>
            <div className="d-flex">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/serices">Services</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                </ul>                   
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Account
                        </button>
                        {
                            loggeduserId==false &&
                            <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="login">Login</Link></li>
                            <li><Link className="dropdown-item" to="create-account">New user? <span className="text-primary">start here</span></Link></li>
                        </ul>
                        }
                        {
                            loggeduserId == true &&
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" onClick={e=>logOutUser()} >Logout</Link></li>
                                <li><Link to="/address" className="dropdown-item"  >Manage Address</Link></li>
                            </ul>
                        }
                    </div> 

                
            </div>
        </div>


       </nav>
    )
}
export default Navbar;