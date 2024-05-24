import JobListings from '../../components/User/JobListings'
import { Row, Col, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import  { useState } from 'react';
import JobDetails from '../../components/User/JobDetails';
import { IoLocation } from "react-icons/io5";
import ChatButton from '../../components/User/ChatButton';

function JobList() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
 <div style={{ display: 'flex', alignItems: 'center', marginLeft:'30px' }}>
    <div style={{ position: 'relative', marginRight: '1rem' }} >
        <input type="text" placeholder="Search" style={{ padding: '0.5rem 3rem', borderRadius: '5px', border: '1px solid #ccc', width: '400px' }} />
        <div>
            <Button onClick={handleShow} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none' }}>
               
            </Button>
        </div>
    </div>


 
    <div style={{ position: 'relative', display: 'inline-block' }}>
        <IoLocation style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }} />
        <input type="text" placeholder="Location" style={{ padding: '0.5rem 2rem', borderRadius: '5px', border: '1px solid #ccc', width: '800px', paddingLeft: '2rem' }} />
    </div>
        <button style={{  padding: '0.5rem 3rem', borderRadius: '5px', backgroundColor: 'transparent', color: 'black', border: '1px solid #000', cursor: 'pointer' }} className='ms-3'>Search</button>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem',marginLeft:'30px' }}>
        <p>Filter</p>
    <div style={{float:'right',display:'flex',marginRight:'30px' }}>
        <span style={{border:'2px solid #000'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="20" fill="#000000">
                <path d="M 3 5 L 3 7 L 15 7 L 15 5 L 3 5 z M 5 9 L 5 11 L 13 11 L 13 9 L 5 9 z M 7 13 L 7 15 L 11 15 L 11 13 L 7 13 z M 17 5 L 17 7 L 21 7 L 21 5 L 17 5 z M 17 9 L 17 11 L 21 11 L 21 9 L 17 9 z M 17 13 L 17 15 L 21 15 L 21 13 L 17 13 z M 3 17 L 3 19 L 11 19 L 11 17 L 3 17 z M 13 17 L 13 19 L 15 19 L 15 17 L 13 17 z"/>
            </svg>
        </span>
   
        <button style={{ padding: '0.5rem 3rem', borderRadius: '5px', backgroundColor: '#0c6250', color: 'white', border: 'none', cursor: 'pointer' }} className='ms-3'>Apply Now</button>
    </div>
    </div>

    <Row>
        <Col md={4}>
          <JobListings/>
        </Col>
        
        <Col md={8}>
          <JobDetails/>
        </Col>
    </Row>
    <div>
        <ChatButton/>
    </div>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default JobList