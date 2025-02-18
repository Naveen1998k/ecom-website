function Product({data}){

    const handleClick=(data)=>{
        alert(data)
    }
    return(
        <div className='card  mb-3' key={data.id}>
            <div className='row'>
                <div className='col-4'>
                    <img src={data.thumbnail} className="img-fluid rounded-start amazon-pointer" onClick={e=>handleClick(data.id)} alt="..."></img>
                                    
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title amazon-pointer" onClick={e=>handleClick(data.id)}>{data.title}</h5>
                        <h5 className="card-title amazon-pointer"  onClick={e=>handleClick(data.id)}><i className="bi bi-currency-rupee"></i>{data.price}</h5>
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