import { useState } from "react";
import amazon from '../Images/amazon.png';
import { checkUserLoggedIn, isEmailValid } from "../Utils/Utils";
import { SinginAPi } from "../Services/AuthService";
import { API_ERROR_MSG } from "../Constants/errors";


function Login(){

    let userData=checkUserLoggedIn();
        if(userData==true){
            window.location="/"
        }


    let [loginData,setloginData]=useState({email:"",password:""});
    let[loginErrors,setLogInErrors]=useState({email: false, password : false,ApiError:false})

    const handleLogin= async()=>{
        console.log("1" ,loginData.email)

        let tempErrors= {loginErrors}
        let hasErrors=false;

        if(isEmailValid(loginData.email)==false){
            hasErrors=true
            tempErrors={...tempErrors, email:true}
            console.log(tempErrors.email)

        }else{
            tempErrors={...tempErrors, email:false}
        } 
        if(loginData.password.length<6){
            hasErrors=true
            tempErrors={...tempErrors, password:true}
        }else{
            tempErrors={...tempErrors, password:false}
        }

        setLogInErrors({...tempErrors})
        
        console.log(loginErrors.email)
        if(hasErrors==false){

            try{

                let response=await SinginAPi({...loginData})
                setLogInErrors({...loginErrors,ApiError:false})
                if(response.data.result=="success")
                {
                    localStorage.setItem("userData",JSON.stringify(response.data.data))
                    window.location="/"
                }
            }catch(error){
                console.log(error)
                setLogInErrors({...loginErrors,ApiError:true})

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
                                    <h5 className='text-center'>LogIn</h5>
                                    
                                    <div className='mt-3'>
                                        <label for="formEmail"><strong>Your Email</strong></label>
                                        <input className='form-control' type='text' placeholder='Enter Your Email' id='formEmail' onChange={e=>setloginData({...loginData,email:e.target.value})} ></input>
                                        <div className='text-danger fs-6'>{loginErrors.email==true && API_ERROR_MSG.LOGIN.EMAIL}</div>
                                    </div>
                                    <div className='mt-3'>
                                        <label for="formPassword"><strong>Password</strong></label>
                                        <input className='form-control' type='password' placeholder='Password' id='formPassword' onChange={e=>setloginData({...loginData,password:e.target.value})} ></input>
                                        <div><i className="bi bi-info"></i> <span  className='fs-6'>Password Must be 8 Characters</span></div>
                                        <div className='text-danger fs-6'>{loginErrors.password==true && API_ERROR_MSG.LOGIN.PASSWORD } </div>
                                    </div>
                                    
                                        <div className="ps-5">
                                            <a href="reset-password">Forgot</a>
                                        </div>
                                    
                                    <div className="d-grid mt-3">
                                        <button className="btn btn-warning" type="button" onClick={e=>handleLogin()}>Login</button>
                                        <div className='text-danger fs-6'>{loginErrors.ApiError==true && API_ERROR_MSG.LOGIN.API_ERROR}</div>

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
}
export default Login;