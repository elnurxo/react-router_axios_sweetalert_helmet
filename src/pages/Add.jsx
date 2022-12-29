import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getData } from './Home';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';

const Add = () => {
  const [data, setData] = useState({name:"",age:null});
  const navigate = useNavigate();
  function handleChange(e){
    setData({
        ...data,[e.target.name]:e.target.value
    })
  }
  function handleClick(e){
    e.preventDefault();
    let URL = 'http://localhost:3000/data';
    axios.post(URL,data);
    getData();
    Swal.fire({
        title: 'Success!',
        text: 'Data Added to API',
        icon: 'success',
        confirmButtonText: 'Okay'
      })
    navigate('/');
  }

  return (
    <>
         <Helmet>
            <title>Add Page</title>
            <meta name="add" content="This is Add Page" />
        </Helmet>
        <div style={{display:"flex",alignItems:"center",height:"100vh",justifyContent:"center"}}>
    <form method='post'>
        <TextField onChange={(e)=>handleChange(e)} name="name" id="name" label="Name" variant="outlined" />
        <TextField onChange={(e)=>handleChange(e)} name="age" id="age" label="Age" variant="outlined" />
        <Button onClick={(e)=>handleClick(e)} variant="contained" color='warning'>Add to API</Button>
    </form>
    </div>
    </>
 
  )
}

export default Add