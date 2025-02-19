import { useState } from "react";
import { AdressAddAPI } from "../Services/addressService";


function AddNewAddress({closeAddress,addAddress}){

    let[addressData,setAddressData]=useState({
        name:'',mobile:'',address1:'',city:'',state:'',country:'',pincode:'',latlong:''
    })

    //AIzaSyDt-oOueVeP9EaF2-LxhX_-3yyBBNvBIb8
    const getLatLong=()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (postion)=>{
                    console.log(postion,postion.coords.longitude+','+postion.coords.latitude)
                    setAddressData({...addressData,latlong:postion.coords.longitude+','+postion.coords.latitude})
                    

                },
                ()=>{
                     alert("permission denied")   
                }
            )
           

        }else{
            alert("Geolocation Not Supported")
        }

    }

    const handleSaveAddress=async()=>{
            let apiresponse=await AdressAddAPI(addressData)
            console.log(apiresponse.data.data)
            addAddress(apiresponse.data.data)

    }

    const handleClosebtn=()=>{
        closeAddress(false);
    }
    return(
        <div className="card shadow-sm">
            <div className="card-body">

                    <div className="">
                        <button className="btn btn-primary" onClick={e=>getLatLong()} ><i className="bi bi-crosshair"></i> Use My Location</button>

                    </div>
                
                <div className="mt-2">
                    <label className="small">Name</label>
                    <input type="text" className="form-control" value={addressData.name} onChange={e=>setAddressData({...addressData,name:e.target.value})}></input>
                </div>
                <div className="mt-2">
                    <label className="small">Mobile</label>
                    <input type="text" className="form-control" value={addressData.mobile} onChange={e=>setAddressData({...addressData,mobile:e.target.value})}></input>
                </div>
                <div className="mt-2">
                    <label className="small">Address</label>
                    <input type="text" className="form-control" value={addressData.address1} onChange={e=>setAddressData({...addressData,address1:e.target.value})}></input>
                </div>
                <div className="mt-2">
                    <label className="small">City</label>
                    <input type="text" className="form-control" value={addressData.city} onChange={e=>setAddressData({...addressData,city:e.target.value})}></input>
                </div>
                <div className="mt-2">
                    <label className="small">State</label>
                    <input type="text" className="form-control" value={addressData.state} onChange={e=>setAddressData({...addressData,state:e.target.value})}></input>
                </div>
                <div className="mt-2">
                    <label className="small">Country</label>
                    <input type="text" className="form-control" value={addressData.country} onChange={e=>setAddressData({...addressData,country:e.target.value})}></input>
                </div>
                <div className="mt-2">
                    <label className="small">Pincode</label>
                    <input type="text" className="form-control" value={addressData.pincode} onChange={e=>setAddressData({...addressData,pincode:e.target.value})}></input>
                </div>
               <div className="mt-4">
                    <button className="btn btn-primary" onClick={e=>handleSaveAddress()}>Add Address</button>
               </div>

            </div>
            <div className="d-grid d-md-block">
                <button className="btn btn-primary" type="button" onChange={e=>handleClosebtn()}>Close</button>
              
            </div>
           
        </div>
    )
}
export default AddNewAddress;