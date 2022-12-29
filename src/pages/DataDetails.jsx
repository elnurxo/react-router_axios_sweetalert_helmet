import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './detail.css';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const DataDetails = () => {

 const {id} = useParams();
 const [data, setData] = useState({});
 const navigate = useNavigate();
 useEffect(() => {
    axios.get(`http://localhost:3000/data/${id}`)
    .then((resp)=>setData(resp.data));
 }, [id])
 function handleClick(){
    
    
    //sweet alert
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            let URL = `http://localhost:3000/data/${data.id}`;
            axios.delete(URL).then((resp)=>console.log(resp,"user deleted"));
            navigate('/');
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
 }

  return (
    <>
          <Helmet>
            <title>detail page</title>
            <meta name="detail" content="This is Detail Page" />
        </Helmet>
        <h1>ID - {data.id}</h1>
        <p>Name - <strong>{data.name}</strong></p>
        <p>Age - <strong>{data.age}</strong></p>
        <Button onClick={()=>handleClick()} variant='contained' color='error' style={{marginRight:"20px"}}>Delete {data.name} </Button>
        <Link to="/">Go Back</Link>
    </>
  )
}

export default DataDetails