import  { useState } from 'react';
import { Container, Row, Col, Button, Form, Modal  } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import event from '../../assets/img/event.png'
import '../../style/style.css'

const Events = () => {
    const [showModal, setShowModal] = useState(false);
    const [isAttending, setIsAttending] = useState(false);
    const [reminderDate, setReminderDate] = useState('');
    const [reminderTime, setReminderTime] = useState('');
  
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    
    const handleSubmitModal = () => {
      handleCloseModal();
      if (isAttending) {
        toast.success('Registered successfully!');
        setReminder();
      }
    };
  
    const setReminder = () => {
      const reminderDateTime = new Date(`${reminderDate}T${reminderTime}`);
      const currentTime = new Date();
      const timeDifference = reminderDateTime - currentTime;
  
      if (timeDifference > 0) {
        setTimeout(() => {
          toast.info('Reminder: Event is starting soon!');
        }, timeDifference);
      }
    };
  
  return (
        <>
        <Container fluid>
            <Row style={{backgroundColor:'#7a6796'}}>
                <Col style={{padding:'150px'}}>
                    <h1 style={{fontSize:'60px'}}>Upcoming Events!</h1>
                    <h6 className='mt-4 fs-5'>Stay tuned for our upcoming events. Subscribe to get updates!</h6>
                    <a href="#newsletter">
                        <Button style={{color:'#000',fontWeight:'700',backgroundColor:'transparent',border:'1px solid #0f393b',marginTop:'20px'}}>Subscribe for updates</Button>
                    </a>
                </Col>
                <Col>
                    <img src={event} alt="Event" className="img-fluid" style={{height:'500px',width:'550px'}}/>
                </Col>
            </Row>
        </Container>

        <Container fluid>
            <Row style={{backgroundColor:'#b4b4b5'}}>
                <Col>
                  <div className='text-center mt-5'>
                    <h3>Challanges overcamed </h3>
                    <h6>02/14/2024</h6>
                    <h6>69 Warren Street, New York, USA</h6>
                  </div>
                </Col>
                <Col>
                    <img src="https://i.pinimg.com/736x/f6/0a/70/f60a703200a332aafe447abc457bae97.jpg" alt="Small Image" className="img-fluid" style={{height:'300px',width:'400px'}}/>
                </Col>
                <Col>
                    <div className="details mt-5">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab</p>
                        <Button onClick={handleShowModal}  style={{padding:'0.4rem 2.5rem'}}>Enroll</Button>
                    </div>
                </Col>
            </Row>
            <Row style={{backgroundColor:'#b4b4b5'}}>
                <Col>
                  <div className='text-center mt-5'>
                    <h3>Functional dynamic cooperate space</h3>
                    <h6>05/21/2024</h6>
                    <h6>69 Warren Street, New York, USA</h6>
                  </div>
                </Col>
                <Col>
                    <img src="https://i.pinimg.com/564x/19/b6/84/19b6849d3648e50fee1dea402f2cc4cc.jpg" alt="Small Image" className="img-fluid" style={{height:'300px',width:'400px',marginTop:'40px'}}/>
                </Col>
                <Col>
                    <div className="details mt-5">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab</p>
                        <Button onClick={handleShowModal} style={{padding:'0.4rem 2.5rem'}}>Enroll</Button>
                    </div>
                </Col>
            </Row>
        </Container>

        <Container fluid style={{backgroundColor:'#7a6796'}} id="newsletter">
            <h1 className='text-center' style={{marginRight:'70px'}}>Join Our Newsletter</h1>
            <Row className="justify-content-center ms-5">
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

        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Are you attending?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Check
              type="checkbox"
              id="attendCheck"
              label="Yes"
              checked={isAttending}
              onChange={(e) => setIsAttending(e.target.checked)}
            />
            {isAttending && (
              <>
                <Form.Group controlId="formReminderDate" className='mt-3'>
                  <Form.Label>Reminder Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={reminderDate}
                    onChange={(e) => setReminderDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formReminderTime" className='mt-3'>
                  <Form.Label>Reminder Time</Form.Label>
                  <Form.Control
                    type="time"
                    value={reminderTime}
                    onChange={(e) => setReminderTime(e.target.value)}
                  />
                </Form.Group>
              </>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitModal}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
     </>
    );
}

export default Events;
