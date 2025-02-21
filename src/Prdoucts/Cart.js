import Navbar from './../Shared/NavBar';
import Footer from './../Shared/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() {
    let [cartData, setCartData] = useState([]);

    useEffect(() => {
        const getCartItems = async () => {
            try {
                let userId = 6;
                let res = await axios.get(`https://dummyjson.com/carts/user/${userId}`);
                setCartData([...res.data.carts]);
                toast.success("Cart items fetched", { position: "top-center" });
            } catch (ex) {
                toast.error(ex.message, { position: "top-left" });
            }
        };
        getCartItems();
    }, []);

    const increaseQuantity = (product, j, cart, i) => {
        let newQuantity = product.quantity + 1;
        let tempData = [...cartData];
        tempData[i]['products'][j].quantity = newQuantity;
        setCartData([...tempData]);

        let apiData={
          merge:true,
          products:[
            {
              id:product.id,
              quantity:newQuantity
            }
          ]
        }
        updateCart(apiData)
    };

    const decreaseQuantity = (product, j, cart, i) => {
      let newQuantity = product.quantity - 1;
        if (newQuantity > 0) {
            
            let tempData = [...cartData];
            tempData[i]['products'][j].quantity = newQuantity;
            setCartData([...tempData]);
        }

        let apiData={
          merge:true,
          products:[
            {
              id:product.id,
              quantity:newQuantity
            }
          ]
        }
        updateCart(apiData)
    };

    const calculateQuantityAndPrice=(products)=>{
      let totalQuantity=0;
      let totalPrice=0;
      products.forEach(product => {
        let tempTotalPrice=product.quantity*product.price;
        totalPrice=totalPrice+tempTotalPrice;
        totalQuantity=totalQuantity+product.quantity

        
      });
          return "("+totalQuantity+")"+ "="+totalPrice;
    }
    const updateCart=async(apiData)=>{

      try {
        let res=await axios.put("https://dummyjson.com/carts/1",apiData)
        
      } catch (ex) {
        toast.error("Update cart Is Not Completed")
      }
     
    }
    return (
        <div>
            <Navbar />
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-8 col-md-12'>
                      {
                        cartData.map((cart, i) => (
                            <div className='card mb-4 shadow-sm' key={i}>
                                <div className='card-body'>
                                  {
                                    cart.products.map((product, j) => (
                                        <div className='card border-0 mb-3 border-bottom pb-3' key={j}>
                                            <div className='row align-items-center'>
                                                <div className='col-md-2 text-center'>
                                                    <img src={product.thumbnail} className='img-fluid rounded' alt={product.title} />
                                                </div>
                                                <div className='col-md-8'>
                                                    <div className='card-body'>
                                                        <h6 className='fw-bold'>{product.title}</h6>
                                                        <div className='d-flex align-items-center'>
                                                            <button className='btn btn-outline-secondary btn-sm me-2' onClick={() => decreaseQuantity(product, j, cart, i)}>-</button>
                                                            <span className='fw-bold'>{product.quantity}</span>
                                                            <button className='btn btn-outline-secondary btn-sm ms-2' onClick={() => increaseQuantity(product, j, cart, i)}>+</button>
                                                        </div>
                                                        <div className='mt-2'>
                                                            <a href='#!' className='text-danger me-3'>Delete</a>
                                                            <a href='#!' className='text-primary'>Save for Later</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-2 text-end'>
                                                  <strong><i className="bi bi-currency-rupee"></i>{product.price}</strong>

                                                  </div>
                                            </div>
                                        </div>
                                    ))}
                                    <div className='text-end'>
                                      <strong>Sub Total{calculateQuantityAndPrice(cart.products)}</strong>
                                      </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='col-lg-4 col-md-12'>
                        <div className='card p-3 shadow-sm'>
                            <h5 className='fw-bold'>Order Summary</h5>
                            <p>Total Items: {cartData.reduce((acc, cart) => acc + cart.products.length, 0)}</p>
                            <button className='btn btn-success w-100'>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </div>
    );
}

export default Cart;
