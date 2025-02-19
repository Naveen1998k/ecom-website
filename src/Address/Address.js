import Navbar from './../Shared/NavBar';
import Footer from './../Shared/Footer';
import { useEffect, useState } from 'react';
import AddNewAddress from './AddNewAddress';
import { getUserID } from '../Utils/Utils';
import { AdressViewAPI ,AdressDeleteAPI} from '../Services/addressService';
import SingleAddress from './SingleAddress';


function Address(){

    let [showAddress,setShowAddress]=useState(false)
    let [addressData,setAddressData]=useState([])

    useEffect(()=>{

        const getAddress=async()=>{
           try {
            let apiresponse=await AdressViewAPI({userId:getUserID()})
            console.log(apiresponse.data.data)
            setAddressData([...apiresponse.data.data])
           } catch (error) {
            console.log(error)
           }
        }
        getAddress();

    

    },[])

    const updateAddress=(data)=>{
        let tempData=addressData;
        tempData.push(data);
        setAddressData([...tempData])
    }

    const deleteAddress=async(id)=>{
        let tempData=addressData;
      tempData=  tempData.filter(address=>address.id!=id)
      setAddressData([...tempData])
     let res= await AdressDeleteAPI({addressId:id})
     console.log(res)



    }
    return (
        <div >
            <Navbar/>
            <div className='container mt-3'>
                <div className='row'>
                <div className='col-1'></div>
                <div className='col-8'>
                    <button className='btn btn-primary' onClick={e=>setShowAddress(true)}>AddAddress</button>
                    {
                        showAddress===true && <AddNewAddress  closeAddress={setShowAddress} addAddress={updateAddress}/>
                    }
                </div>
                <div className='col-3'></div>

                </div>
                <div className='row'>
                    <div className='col-3'>
                    {
                        addressData.map((address,i)=>(
                            <SingleAddress  adress={address} key={i} deleteAddress={deleteAddress} />
                        )

                        )
                    }

                    </div>
                </div>

            </div>
            <Footer/>

        </div>
    )
}
export default Address