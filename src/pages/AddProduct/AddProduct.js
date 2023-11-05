import React, { useState } from 'react'
import Navbar from '../../Components/Navbar';
import'./AddProduct.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate=useNavigate()
    const [data, setData]= useState({
        productName:"",
        productImage:"",
        productDescription:"",
        productMaterial:""
    })

    const handleChange=(e)=>{
        const {name, value}= e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const funAddProduct=async(e)=>{
        e.preventDefault()
        const response= await axios.post ("https://65449d865a0b4b04436c99c6.mockapi.io/products", data)
        if (response.status == 201)
        {
            alert("Data posted successfully")
            navigate("/")
            
        }
        else{
            alert("Error posting the data to backend")
        }
    }

  return (
    <>
    <Navbar/>
    <div id='product-form'>
        <h2>Product Information</h2>
        <form onSubmit={funAddProduct}>
            <label htmlFor="productImage">Product Image: </label>
            <input type="text" id='productImage' name='productImage' onChange={handleChange} required/>  {/*accept='image/*'*/}

            <label htmlFor="productName">Product Name: </label>
            <input type="text" id='productName' name='productName' onChange={handleChange} required/>

            <label htmlFor="productDescription">Product Description: </label>
            <input type="text" id='productDescription' name='productDescription' rows="4" onChange={handleChange} required/>

            <label htmlFor="productMaterial">Product Material: </label>
            <input type="text" id='productMaterial' name='productMaterial' onChange={handleChange} required/>

            <button type='submit' >Submit</button>
        </form>
    </div>
    </>
  )
}

export default AddProduct