import amazon from '../Images/amazon.png';

function Signup(){
    return(
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-4">
                    <div className='text-center'>
                        <img src={amazon} className='logo-img'></img>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5>Create Account</h5>
                            <div className='mt-3'>
                                <label for="formName"><strong>Your Name</strong></label>
                                <input className='form-control' type='text' placeholder='Enter Your Name' id='formName'></input>
                            </div>
                            <div className='mt-3'>
                                <label for="formEmail"><strong>Your Email</strong></label>
                                <input className='form-control' type='text' placeholder='Enter Your Email' id='formEmail'></input>
                            </div>
                            <div className='mt-3'>
                                <label for="formPassword"><strong>Password</strong></label>
                                <input className='form-control' type='password' placeholder='Password' id='formPassword'></input>
                                <div><i className="bi bi-info"></i> <span  className='fs-6'>Password Must be 8 Characters</span></div>
                            </div>
                            <div className='mt-3'>
                                <span><p className='fs-6'>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p></span>
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-warning" type="button">Create Account</button>
                               
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