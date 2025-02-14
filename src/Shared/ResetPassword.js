import amazon from '../Images/amazon.png';
import { API_ERROR_MSG } from "../Constants/errors";
import { isEmailValid } from "../Utils/Utils";
import { useState } from 'react';
import { ResetPasswordAPI } from '../Services/AuthService';

function ResetPassword(){

    let [email,setEmail]=useState("");
     let[errors,setErrors]=useState({email: false,ApiError:false})
     let [apiMsg,setApiMsg]=useState("");

     const handleResetpassword= async()=>{

        let  haErrors=false;
        let tempErrors={...errors}
        if(isEmailValid(email)==false){
            haErrors=true;
                tempErrors={...tempErrors,email : true}
        }else{
            tempErrors={...tempErrors,email : false}
        }
        setErrors({...tempErrors})

        if(haErrors==false){

            try {
            let response=await ResetPasswordAPI({email:email});
            if(response.data.result=="success"){
                    setApiMsg(response.data.message)
                    setErrors({...errors,ApiError:false})
                    console.log(apiMsg)
            }
            } catch (error) {
                console.log(error)
                setApiMsg("")
                setErrors({...errors,ApiError:true})
            }

        }
     }
     

    return(
         <div className="container">
             <div className="row justify-content-center">
                <div className="col-4">
                     <div className='text-center'>
                        <img src={amazon} className='logo-img' alt='amazon logo'></img>
                    </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className='text-center'>Reset Passsword</h5>
                                            
                                 <div className='mt-3'>
                                     <label for="formEmail"><strong>Your Email</strong></label>
                                        <input className='form-control' type='text' placeholder='Enter Your Email' id='formEmail' onChange={e=>setEmail(e.target.value)} ></input>
                                        <div className='text-danger fs-6'>{errors.email==true && API_ERROR_MSG.RESET_PASSWORD.EMAIL}</div>
                                </div>

                                    <div className="d-grid mt-3">
                                        <button className="btn btn-warning" type="button" onClick={e=>handleResetpassword()}>Reset Password</button>
                                    <div className='text-success fs-6'> {apiMsg}</div>
                                         <div className='text-danger fs-6'>{errors.ApiError==true && API_ERROR_MSG.RESET_PASSWORD.API_ERROR}</div>
        
                                    </div>
                
                                </div>
                
                             </div>
                
                            </div>
                
                        </div>
                        <div className='row justify-content-center' >
                            <div className='col-4 text-center' >
                                <div className='row mt-3' >
                                    <div className='col-4'><a href='#'>Condition Of use</a></div>
                                    <div className='col-4'><a href='#'>Privacy Policy</a></div>
                                    <div className='col-4'><a href='#'>Help</a></div>
                
                                </div>
                                <div className='mt-5'>
                                        &copy; 1996-2024, Amazon.com ,Inc, or its Affilate 
                
                                </div>
                            </div>
                
                        </div>
                        
                    </div>
    )
}export default ResetPassword;