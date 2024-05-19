import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';





function NewArrival() {


  const [data, setData] = useState([])

  const navigate = useNavigate()

  useEffect(() =>{
    axios.get('https://bs-server-m5o5.onrender.com/books')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])



 
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

      {/* table */}
      <div className="container mt-5">
        <h2>My Favourites : <Link to={"/adding"} className='btn btn-outline-danger ms-5 fw-bolder fs-3'> + </Link>   </h2>
      </div>
      <div className='container mt-5'>
        <table className='table shadow'>
        <thead>
            <tr>
              <th>I d</th>
              <th>B o o k</th>
              <th>G e n e r e </th>
              <th>S t a t u s </th>
              <th>A c t i o n </th>
            </tr>
          </thead>
          <tbody >
            {data.map((d,i)=>(
              <tr key={i}>
               <td>{i+1}</td>
               <td>{d.book}</td>
               <td>{d.genere}</td>
               <td>{d.status}</td>
               <td>
                 <div className='align-items-around'>
                   <Link to={`/update/${d.id}`}><button className='btn btn-success'>Update</button></Link> 
                   <button onClick={(e)=>handleDelete(d.id)} className='btn btn-danger ms-3'>Delete</button> 
                 </div>
               </td>
             </tr> 
            ))}
          </tbody>
        </table>
       </div>
    </>
  )


  function handleDelete(id) {
    if (confirm) {
      const confirm = window.confirm("Do you wish to DELETE ?")
      axios.delete('https://bs-server-m5o5.onrender.com/books/'+id)
      .then(res =>{
        alert("Data Deleted !!")
        navigate('/newarrival')
      })        
    }
  }



}

export default NewArrival