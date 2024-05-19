import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'


function Update() {

    const {id} = useParams()
    
    useEffect(() =>{
        axios.get('https://bs-server-m5o5.onrender.com/books'+id)
        .then(res => setInputData(res.data))
        .catch(err => console.log(err))
    }, [])




    const navigate = useNavigate()
     
    const [inputData,setInputData] = useState({
      book: '',
      genere: '',
      status:''
    })
  
    const handleSubmit = (event) => {
      event.preventDefault()
      axios.put('https://bs-server-m5o5.onrender.com/books/'+id, inputData)
        .then(res=>{
          alert("Data Updated Successfully !!")
          navigate('/newarrival')
        })
    }



  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
         <Container>
             <Navbar.Brand>
                 <img width={'150px'} height={'50px'} src="https://i0.wp.com/therumzzline.com/wp-content/uploads/2022/11/Asset-1.png?resize=1328%2C700&ssl=1" alt="" />  B O O K L I S H
             </Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="ms-auto">
                      <Nav.Link href=""  className='fw-bold'>Favourites</Nav.Link>
                      <Nav.Link href=""  className='fw-bold'>List</Nav.Link>
                      <Nav.Link href="" className='fw-bold'>Contact Us</Nav.Link>
                 </Nav>
             </Navbar.Collapse>
           </Container>
      </Navbar>

      {/* update */}
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark'>
        <div className="w-50 border  text-light p-5">
          <form onSubmit={handleSubmit}>
            <h3>Enter the Details :</h3>
            <div className='mt-3'>
              <label htmlFor="name">Book :</label>
              <input type="text" name='book' className='form-control mt-2' onChange={(e)=> setInputData({...inputData, book: e.target.value})}  />
            </div>
            <div className='mt-3'>
              <label htmlFor="Genere">Genere :</label>
              <input type="text" name='genere' className='form-control mt-2' onChange={(e)=> setInputData({...inputData, genere: e.target.value})} />
            </div>
            <div className='mt-3'>
              <label htmlFor="Status">Status :</label>
              <input type="text" name='status' className='form-control mt-2' onChange={(e)=> setInputData({...inputData, status: e.target.value})} />
            </div>
            <br /> <br />
            <button className='btn btn-outline-success'>UPDATE</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Update