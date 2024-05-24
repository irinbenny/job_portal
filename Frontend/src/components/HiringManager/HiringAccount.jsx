import  { useState, useEffect } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import NavBar from './NavBar'

const AdminAccount = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSaveChanges = () => {
    // Logic to save changes
    // Here, you can update the local storage values as well
    handleCloseModal();
  };

  useEffect(() => {
    // Retrieve data from local storage when the component mounts
    const storedEmail = localStorage.getItem('email');
    const storedName = localStorage.getItem('name');
    const storedPhoneNumber = localStorage.getItem('phoneNumber');

    if (storedEmail) setEmail(storedEmail);
    if (storedName) setName(storedName);
    if (storedPhoneNumber) setPhoneNumber(storedPhoneNumber);
  }, []);

  useEffect(() => {
    // Update local storage when the state variables change
    localStorage.setItem('email', email);
    localStorage.setItem('name', name);
    localStorage.setItem('phoneNumber', phoneNumber);
  }, [email, name, phoneNumber]);

  return (
    <>
    <div style={{backgroundColor:'rgb(171, 89, 89)'}}>
        <NavBar/>
    </div>
    <Row>
      <Col lg={2}></Col>
      <Col lg={8}>
        <div>
          <h2 className='mt-5'>Profile</h2>
          <div className='mt-5'>
            <div className="profile-info">
              <label>Email:</label>
              <p className="profile-value">{email}</p>
              <hr />
            </div>
            <div className="profile-info">
              <label>Password:</label>
              <p className="profile-value">********</p>
              <hr />
            </div>
            <div className="profile-info">
              <label>Name:</label>
              <p className="profile-value">{name}</p>
              <hr />
            </div>
            <div className="profile-info">
              <label>Phone Number:</label>
              <p className="profile-value">{phoneNumber}</p>
              <hr />
            </div>
            <Button variant="dark" onClick={handleShowModal}>Edit</Button>
          </div>
        </div>
      </Col>
      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Phone Number:</label>
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
    </>
  );
};

export default AdminAccount;
