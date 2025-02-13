import { API_ERROR_MSG } from '../Constants/errors';
import amazon from '../Images/amazon.png';
import { SingupApi } from '../Services/AuthService';
import {checkUserLoggedIn, isEmailValid} from '../Utils/Utils'
import {useState} from 'react'

function Signup(){

    let userData=checkUserLoggedIn();
    if(userData==true){
        window.location="/"
    }

    const [signupData,setSignUpData]=useState({name:"",email:"",password:""})
    const[signUpErrors,setSignUpErrors]=useState({name:false,email:false,password:false})

    const handleName=(e)=>{
        console.log(e.target.value)
        setSignUpData({...signupData, name:e.target.value})
    }
    const handleEmail=(e)=>{
        console.log(e.target.value)
        setSignUpData({...signupData,email:e.target.value})
    }

    const handlePassword=(e)=>{
        console.log(e.target.value)
        setSignUpData({...signupData,password:e.target.value})
    }


    const handleSignUpAPi=async ()=>{

        let tempErrors={signUpErrors}
        let hasErrors=false;
        if(signupData.name.length<3){
            hasErrors=true;
            tempErrors={...tempErrors,name:true}
        }else{
            tempErrors={...tempErrors,name:false}
        }
        if(isEmailValid(signupData.email)===false){
            hasErrors=true;
            tempErrors={...tempErrors,email:true}
            
        }else{
            tempErrors={...tempErrors,email:false}
        }
        if(signupData.password.length<6){
            hasErrors=true;
                tempErrors={...tempErrors,password:true}
        }else{
            tempErrors={...tempErrors,password:false}
        }
        setSignUpErrors({...tempErrors})

        if(hasErrors==false){
            
            let apiData=await SingupApi({...signupData})
           
            if(apiData.data.result=='success'){
                localStorage.setItem("userData",JSON.stringify(apiData.data.data))
                localStorage.setItem("trackingId",101)
                window.location="/"
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
                            <h5 className='text-center'>Create Account</h5>
                            <div className='mt-3'>
                                <label for="formName"><strong>Your Name</strong></label>
                                <input className='form-control' type='text' placeholder='Enter Your Name' id='formName' onChange={e=>handleName(e)}></input>
                                <div className='text-danger fs-6'>{signUpErrors.name==true && API_ERROR_MSG.SIGNUP.NAME}</div>
                            </div>
                            <div className='mt-3'>
                                <label for="formEmail"><strong>Your Email</strong></label>
                                <input className='form-control' type='text' placeholder='Enter Your Email' id='formEmail'  onChange={e=>handleEmail(e)}></input>
                                <div className='text-danger fs-6'>{signUpErrors.email==true && API_ERROR_MSG.SIGNUP.EMAIL}</div>
                            </div>
                            <div className='mt-3'>
                                <label for="formPassword"><strong>Password</strong></label>
                                <input className='form-control' type='password' placeholder='Password' id='formPassword' onChange={e=>handlePassword(e)}></input>
                                <div><i className="bi bi-info"></i> <span  className='fs-6'>Password Must be 8 Characters</span></div>
                                <div className='text-danger fs-6'>{signUpErrors.password==true && API_ERROR_MSG.SIGNUP.PASSWORD}</div>
                            </div>
                            <div className='mt-3'>
                                <span><p className='fs-6'>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p></span>
                            </div>
                            <div className="d-grid">
                                <button className="btn btn-warning" type="button"  onClick={e=>handleSignUpAPi()}>Create Account</button>
                               
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
}export default Signup;