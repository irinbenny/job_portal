import { Navbar, Nav, Container,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import { FaUser } from 'react-icons/fa';
const Header = () => {
    return (
        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <div className='d-flex'>
                        <img
                            src={logo} 
                            height="40"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                        <h3 style={{fontSize:'24px',marginTop:'7px',marginLeft:'7px'}}>Hope</h3>
                    </div>


                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/" style={{ color: '#0c6250',fontWeight:'600'}} >HOME</Nav.Link>
                        <Nav.Link href="/about"  className='ms-3' style={{ color: '#0c6250',fontWeight:'600'}} >ABOUT</Nav.Link>
                        <Nav.Link href="JobList"  className='ms-3' style={{ color: '#0c6250',fontWeight:'600'}} >JOB</Nav.Link>
                        <Nav.Link href="/events" className='ms-3' style={{ color: '#0c6250',fontWeight:'600'}}>EVENTS</Nav.Link>
                        <Nav.Link href="/blog" className='ms-3' style={{ color: '#0c6250',fontWeight:'600'}}>BLOG</Nav.Link>
                        <Nav.Link href="/contact" className='ms-3' style={{ color: '#0c6250',fontWeight:'600'}}>CONTACT</Nav.Link>
                    </Nav>


                    <Nav>
                     <Nav.Link href="/userdashboard"><FaUser size={25}/></Nav.Link>
                     <Link to="/login">
                    <Button className='ms-3' style={{ border: '1px solid #0c6250', padding: '0px 12px', fontSize: '17px', height: '30px', marginTop: '7px', backgroundColor:'transparent',color:'black' }}>
                        Join in
                    </Button>
                    </Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

