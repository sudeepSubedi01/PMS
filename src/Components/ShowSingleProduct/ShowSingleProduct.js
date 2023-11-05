import React, { useEffect, useState } from 'react'
import './ShowSingleProduct.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import axios from 'axios'

const ShowSingleProduct = () => {
  //for navigation after clicking delete
  const navigate = useNavigate()
  const imageStyle={
    height:'50vh',
    width: '50vw'
  }
  const {id}=useParams() //id is an object and {id} means destructuring an object
  // console.log(id) 
  const fetchSingleProduct=async()=>{
    const response= await axios.get("https://65449d865a0b4b04436c99c6.mockapi.io/products/"+id)
    setOneProduct(response.data) 
    // console.log(response)
  }

  useEffect(()=>{
    fetchSingleProduct()
  },[])

  //storing data coming from api in a state variable to display it
  const [oneProduct,setOneProduct] = useState({})  // data coming as an object so using {}

  //deletion
  const deleteProduct=async()=>{
    const response= await axios.delete("https://65449d865a0b4b04436c99c6.mockapi.io/products/"+id) //this is enough for deletion

    if (response.status == 200){
      navigate('/')
      alert("Deleted Successfully")
    }
    else{
      alert('Couldnt be deleted')
    }

  }
  return (
    <>
    <Navbar/>
    <div className='container'>
        <div className="card"> {/*Key is a required parameter*/}
                    <img src={oneProduct.productImage} className="card-img-top container" alt="..." style={imageStyle}/>
                    <div className="card-body">
                        <h5 className="card-title">{oneProduct.productName}</h5>
                        <p className="card-text">{oneProduct.productDescription}</p>
                        <p className="card-title" >Material: <b>{oneProduct.productMaterial}</b></p>
                        <Link to="/" className="btn btn-primary">Go Back</Link>
                        <button className='btn btn-primary mx-5' onClick={deleteProduct}>Click to delete</button>     
                    </div>
                </div>
    </div>
    </>
  )
}

export default ShowSingleProduct