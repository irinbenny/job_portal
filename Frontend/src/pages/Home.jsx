/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import AccessibilityButton from '../components/AccessibilityButton';
import { FaHeart, FaDonate, FaHandHoldingHeart } from 'react-icons/fa';
import { Fa1,Fa2,Fa3 } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdArrowRight } from "react-icons/md";
import pic from '../assets/img/b2.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../style/style.css'

const Home = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
    <AccessibilityButton/>
    <div className="home-page">
        {/* ---------------------------------------------------Header---------------------------------------------------------- */}
        <Container fluid className="hero-section"style={{ position: 'relative',height: '80vh',overflow: 'hidden', backgroundImage: 'url("https://i.pinimg.com/564x/6b/fa/f1/6bfaf12f888406e01118c6a629da7e15.jpg")', backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
           <div className="background-images" data-aos="zoom-in" data-aos-delay="200" style={{position: 'absolute',top: 0,right: 0,width: '50%', height: '100%',overflow: 'hidden'}}>
            <img src={pic} alt="Background" style={{width: '100%',height: '100%',objectFit: 'cover', objectPosition: 'right'}}/>
          </div>
          <Row className="justify-content-center align-items-center h-100">
            <Col>
              <div className="hero-content text-white" data-aos="zoom-in" data-aos-delay="200"  style={{ paddingLeft: '10%' }} >
                <h1>Find & Hire</h1>
                <h1>Experts for any job</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt <br />ut labore et dolore magna aliqua.
                </p>
                <div className="d-flex">
                  <Link to="/login">
                    <Button
                      style={{backgoundColor: '#FF416C',padding: '0px 12px', fontSize: '17px', height: '30px', marginTop: '7px', border: 'none'}}>
                      Join in
                    </Button>
                  </Link>

                  <Link to="/your-route">
                    <Button
                      className="ms-3"
                      style={{ backgroundColor: '#FF416C',padding: '0px 12px',fontSize: '17px',height: '30px',marginTop: '7px',border: 'none'}}>
                      Hiring?
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* ---------------------------------------------------Service---------------------------------------------------------- */}
        <Container className="py-5">
            <div>
                <h2 className='text-center' style={{color:'#37517e'}}>SERVICES</h2>
            </div>
            <Row className="justify-content-center" style={{marginTop:'50px'}}>
                <Col md={4}>
                    <div className="aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                    <div className="icon-box text-center">
                    <div className="icon">
                    <FaHeart size={40} style={{ color: "#8757cf",fontSize: "36px",transition: "0.3s" }} />
                    </div>
                    <h4><a href="" >Corporate Trainings</a></h4>
                    <p>Corporate trainings and services</p>
                    </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box text-center">
                        <div className="icon">
                        <FaDonate size={40} style={{ color: "#8757cf",fontSize: "36px",transition: "0.3s" }} />
                        </div>
                        <h4><a href="">Corporate Trainings</a></h4>
                        <p>Corporate trainings and services</p>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box text-center">
                        <div className="icon">
                        <FaHandHoldingHeart size={40} style={{ color: "#8757cf",fontSize: "36px",transition: "0.3s" }} />
                        </div>
                        <h4><a href="">Corporate Trainings</a></h4>
                        <p>Corporate trainings and services</p>
                        </div>
                        </div>
                </Col>
            </Row>
        </Container>


        {/* ---------------------------------------------------Featured Jobs---------------------------------------------------------- */}
        <Container className="py-5">
            <Row className="text-center mb-4">
                <h3 style={{color:'#37517e'}}>Featured  Offers</h3>
                <p>Search Your Carrer Oppurunities through these jobs</p>
            </Row>
            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                        <Card.Title>Category 1</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                        <Card.Title>Category 1</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                        <Card.Title>Category 1</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                        <Card.Title>Category 1</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="text-center mt-4">
                <Col md={3}>
                    <Card>
                        <Card.Body>
                        <Card.Title>Category 1</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                <Card>
                    <Card.Body>
                    <Card.Title>Category 1</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                        <Card.Title>Category 1</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                        <Card.Title>Category 1</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    </Container>

    {/* --------------------------------------------------------How it's Works---------------------------------------------------------- */}
    <Container className="py-5">
                <h2 className='text-center'>How it's work?</h2>
        <Row className="justify-content-center mt-5">
            <Col md={4} className=" border shadow-md aos-init aos-animate" data-aos="flip-up" data-aos-delay="200" style={{width:'22rem',height:'16rem'}} >
                <Fa1 size={30} className='mt-3'/>
                <h2 className='mt-4 ms-3' >Create your <br /> free account</h2>
                <p className="text-center mt-4">All you need is your email address to create an account and start building your job post.</p>
            </Col>
            <Col md={4} className=" border shadow-md aos-init aos-animate ms-5" data-aos="flip-up" data-aos-delay="200" style={{width:'22rem',height:'16rem'}}>
                <Fa2 size={30} className='mt-3'/>
                <h2 className='mt-4 ms-3' >Build your <br /> job post</h2>
                <p className="text-center mt-4">All you need is your email address to create an account and start building your job post.</p>
            </Col>
            <Col md={4} className=" border shadow-md aos-init aos-animate ms-5" data-aos="flip-up" data-aos-delay="200" style={{width:'22rem',height:'16rem'}}>
                <Fa3 size={30} className='mt-3'/>
                <h2 className='mt-4 ms-3'>Post <br /> your job</h2>
                <p className="text-center mt-4">All you need is your email address to create an account and start building your job post.</p>
            </Col>
      </Row>
    </Container>

            
    {/* --------------------------------------------------------About Us---------------------------------------------------------- */}
    <Container className="py-5">
        <Row className="align-items-center">
            <Col md={6}>
                <div className="background-images">
                        <img
                            src="https://i.pinimg.com/564x/05/ab/f2/05abf2ad481a5b3fded4e7a8a9eea97e.jpg"
                            alt="About Us"
                            className="img-fluid"
                            style={{  width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                </div>       
            </Col>
            <Col md={6} className="text-center text-md-start" style={{ marginBottom: '75px' }}>
                <h1 className='mt-2'>World of talents at your fingertips</h1>
                        <p className='mt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                <div className="mt-4 ms-3">
                            <CheckListItem text="Support people in extreme need" />
                            <CheckListItem text="Largest global crowdfunding community" />
                            <CheckListItem text="Make the world a better place" />
                            <CheckListItem text="Share your love for community" />
                </div>
                <Button className="ms-3" style={{ backgroundColor: '#0c6250', border: 'none',marginTop:'10px', }} href='/about'>Read More<MdArrowRight size={30}/></Button>              
            </Col>
        </Row>            
    </Container>

    {/* --------------------------------------------------------Job Guides---------------------------------------------------------- */}
    <Container className="mt-5">
    <div className='d-flex justify-content-between align-items-center'>
      <h1 className="mb-4">Job Guides</h1>
      <a href="#">Explore More</a>
    </div>      
        <Row>
            <Col>
                <Card style={{ width: '27rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={`https://i.pinimg.com/564x/36/9d/d9/369dd98bcaa5188bcfc66c033bf429ea.jpg`} style={{ height: '200px' }} />
                    </Card.Body>
                </Card>
                <p>February 15, 2024</p>
                <h6>Another Guide Title</h6>
                <Card.Link href="#">Continue Reading</Card.Link>
            </Col>
            <Col>
               <Card style={{ width: '27rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={`https://i.pinimg.com/564x/36/9d/d9/369dd98bcaa5188bcfc66c033bf429ea.jpg`} style={{ height: '200px' }} />
                    </Card.Body>
                </Card>
                <p>February 15, 2024</p>
                <h6>Another Guide Title</h6>
                <Card.Link href="#">Continue Reading</Card.Link>
            </Col>
            <Col>
                <Card style={{ width: '27rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={`https://i.pinimg.com/564x/36/9d/d9/369dd98bcaa5188bcfc66c033bf429ea.jpg`} style={{ height: '200px' }} />
                    </Card.Body>
                </Card>
                <p>February 15, 2024</p>
                <h6>Another Guide Title</h6>
                <Card.Link href="#">Continue Reading</Card.Link>
            </Col>
        </Row>
    </Container>

    {/* --------------------------------------------------------FAQ---------------------------------------------------------- */}
    <Container className="py-5 mt-5">
        <Row className="align-items-center">
                <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
                    <div>
                        <p>TO HELP PEOPLE AND THE WORLD</p>
                        <h1>We're on a Mission of Big Changes</h1>
                    </div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>=We're fighting for mental health</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Where your money goes</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>=We're fighting for mental health</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>=We're fighting for mental health</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>=We're fighting for mental health</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col md={6} className="text-center mt-3">
                    <img
                        src="https://i.pinimg.com/564x/76/b6/db/76b6db7804abb48c1db25a6b2893e7b7.jpg" // Replace with your image URL
                        alt="Causes"
                        className="img-fluid"
                        style={{ height: '500px', width: '450px' }}
                    />
                </Col>
        </Row>
    </Container>



        <Container fluid className="impact-section" style={{ backgroundColor: 'rgb(47, 64, 80)'}}>
    <Row className="align-items-center text-center text-white">
            <div className="impact-content">
                <h2>We're Making an Impact</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="impact-stats text-center d-flex">
                <div>
                <h3>100k</h3>
                <p>Children Impacted</p>
                </div>
                <div className='ms-5 text-center'>
                <h3>300+</h3>
                <p>Projects Worldwide</p>
                </div>
            </div>
    </Row>
</Container>

        </div>
        </>
    );
};

const CheckListItem = ({ text }) => {
    return (
        <div className="d-flex align-items-center mb-3">
            <IoMdCheckmarkCircleOutline  className="me-2" style={{ color: 'rgb(47, 64, 80)' }} />
            <span>{text}</span>
        </div>
    );
};

export default Home;