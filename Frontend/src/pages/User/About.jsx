import { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Row, Col, Card } from 'react-bootstrap';
import { FaHandsHelping, FaHeart, FaUserFriends } from 'react-icons/fa';
import about from '../../assets/img/about.png';
import '../../style/style.css'

const AboutPage = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            const noteSection = document.getElementById('note');
            const valuesSection = document.getElementById('values');
            const teamSection = document.getElementById('team');
            const financialsSection = document.getElementById('financials');

            const scrollPosition = window.scrollY;

            if (aboutSection && scrollPosition < aboutSection.offsetTop) {
                setActiveSection('');
            } else if (noteSection && scrollPosition >= noteSection.offsetTop && scrollPosition < valuesSection.offsetTop) {
                setActiveSection('note');
            } else if (valuesSection && scrollPosition >= valuesSection.offsetTop && scrollPosition < teamSection.offsetTop) {
                setActiveSection('values');
            } else if (teamSection && scrollPosition >= teamSection.offsetTop && scrollPosition < financialsSection.offsetTop) {
                setActiveSection('team');
            } else if (financialsSection && scrollPosition >= financialsSection.offsetTop) {
                setActiveSection('financials');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top" style={{ marginTop: '63px' }}>
                <Container style={{ marginLeft: '410px' }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#" className={activeSection === 'about' ? 'active ms-5' : 'ms-5'}>ABOUT</Nav.Link>
                            <Nav.Link href="#note" className={activeSection === 'note' ? 'active ms-5' : 'ms-5'}>NOTE FROM CEO</Nav.Link>
                            <Nav.Link href="#values" className={activeSection === 'values' ? 'active ms-5' : 'ms-5'}>OUR VALUES</Nav.Link>
                            <Nav.Link href="#team" className={activeSection === 'team' ? 'active ms-5' : 'ms-5'}>OUR TEAM</Nav.Link>
                            <Nav.Link href="#financials" className={activeSection === 'financials' ? 'active ms-5' : 'ms-5'}>OUR FINANCIALS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="about-section" id="about" style={{ height: '70vh', overflow: 'hidden', backgroundImage: 'url("https://i.pinimg.com/564x/a5/27/49/a52749190229e9318763c703d90d64a6.jpg")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', paddingTop: '100px', paddingLeft: '27px' }}>
                <Container fluid>
                    <Row>
                        <Col md={6}>
                            <div className="about-us" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                                <h2>About Us</h2>
                                <p style={{ textAlign: 'center' }}>At EqualEaseCareers, we are dedicated to creating equal employment opportunities for individuals with disabilities. Our mission is to empower talented job seekers with disabilities by connecting them with inclusive employers who value diversity and accessibility. We believe that everyone deserves a chance to thrive in the workforce. Our platform provides tailored support, career development resources, and a network of employers committed to building accessible workplaces. Join us in breaking down barriers and fostering a more inclusive job market for all.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="background-images">
                                <img src={about} alt="Background" style={{ position: 'absolute', top: 150, right: '3px', width: '50%', height: '50%', objectFit: 'cover' }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container className="py-5" id="note">
                <Row className="mt-5">
                    <Col md={6}>
                        <img src="https://cfstatic.give.do/84f4bdf8-fa96-4e6e-a5da-efb09e969371.jpg" alt="CEO" className="img-fluid" />
                    </Col>
                    <Col md={6}>
                        <h2>A note from CEO</h2>
                        <p className='mt-4'>
                            We envision a world where disability is no longer a barrier to employment. By advocating for accessibility and equal opportunities, we aim to transform the employment landscape and create a future where every individual, regardless of their abilities, can thrive in their chosen career.
                        </p>
                        <p>
                            Empower Job Seekers: We provide comprehensive support and resources to help individuals with disabilities navigate the job search process, develop their skills, and achieve their career goals.
                        </p>
                        <p>
                            Through advocacy, education, and community engagement, we strive to raise awareness about the value of inclusive hiring practices and the positive impact they have on businesses and society.
                        </p>
                        <p>
                            Join us in working towards our dream of seeing a poverty-free India within our lifetimes!
                        </p>
                        <h2 className='mt-5'>- Atul Satija, Founder 2.0 & CEO, Give</h2>
                    </Col>
                </Row>
            </Container>

            <Container className="py-5" id="values">
                <Row className="text-center">
                    <Col>
                        <h2>Why Choose Us?</h2>
                        <p className='mt-3'>We envision a world where disability is no longer a barrier to employment. </p>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col md={4}>
                        <Card className="text-center p-4 mb-4">
                            <FaHeart size={40} style={{ color: '#0c6250', display: 'block', margin: '0 auto' }} />
                            <Card.Body>
                                <Card.Title>Tailored Support</Card.Title>
                                <Card.Text>
                                We understand that every individual’s journey is unique. Our personalized approach ensures that job seekers receive the support they need to succeed.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center p-4 mb-4">
                            <FaHandsHelping size={40} style={{ color: '#0c6250', display: 'block', margin: '0 auto' }} />
                            <Card.Body>
                                <Card.Title>Commitment to Accessibility</Card.Title>
                                <Card.Text>
                                We are dedicated to ensuring that our platform and services are accessible to all users, providing equal opportunities for everyone.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center p-4 mb-4">
                            <FaUserFriends size={40} style={{ color: '#0c6250', display: 'block', margin: '0 auto' }} />
                            <Card.Body>
                                <Card.Title>Community Focus</Card.Title>
                                <Card.Text>
                                We believe in the power of community. By connecting job seekers, employers, and advocates, we create a network of support that drives positive change.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

     
    <Container className="py-5" id="team">
      <Row className="text-center">
        <Col>
          <h2>Our Team</h2>
          <p>Give Foundation, Inc.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="text-center">
            <Card.Img variant="top" src="https://i.pinimg.com/564x/d0/05/db/d005dbd521d642d9dfba7bc63c734c19.jpg" className="team-img" />
            <Card.Title className="mt-3">Project Manager</Card.Title>
            <Card.Text>John Xavier</Card.Text>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Img variant="top" src="https://i.pinimg.com/564x/be/60/b4/be60b470859fdfe94f182413e5491ce4.jpg" className="team-img" />
            <Card.Title className="mt-3">Marketing Specialist</Card.Title>
            <Card.Text>Rachel Green</Card.Text>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Img variant="top" src="https://i.pinimg.com/564x/96/d8/4d/96d84d41d83d2762eb1094a4b0822692.jpg" className="team-img" />
            <Card.Title className="mt-3">Software Developer</Card.Title>
            <Card.Text>Alan Jose</Card.Text>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={4}>
          <Card className="text-center">
            <Card.Img variant="top" src="https://i.pinimg.com/564x/0e/ff/e8/0effe817959671e3f63c784354a789f8.jpg" className="team-img" />
            <Card.Title className="mt-3">UI/UX Designer</Card.Title>
            <Card.Text>Ann Roy</Card.Text>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Img variant="top" src="https://i.pinimg.com/564x/77/71/68/7771683223d86b237a3304d6f32828b9.jpg" className="team-img" />
            <Card.Title className="mt-3">Human Resources Coordinator</Card.Title>
            <Card.Text>Zara Mohan</Card.Text>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Img variant="top" src="https://i.pinimg.com/736x/f8/7d/22/f87d22d7ed15b23fd988f2c3b79429fc.jpg" className="team-img" />
            <Card.Title className="mt-3">Business Development Manager</Card.Title>
            <Card.Text>Joyal Mathew</Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>


            <Container className="py-5 text-center" id="financials">
                <Row className="Legal & Financial Information">
                    <Col>
                        <h2>Legal & Financial Information</h2>
                    </Col>
                </Row>
                <Row className='border shadow mt-4'>
                <div>
                    <h6 className='mt-4'>Address: 651 N, Broad St.,</h6>
                    <p>EIN: 87-4554363</p>
                    <p className='mb-1'>Suite 206, Middletown,Newcastle, Delaware - 19709 </p>
                 
                    <p>Contact: +91 773 871 4428 </p>
                    <p>Email: support@give.do </p>
                </div>

               </Row>
            </Container>
        </div>
    );
}

export default AboutPage;
