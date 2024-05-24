import { Container, Row, Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser} from 'react-icons/fa';
import '../../style/style.css'

const Blog = () => {
    return (
        <div>
            <Container fluid className="text-center">
                <h1 style={{ fontSize: "48px", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Blog</h1>
            </Container>


            <Container className="text-center mt-5">
                <h2 style={{ borderBottom: "2px solid #0c6250", display: "inline-block" }}>Featured Posts</h2>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Container>
            <Container className="mt-5">
                <Row>
                    {[1, 2, 3, 4].map((index) => (
                        <Col key={index} md={3}>
                            <Card className="mb-4">
                                <Card.Img variant="top" src={`https://s3.amazonaws.com/disabledperson/images/images/000/000/583/original/woman_in_wheelchair.jpg?1713548629`} />
                                <Card.Body>
                                    <Card.Title>The Benefits of Hiring Individuals with Disabilities</Card.Title>
                                    <Link to="/blog1" style={{textDecoration:'none'}}>
                                    <button style={{ backgroundColor: '#FF416C', padding: '0px 12px', fontSize: '14px', height: '30px', border: 'none',color:'white' ,marginTop:'15px'}}>
                                Read More
                            </button>
                                    </Link>
                        <div className='mt-2'>
                        <FaCalendarAlt/> Nov 20, 2024
                        <FaUser className='ms-5'/> Nayar Iyyer
                        </div>
                   
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        

            <Row>
            <Col md={9}>
            <Container className="text-center mt-5">
                <h2 style={{ borderBottom: "2px solid #0c6250", display: "inline-block" }}>From Our Blog</h2>
            </Container>

         
            <Container className="mt-3 mb-5">
                <Row>
                    <Col md={6}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>How to Master Soft Skills for Career Growth?</Card.Title>
                                <hr style={{ backgroundColor: "yellow", height: "2px", border: "none" }} />
                                <Card.Img variant="top" src="https://lh7-us.googleusercontent.com/gDkMNBW0QJg33Zq1JXv5ItvwxSWg78E_sNa5fftmSQnu18lGekh2hOayXcmkP2u-KNbHIgTCrOWoCTYl21kHz10pO-Ovns9pPFys6rYJxk39tcxRgir0jmO2XBHlt0FLKFziMrz23UwP5iyI9NpIHoQ" />
                                <Link to="/blog2" style={{textDecoration:'none'}}>
                                <button style={{ backgroundColor: '#FF416C', padding: '0px 12px', fontSize: '14px', height: '30px', border: 'none',color:'white',marginTop:'15px' }}>
                                Read More
                            </button>
                                    </Link>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>How to Master Soft Skills for Career Growth?</Card.Title>
                                <hr style={{ backgroundColor: "yellow", height: "2px", border: "none" }} />
                                <Card.Img variant="top" src="https://lh7-us.googleusercontent.com/gDkMNBW0QJg33Zq1JXv5ItvwxSWg78E_sNa5fftmSQnu18lGekh2hOayXcmkP2u-KNbHIgTCrOWoCTYl21kHz10pO-Ovns9pPFys6rYJxk39tcxRgir0jmO2XBHlt0FLKFziMrz23UwP5iyI9NpIHoQ" />
                                <Link to="/blog2" style={{textDecoration:'none'}}>
                                <button style={{ backgroundColor: '#FF416C', padding: '0px 12px', fontSize: '14px', height: '30px', border: 'none',color:'white',marginTop:'15px' }}>
                                Read More
                            </button>
                                    </Link>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
                    <Row>
                    <Col md={6}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>How to Master Soft Skills for Career Growth?</Card.Title>
                                <hr style={{ backgroundColor: "yellow", height: "2px", border: "none" }} />
                                <Card.Img variant="top" src="https://lh7-us.googleusercontent.com/gDkMNBW0QJg33Zq1JXv5ItvwxSWg78E_sNa5fftmSQnu18lGekh2hOayXcmkP2u-KNbHIgTCrOWoCTYl21kHz10pO-Ovns9pPFys6rYJxk39tcxRgir0jmO2XBHlt0FLKFziMrz23UwP5iyI9NpIHoQ" />
                                <Link to="/blog2" style={{textDecoration:'none'}}>
                                <button style={{ backgroundColor: '#FF416C', padding: '0px 12px', fontSize: '14px', height: '30px', border: 'none',color:'white',marginTop:'15px' }}>
                                Read More
                            </button>
                                    </Link>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
            </Col>

            <Col md={2}>

            <Container className="mt-5">
            <Row>
                <Col>
                    <h2>Category</h2>
                    <hr className="underline1" />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={8}>
                    <p className="text-center category-item">Education</p>
                </Col>
                <Col md={4}>
                    <p className="text-center category-item ms-5">(4)</p>
                </Col>
                
                <hr className="underline" />
            </Row>
            <Row className="mt-3">
                <Col md={8}>
                    <p className="text-center category-item">Health</p>
              
                </Col>
                <Col md={4}>
                    <p className="text-center category-item ms-5">(2)</p>
                </Col>
                <hr className="underline" />
            </Row>
            <Row className="mt-3">
                <Col md={8}>
                    <p className="text-center category-item">Health</p>
              
                </Col>
                <Col md={4}>
                    <p className="text-center category-item ms-5">(2)</p>
                </Col>
                <hr className="underline" />
            </Row>
        </Container>




            <Container className="mt-5">
                <Row>
                <Col>
                    <h2>RECENT POSTS</h2>
                    <hr className="underline1" />
                </Col>
            </Row>
                <Row className="justify-content-center">
                    <Col md={12} className=" mb-3">
                        <div style={{ width: "180px", height: "180px"}}>
                            <img src="https://s3.amazonaws.com/disabledperson/images/images/000/000/583/original/woman_in_wheelchair.jpg?1713548629" alt="Thumbnail" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <div>
                            <h4>What Happens After You Die?</h4>
                            <div className="d-flex align-items-center">
                                <FaCalendarAlt style={{ marginRight: "10px" }} /> Nov 20, 2024
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </Col>
            </Row>
        </div>
    );
}

export default Blog;
