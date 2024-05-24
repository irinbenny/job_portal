import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { IoIosMail,IoIosPhonePortrait} from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import '../../style/style.css'

function Contact() {
  return (
    <div style={{backgroundColor:'#7a6796'}}>
    <Container>
        <Row className="">
            <Col md={1}></Col>
            <Col md={6} className='mt-5'>
                <div className='mt-5 text-light'>
                    <h1 style={{fontWeight:'600'}}>Get In Touch</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, nulla vel tempor posuere.</p>
                </div>
            </Col>
            <Col md={5} className='mt-5'>
                <div className="contact-form" style={{ width: '32rem', height: '22rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#5c3597', padding: '20px' }}>
                    <Form>
                        <Form.Group controlId="formName" className='mb-3'>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter your name" 
                                style={{ backgroundColor: '#ddd2d2', outline: 'none', border: 'none', width: '100%' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className='mb-3'>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter your email" 
                                style={{ backgroundColor: '#ddd2d2', outline: 'none', border: 'none', width: '100%' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage" className='mb-3'>
                            <Form.Control 
                                as="textarea" 
                                rows={5} 
                                placeholder="Enter your message" 
                                style={{ backgroundColor: '#ddd2d2', outline: 'none', border: 'none', width: '100%' }}
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-center">
                            <button style={{ backgroundColor: '#FF416C', padding: '0px 12px', fontSize: '14px', height: '30px', border: 'none',color:'white' }} type="submit">
                                Submit
                            </button>
                        </div>
                    </Form>
                </div>
            </Col>
        </Row>
    </Container>


        <Container className="py-5 mt-5">
                <Row className="justify-content-center text-light">
                    <Col md={4}>
                      <div className='d-flex' style={{ maxWidth: '22rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',backgroundColor:'#5c3597',padding:'10px' }}>
                         <div className='ms-5'>
                            <IoIosMail  size={70} style={{ color: '#FF416C', display: 'block', margin: '0 auto' }} />
                         </div>
                            
                        <div className='ms-4 mt-3'>
                             <h6 >Email</h6>
                             <p>Hope@gmail.com</p>
                        </div>
                     </div>
                      
                    </Col>
                    <Col md={4}>
                        <div className='d-flex' style={{ maxWidth: '22rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',backgroundColor:'#5c3597',padding:'10px' }}>
                                <div className='ms-5'> 
                                <IoIosPhonePortrait size={70} style={{ color: '#FF416C', display: 'block', margin: '0 auto' }} />
                                </div>
                            
                            <div className='ms-3 mt-3'>
                                <h6>Phone</h6>
                                <p>(255)-352-6258</p>
                            </div>
                            </div>
                    </Col>
                    <Col md={4} >
                        <div className='d-flex' style={{ maxWidth: '22rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',backgroundColor:'#5c3597',padding:'10px' }}>
                                <div className='ms-5'>
                                <IoLocationOutline size={70} style={{ color: '#FF416C', display: 'block', margin: '0 auto' }} />
                                </div>
                            <div className='ms-3 mt-3'>
                                <h6>Address</h6>
                                <p>1234 Divi, SanFansisco</p>
                            </div>
                            </div>
                    </Col>
                </Row>
        </Container>



        <Container>
            <Row className="mt-5 text-light">
                <Col md={8}>
                    <div>
                        <h2>Visit our office or warehouse!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, nulla vel tempor posuere.</p>
                        <Button style={{backgroundColor:'#FF416C'}}>GET DIRECTIONS</Button>
                    </div>
                </Col>
                
               
                <Col md={4} style={{ color: 'white', position: 'relative' }}>
                    <div style={{ backgroundColor: '#5c3597', textAlign: 'center', height: '22rem', width: '25rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '1rem' }}>
                        <h4 style={{ marginTop: '2.5rem', marginBottom: '0.5rem' }}>Monday-Friday</h4>
                        <p>9am - 5pm</p>
                        <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Saturdays</h4>
                        <p>11am - 5pm</p>
                        <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>Monday-Friday</h4>
                        <p>9am - 3pm</p>
                        {/* Small div at center */}
                        <div style={{ position: 'absolute', top: '0%', left: '43%', transform: 'translate(-50%, -50%)', backgroundColor: '#FF416C', borderRadius: '25px', padding: '0.7rem 3rem' }}>
                            <p style={{ margin: 0 }}>Hours</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

</div>
  )
}

export default Contact