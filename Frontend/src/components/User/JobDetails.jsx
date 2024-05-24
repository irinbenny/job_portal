import { BsBuildings } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { Row, Col } from 'react-bootstrap';
function JobDetails() {
  
  const jobDetails = {
    id: 1,
    position: 'Software Engineer',
    company: 'ABC Company',
    location: 'New York',
    datePosted: 'May 10, 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id orci sed lectus bibendum dignissim. Integer eu leo a turpis eleifend congue. Mauris interdum justo id lacus varius, sit amet fermentum mi condimentum. Quisque fermentum enim et libero consequat, at hendrerit felis vulputate.'
  };

  return (
    <>
    <div>
      <h3>{jobDetails.position}</h3>
      <h5><BsBuildings className='me-2'/>{jobDetails.company}</h5>
      <p> <IoLocationOutline className='me-2'/>{jobDetails.location}</p>
      <p><strong>Date Posted:</strong> {jobDetails.datePosted}</p>
      <p>{jobDetails.description}</p>
    </div>

<div>
<div style={{ border: '1px solid black', padding: '10px', marginBottom: '20px' }}>
  <Row>
    <Col md={4}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <MdWork size={20} className="me-2" />
    <div>
    <span style={{ fontWeight: 'bold',marginLeft:'5px' }}>Job Type:</span>
    <span style={{ marginLeft: '5px' }}>Full Time</span>
    </div>
  </div>
  </Col>
  <Col md={4}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <MdWork size={20} className="me-2" />
    <div>
    <span style={{ fontWeight: 'bold',marginLeft:'5px' }}>Job Type:</span>
    <span style={{ marginLeft: '5px' }}>Full Time</span>
    </div>
  </div>
  </Col>
  <Col md={4}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <MdWork size={20} className="me-2" />
    <div>
    <span style={{ fontWeight: 'bold',marginLeft:'5px' }}>Job Type:</span>
    <span style={{ marginLeft: '5px' }}>Full Time</span>
    </div>
  </div>
  </Col>
  </Row>
  <Row>
    <Col md={4}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <MdWork size={20} className="me-2" />
    <div>
    <span style={{ fontWeight: 'bold',marginLeft:'5px' }}>Job Type:</span>
    <span style={{ marginLeft: '5px' }}>Full Time</span>
    </div>
  </div>
  </Col>
  <Col md={4}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <MdWork size={20} className="me-2" />
    <div>
    <span style={{ fontWeight: 'bold',marginLeft:'5px' }}>Job Type:</span>
    <span style={{ marginLeft: '5px' }}>Full Time</span>
    </div>
  </div>
  </Col>
  <Col md={4}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <MdWork size={20} className="me-2" />
    <div>
    <span style={{ fontWeight: 'bold',marginLeft:'5px' }}>Job Type:</span>
    <span style={{ marginLeft: '5px' }}>Full Time</span>
    </div>
  </div>
  </Col>
  </Row>
</div>
</div>

<div>
  <h4>Description</h4>
  <p>Association of Washington Cities (AWC) is recruiting for a full-time Health Promotion Coordinator to join our dynamic and customer orientated team. This position is part of the contracted AWC Employee Benefit Trust (Trust) program to develop, promote, implement, and evaluate the health promotion programs of the Trust.</p>
  <h4>What we offer:</h4>
  <p>Exceptional benefits – AWC pays 100% of medical premium for employee and 90% of the medical premium for spouse/domestic partner and child(ren) up to age 26; and 100% of dental and vision insurance</p>
</div>
</>
  );
}

export default JobDetails;
