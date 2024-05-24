// UserManagement.js
import  { useState } from 'react';
import { Table, Button, Form, InputGroup, FormControl, Row, Col, Container, Badge, Modal, ListGroup } from 'react-bootstrap';
import NavBar from './NavBar'

const ResumeRequest = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Mark Adams', email: 'markadams@gmail.com', phone: '+1 800 123 4567', resume: 'Sent', source: 'Referral', location: 'San Francisco', status: 'New' },
        { id: 2, name: 'Eliza Norton', email: 'elizanorton@gmail.com', phone: '+1 800 456 4566', resume: 'Sent', source: 'Facebook', location: 'Los Angeles', status: 'Active' },
        { id: 3, name: 'James Evans', email: 'jamesevans@gmail.com', phone: '+1 800 789 1234', resume: 'Sent', source: 'Referral', location: 'Chicago', status: 'Active' },
        { id: 4, name: 'Barbara Davies', email: 'barbaradavies@gmail.com', phone: '+1 800 555 7890', resume: 'Sent', source: 'Facebook', location: 'NYC', status: 'Active' }
    ]);

    const [showDetails, setShowDetails] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleShowDetails = (user) => {
        setSelectedUser(user);
        setShowDetails(true);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
        setSelectedUser(null);
    };

    return (
        <>
        <div style={{backgroundColor:'rgb(171, 89, 89)'}}>
        <NavBar/>
        </div>
        <Container className="mt-5">
            <Row className="mb-4">
                <Col>
                    <h2>Requests</h2>
                </Col>
                <Col className="text-end">
                    <Button variant="primary">+ Add Contact</Button>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md={4}>
                    <Form.Select>
                        <option>Sort By: Newest</option>
                        <option>Oldest</option>
                    </Form.Select>
                </Col>
                <Col md={4}>
                    <Form.Select>
                        <option>Location: USA</option>
                        <option>Canada</option>
                        <option>UK</option>
                    </Form.Select>
                </Col>
                <Col md={4}>
                    <InputGroup>
                        <FormControl placeholder="Search for..." />
                    </InputGroup>
                </Col>
            </Row>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>
                            <Form.Check type="checkbox" />
                        </th>
                        <th>Name</th>
                        <th>Contacts</th>
                        <th>Resume</th>
                        <th>Source</th>
                        <th>Location</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} onClick={() => handleShowDetails(user)}>
                            <td>
                                <Form.Check type="checkbox" />
                            </td>
                            <td>{user.name}</td>
                            <td>
                                <div>{user.email}</div>
                                <div>{user.phone}</div>
                            </td>
                            <td>{user.resume}</td>
                            <td>{user.source}</td>
                            <td>{user.location}</td>
                            <td>
                                <Badge bg={user.status === 'Active' ? 'success' : 'warning'}>{user.status}</Badge>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedUser && (
        <Modal show={showDetails} onHide={handleCloseDetails}>
          <Modal.Header closeButton>
            <Modal.Title>User Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col md={4} className="text-center">
                  <img 
                    src="https://i.pinimg.com/564x/59/51/0b/59510b571158f40080fd0c913d68d61a.jpg" // Replace with the actual image path or user image URL
                    style={{ width: '100px', height: '100px' }} 
                  />
                </Col>
                <Col md={8}>
                  <h4>{selectedUser.name}</h4>
                  <p><strong>Role:</strong> {selectedUser.role}</p>
                  <ListGroup>
                    <ListGroup.Item><strong>Email:</strong> {selectedUser.email}</ListGroup.Item>
                    <ListGroup.Item><strong>Phone:</strong> {selectedUser.phone}</ListGroup.Item>
                    <ListGroup.Item><strong>Resume:</strong> {selectedUser.resume}</ListGroup.Item>
                    <ListGroup.Item><strong>Source:</strong> {selectedUser.source}</ListGroup.Item>
                    <ListGroup.Item><strong>Location:</strong> {selectedUser.location}</ListGroup.Item>
                    <ListGroup.Item><strong>Status:</strong> {selectedUser.status}</ListGroup.Item>
                    <ListGroup.Item><strong>Education:</strong> {selectedUser.education}</ListGroup.Item>
                    <ListGroup.Item><strong>Skills:</strong> {selectedUser.skills}</ListGroup.Item>
                    <ListGroup.Item><strong>Experience:</strong> {selectedUser.experience}</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDetails}>
              Close
            </Button>
            <Button variant="primary">
              Send Invitation
            </Button>
          </Modal.Footer>
        </Modal>
            )}
        </Container>
        </>
    );
};

export default ResumeRequest;
