import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Fa1,Fa2,Fa3 } from "react-icons/fa6";

function  HiringHome() {
  return (
    <>
    <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div>
              <h1 style={{fontSize:'50px'}}>Lets hire your next great candidate. Fast.</h1>
              <Link to="/login">
              <Button variant="primary" style={{padding:'0.8rem 3rem', fontSize:'20px',marginTop:'30px'}}>Post a Job</Button>
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <img src="https://i.pinimg.com/564x/ee/e7/0c/eee70c62070d1a88f900925cfba81d6c.jpg" alt="Hiring manager" className="img-fluid" />
          </Col>
        </Row>


        <Row className="justify-content-center mt-5">
          <Col md={4} className=" border shadow-md" style={{width:'22rem',height:'16rem'}}>
              <Fa1 size={30} className='mt-3'/>
                <h2 className='mt-4 ms-3' >Create your <br /> free account</h2>
                <p className="text-center mt-4">All you need is your email address to create an account and start building your job post.</p>
          </Col>
          <Col md={4} className=" border shadow-md ms-5" style={{width:'22rem',height:'16rem'}}>
              <Fa2 size={30} className='mt-3'/>
                <h2 className='mt-4 ms-3' >Build your <br /> job post</h2>
                <p className="text-center mt-4">All you need is your email address to create an account and start building your job post.</p>
          </Col>
          <Col md={4} className=" border shadow-md ms-5" style={{width:'22rem',height:'16rem'}}>
              <Fa3 size={30} className='mt-3'/>
              <h2 className='mt-4 ms-3'>Post <br /> your job</h2>
              <p className="text-center mt-4">All you need is your email address to create an account and start building your job post.</p>
          </Col>
        </Row>
    </Container>

    <Container>
        <div className="text-center" style={{marginTop:'90px'}}>
          <h1 >Get started in minutes!</h1>
            <Link to="/login">
              <Button variant="primary" style={{padding:'0.5rem 3rem', fontSize:'20px',marginTop:'50px'}}>Start Posting</Button>
            </Link>
        </div>
    </Container>
  </>
  );
}

export default HiringHome;
