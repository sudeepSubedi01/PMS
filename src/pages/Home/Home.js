import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
    const cardStyle={
        width: '18rem',
        marginBottom: '20px'
    }

    const cardFlexing={
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }

    const[products,setProducts] = useState([]) // data coming as an array so using []
    const fetchProducts= async ()=>{
        const response= await axios.get("https://65449d865a0b4b04436c99c6.mockapi.io/products");
        console.log(response);
        setProducts(response.data) //whole of data from backend is inside array named data
    }
    useEffect(()=>{
        fetchProducts();
    },[])


  return (
    <>
        {/* for dynamic content, wrap the code inside {} */}
    <Navbar/>
    <div className="card-container" style={cardFlexing}> 
    {
        products.map((singleProduct)=>{
            return(
                <div key={singleProduct.id} className="card" style={cardStyle}> {/*Key is a required parameter*/}
                    <img src={singleProduct.productImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{singleProduct.productName}</h5>
                        <p className="card-text">{singleProduct.productDescription}</p>
                        <p className="card-title" >Material: <b> {singleProduct.productMaterial}</b></p>
                        <Link to={`/showSingleProduct/${singleProduct.id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            )
        })
    }
    </div>
    </>
  )
}

export default Home