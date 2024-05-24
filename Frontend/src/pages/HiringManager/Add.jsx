import { useState } from 'react';
import AddBar from '../../components/HiringManager/AddBar';
import AddJob from '../../components/HiringManager/AddJob';
import AddJobDetails from '../../components/HiringManager/AddJobDetails';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../../components/HiringManager/NavBar';

function Add() {
    const [selectedPage, setSelectedPage] = useState('addjob');
  
    const renderPage = () => {
      switch (selectedPage) {
        case 'addjob':
          return <AddJob />;
        case 'addjobdetails':
          return <AddJobDetails />;
        default:
          return <AddJob />;
      }
    };
  
  return (
    <>
          <div>
          <div style={{backgroundColor:'rgb(171, 89, 89)'}}>
        <NavBar/>
    </div>
      <Container fluid>
        <Row>
          <Col md={2} className="bg-light">
            <AddBar onSelect={setSelectedPage} />
          </Col>
          <Col md={10} >
            {renderPage()}
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Add