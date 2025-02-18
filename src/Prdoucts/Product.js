function Product({data}){

    
    
    return(
        <div className='card  mb-3' key={data.id}>
            <div className='row'>
                <div className='col-4'>
                    <a href={"/product/"+data.id} target="_blank" > <img src={data.thumbnail} className="img-fluid rounded-start amazon-pointer"  alt="..."></img>
                    </a>                                    
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                       <a href={"product/"+data.id} target="_blank"> <h5 className="card-title amazon-pointer" >{data.title}</h5></a>
                        <h5 className="card-title amazon-pointer"  ><i className="bi bi-currency-rupee"></i>{data.price}</h5>
                        <p className="card-text"><span>{data.description}</span></p>
                        <p className="card-text"><small className="text-body-secondary"><i className="bi bi-star-fill"><i className="bi bi-star"></i></i>  {data.rating}</small></p>
                        <div className="mb-3 mt-3">
                            <button className="btn btn-warning">Add To Cart</button>

                        </div>
                    </div>
                </div>                  
                                    
            </div>


        </div>
    )
}export default Product;