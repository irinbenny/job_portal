import  { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import '../../style/style.css'; 
const ChatButton = () => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission
        console.log("Form data submitted:", formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        handleClose();
    };


    return (
        <div>
            <Button className="chat-button" onClick={handleShow} style={{backgroundColor:'#7a6796',border: 'none'}}>
                <span role="img" aria-label="chat" className="chat-icon">💬</span> Chat
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton style={{ backgroundColor: '#7a6796', color: '#fff' }}>
                    <Modal.Title>Chat with Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>How can we help?</h5>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mt-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhone" className="mt-3">
                            <Form.Label>Phone Number (optional)</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage" className="mt-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Type your message here"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button style={{backgroundColor:'#7a6796'}} type="submit" className="mt-3">
                            Send message
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ChatButton;
