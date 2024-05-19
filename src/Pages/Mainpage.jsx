import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Mainpage() {
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
              <Nav.Link href=""  className='fw-bold'><Link to={'/newarrival'} style={{textDecoration:'none', color:'darkgreen'}}>Favourites</Link></Nav.Link>
              <Nav.Link href="#listy"  className='fw-bold'>List</Nav.Link>
              <Nav.Link href="" className='fw-bold'>Contact Us</Nav.Link>
            </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>

      {/*contents  */}
      <div className="container mt-5 justify-content-center align-items-center">
        <h2>-------------------------------- Welcome to <span className='text-warning fs-1 fw-bold'>B O O K L I S H</span> -------------------------------- </h2> 
        <br /> <br />
        <h3 id='listy'>Our Premium Collections :</h3>
        <div className="mt-5 justify-content-center align-items-center">
          <div className="row">
            <div className="col-lg-3">
              <Card>
                <Card.Img variant="top" height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWq6GssjUPn8dMZkt19o5O5MgnhOgOhXB8A&usqp=CAU" />
                <Card.Body>
                  <Card.Title>Fairy Tale - Stephen King</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://adamgrant.net/wp-content/uploads/2023/05/HiddenPo_9780593653142_jkt_front_r1B-477x720.jpg" />
                <Card.Body>
                  <Card.Title>Hidden Potential - Adam Grant</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://ken-follett.com/wp-content/uploads/2023/02/AOL-USA-Cover.jpeg" />
                <Card.Body>
                  <Card.Title>The Armor of Light - Ken Follett</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://www.refinery29.com/images/11552975.jpg" />
                <Card.Body>
                  <Card.Title>Women of Good Fortune - Sophie Wan</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row mt-4">
           <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://www.naplesnews.com/gcdn/authoring/authoring-images/2023/10/11/PNDN/71140138007-little-liar-hc-c-54.jpg" />
                <Card.Body>
                  <Card.Title>The Little Liar - Mitch Albom</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </div>
           <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://images.indianexpress.com/2024/04/chronicle-eye.jpg" />
                <Card.Body>
                  <Card.Title>Chronicle of an Hr & a Half - S.N.Kannanari</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </div>
           <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://static.toiimg.com/thumb/imgsize-123456,msid-86394975,width-200,resizemode-4/86394975.jpg" />
                <Card.Body>
                  <Card.Title>The Island of Missing Trees - Elif S</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </div>
           <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://m.media-amazon.com/images/I/715UIaME2CL._AC_UF1000,1000_QL80_.jpg" />
                <Card.Body>
                  <Card.Title>Next in Line - Jeffrey Archer</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </div>
          </div>
          <div className="row mt-4">
           <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://assets.vogue.in/photos/63c4f6cf7f1659176630545e/master/w_1600%2Cc_limit/The%2520Half%2520Moon%2520.jpeg" />
                <Card.Body>
                  <Card.Title>The Half Moon - Mary Beth</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </div>
           <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://thebooktrail.files.wordpress.com/2015/10/kate-morton-novel.jpg?w=324" />
                <Card.Body>
                  <Card.Title>The Lake House - Kate Morton</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </div>
           <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://thebooktrail.files.wordpress.com/2014/11/51txp5m3j4l.jpg?w=331" />
                <Card.Body>
                  <Card.Title>The Distant Hour - Kate Morton</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </div>
           <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250178633_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D" />
                <Card.Body>
                  <Card.Title>The Women - Kristin Hannah</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </div>
          </div>
          <div className="row mt-4">
           <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://booksandbao.com/wp-content/uploads/2022/09/the-book-of-accidents-659x1000.jpeg" />
                <Card.Body>
                  <Card.Title>The Book of Accidents - Chuck Wending</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </div>
           <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINAsErX0g5g3HkTfB8HjKujoDBVJPBor64NYFBq5FxBQE_46hegLwGrSkkWZt3PSM24o&usqp=CAU" />
                <Card.Body>
                  <Card.Title>The Haunting Of Hill House - Shirley Jackson</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </div>
           <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://cdn.kobo.com/book-images/212fdedd-c470-4e0d-8b7c-2f1277ab52cd/1200/1200/False/the-haunted-house-fantasy-and-horror-classics.jpg" />
                <Card.Body>
                  <Card.Title>The Haunted House - Charles Dickens</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </div>
           <div className="col-lg-3">
             <Card>
                <Card.Img variant="top" height={'300px'} src="https://i0.wp.com/booksbonesbuffy.com/wp-content/uploads/2022/08/Graveyard-of-Lost-Children.jpg" />
                <Card.Body>
                  <Card.Title>Graveyard of Lost Children - Katrina Monrose</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
           </div>
          </div>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br />
        <h2 className='text-danger fw-bolder fs-2'>"  Reading is Essential for Those Who seek to RISE Above the ORDINARY  "</h2>
      </div> 
      <br /> <br /> <br /> <br /> <br /> 
    </>
  )
}

export default Mainpage