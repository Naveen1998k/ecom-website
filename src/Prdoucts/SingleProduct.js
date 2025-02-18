import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import {SideBySideMagnifier} from 'react-image-magnifiers'

function SingleProduct(){

    const{productId}=useParams();
    let [product,setProduct]=useState(null)
    const [mainImage,setMainImage]=useState("");

    useEffect(()=>{

        const getProduct= async()=>{
            let productResponse=await axios.get("https://dummyjson.com/products/"+productId)
            console.log(productResponse.data)
            setProduct(productResponse.data)
            setMainImage(productResponse.data.images[0])
        }

        getProduct()
    },[])

    return(
        <div>
            <Navbar/>
            <div className='container-fluid'>
                <div className='row mt-4'>
                    <div className='col-5'>
                        {
                            product !=null &&
                            <div className="row">
                                {
                                    product.images.map((image,i)=>(
                                       <div className="col-2" key={i}>
                                         <img src={image} className="img-thumbnail" onMouseOver={e=>setMainImage(image)}></img>
                                        </div>
                                    ))
                                }{
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

                            
                        }
                    </div>
                    <div className='col-4'></div>
                    <div className='col-3'></div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default SingleProduct;