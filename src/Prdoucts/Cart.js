
import Navbar from './../Shared/NavBar';
import Footer from './../Shared/Footer';
import { useEffect } from 'react';
import axios from 'axios';
function Cart(){


    useEffect(()=>{

        const getCartItems=async()=>{

            let userId=5;
            let res=await axios.get("https://dummyjson.com/carts/user/"+userId)
             console.log(res)
             console.log("11")

        }

        getCartItems();
    },[])

    return(
        <div>
            <Navbar/>
            <div>
                Cart Items
            </div>
            <Footer/>

        </div>
    )
}
export default Cart;