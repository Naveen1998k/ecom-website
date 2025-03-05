import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import {SideBySideMagnifier} from 'react-image-magnifiers'
import { ToastContainer, toast } from 'react-toastify';
import { checkUserLoggedIn } from "../Utils/Utils";

function SingleProduct(){


   

    const{productId}=useParams();
    let [product,setProduct]=useState(null)
    const [mainImage,setMainImage]=useState("");
     let[quntity,setQuntity]=useState(1)

    useEffect(()=>{

        const getProduct= async()=>{
            let productResponse=await axios.get("https://dummyjson.com/products/"+productId)
            console.log(productResponse.data)
            setProduct(productResponse.data)
            setMainImage(productResponse.data.images[0])
        }

        getProduct()
    },[])

    const handleAddToCart=async()=>{
        console.log(quntity,product.stock)

        let userData=checkUserLoggedIn();
        if(userData==false){
            window.location="/login"
        }

        if(quntity<=product.stock){

           let product={
            id:productId,quantity:quntity
           }
           let Products=[]
           Products.push(product)
           
           try {
            let res=await axios.post("https://dummyjson.com/carts/add",{
                userId:1,products:Products
               })

               toast.success("Add To Cart",{position:"top-center"})
           } catch (ex) {
            toast.error(ex.message,{position:"top-left"})
           }
            console.log("Call API")
        }else{
            toast.error("Stock Is Not Available",{position:"top-center"})
            console.log("Stock Is Not Available")
        }
    }

    return(
        <div>
            <Navbar/>
            <div className='container-fluid'>
                <div className='row mt-4'>
                    <div className='col-3 border'>
                        {
                            product !=null &&
                            <div className="row">
                                {
                                    product.images.map((image,i)=>(
                                       <div className="col-2" key={i}>
                                         <img src={image} className="img-thumbnail" onMouseOver={e=>setMainImage(image)}></img>
                                        </div>
                                    ))
                                } </div>
                        }
                                 {
                                    product !=null &&
                                    //<img src={mainImage} className="img-fluid"></img>
                                    <SideBySideMagnifier
                                        imageSrc={mainImage}
                                        alwaysInPlace={false}
                                        fillAvailableSpace={false}
                                        zoomPostion="right"
                                        zoomContainerBorder="1px solid #ccc"
                                        zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,0.2)"
                                        style={{width: "300px",height:"400px"}}
                                    />
                                }                   
                        
                    </div>
                    <div className='col-4 border'>
                        {
                            product !=null && <div>
                                {
                                  <div>
                                     <h1> {product?.title}</h1>
                                     <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i> &nbsp;{product?.rating}
                                     <div>
                                     <i className="bi bi-currency-rupee"></i> &nbsp;{product?.price}
                                        </div>

                                    </div>

                                }
                                </div>
                        }

                    </div>
                    <div className='col-3'>
                        <div className="card">
                            <div className="card-body">
                                <h5>Add To Cart</h5>
                                <select className="form-control mt-3" onChange={e=>setQuntity(e.target.value)}>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </select>
                                <div className="d-grid gap-2 mt-3">
                                    <button className="btn btn-warning" type="button" onClick={e=>handleAddToCart()}>Add To Cart</button>
                                   
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
            <ToastContainer />
            <Footer/>
        </div>
    )
}
export default SingleProduct;