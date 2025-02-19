
import Address from './Address';
function SingleAddress({adress,deleteAddress}){


    return(      
           
<div className="card" >
    <div className="card-body">
        
            <div>{adress.flat},{adress.city},{adress.state},{adress.country}-{adress.pincode}</div>
            <div> Name:{adress.name} contactNumber:{adress.mobile}</div>
       
    </div>
    <div className='card-footer'>
        <div className="d-grid gap-2  d-md-block">
            <button className="btn btn-primary me-2" type="button">Edit</button>
            <button className="btn btn-danger" type="button" onClick={e=>deleteAddress(adress.id)}>Delete</button>
        </div>

    </div>
</div>

       
    )
}
export default SingleAddress;