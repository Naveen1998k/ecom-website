import { useState } from "react";

function Login(){
    let[display,setDisplay]=useState("modal dis-none");
    let isModelOpen=false;

    function handlemodel(){
     
     if(isModelOpen===false){
        setDisplay("modal dis-block")
        isModelOpen=true;
     }else{
        setDisplay("modal dis-none")
        isModelOpen=false;
     }
       
    }

    return(
        <div>
             <div><button className="btn btn-primary me-3" onClick={e=>handlemodel()}>Login</button></div>
                <div className={display} >
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close" onClick={e=>handlemodel()} data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                         </div>
                 </div>
            </div>
        </div>
       
    )
}
export default Login;