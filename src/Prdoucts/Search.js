import Navbar from './../Shared/NavBar';
import Footer from './../Shared/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import { ToastContainer, toast } from 'react-toastify';

function Productdata(){


    let searchKeyword="";
    let queryParams=  new URLSearchParams(window.location.search);
    searchKeyword=queryParams.get("keyword")
    let[products,setProducts]=useState([])

    useEffect(()=>{

        const getProducts=async()=>{

            let apires=await axios.get("https://dummyjson.com/products/search?q=iphone")
            console.log(apires.data.products)
            setProducts(apires.data.products);

        }

        getProducts();
    },[])

    return(
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                    {
                        products.map((product,i)=>(
                            <Product data={product} key={i}/>
                        ))
                    }
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}
export default Productdata;