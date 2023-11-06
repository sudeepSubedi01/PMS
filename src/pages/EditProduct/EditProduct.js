import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditProduct = () => {
    const {id}=useParams()
    const navigate= useNavigate()
    const [oneProduct, setOneProduct]= useState({}) //for object data
    const fetchSingleProduct=async()=>{
        const response= await axios.get("https://65449d865a0b4b04436c99c6.mockapi.io/products/"+id)
        setOneProduct(response.data)
        // console.log(response)
        
      }
    useEffect(()=>{
        fetchSingleProduct()
    },[])

    const handleChange=(e)=>{
        const {name, value}= e.target
        setOneProduct({
            ...oneProduct,
            [name]: value
        })
    }

    const funEditProduct=async(e)=>{
        e.preventDefault()
        const response= await axios.put ("https://65449d865a0b4b04436c99c6.mockapi.io/products/"+id, oneProduct)
        if (response.status === 200)
        {
            alert("Data posted successfully")
            navigate('/showSingleProduct/'+id)
            
        }
        else{
            alert("Error posting the data to backend")
        }
    }


  return (
    <>
    <Navbar/>
    <div id='product-form'>
        <h2>Update Product Information</h2>
        <form onSubmit={funEditProduct}>
            <label htmlFor="productImage">Product Image: </label>
            <input type="text" id='productImage' name='productImage' value={oneProduct.productImage} onChange={handleChange} required/>  {/*accept='image/*'*/}

            <label htmlFor="productName">Product Name: </label>
            <input type="text" id='productName' name='productName' value={oneProduct.productName} onChange={handleChange} required/>

            <label htmlFor="productDescription">Product Description: </label>
            <input type="text" id='productDescription' name='productDescription'  rows="4" value={oneProduct.productDescription} onChange={handleChange} required/>

            <label htmlFor="productMaterial">Product Material: </label>
            <input type="text" id='productMaterial' name='productMaterial' value={oneProduct.productMaterial} onChange={handleChange} required/>

            <button type='submit' >Submit</button>
        </form>
    </div>
    </>
  )
}

export default EditProduct