// UserManagement.js
import  { useState } from 'react';
import SideBar from './SideBar'
import { Table, Button, Form } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
const AdminAccept = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Yancy Rosales', role: 'Manager', status: 'Non-Logged In' },
        { id: 2, name: 'Lamont Nijebarack', role: 'Manager', status: 'Active' },
        { id: 3, name: 'Talon Curton', role: 'Admin', status: 'Active' },
        { id: 4, name: 'Alonza Andulae', role: 'Admin', status: 'Non-Logged In' },
        { id: 5, name: 'Antonio Hafner', role: 'Manager', status: 'Active' },
        { id: 6, name: 'Sandria Bricafowitz', role: 'Builder', status: 'Active' },
        { id: 7, name: 'Liliah Irwinley', role: 'Auditor', status: 'Non-Logged In' },
        { id: 8, name: 'Navel El Aasam', role: 'Auditor', status: 'Active' }
    ]);

    const handleModifyRole = (id) => {
        console.log(`Modify role for user with id: ${id}`);
        // Implement modify role functionality here
    };

    const handleRemoveUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <>
        <Row>
            <Col sm={2}>
        <div>
            <SideBar/>
        </div>
        </Col>
        <Col sm={10}>
        <div className="container mt-5">
            <h2>User Management</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>User Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>
                                <Form.Check type="checkbox" />
                            </td>
                            <td>{user.name}</td>
                            <td>
                                <span className={`badge bg-${user.status === 'Non-Logged In' ? 'warning' : 'success'} me-2`}>{user.role}</span>
                                <span className={`badge bg-${user.status === 'Active' ? 'success' : 'warning'}`}>{user.status}</span>
                            </td>
                            <td>
                                <Button variant="primary" onClick={() => handleModifyRole(user.id)} className="me-2">Modify Role</Button>
                                <Button variant="danger" onClick={() => handleRemoveUser(user.id)}>Remove User</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-between">
                <Button variant="success">Add User</Button>
                <Form>
                    <Form.Control type="search" placeholder="Search User" />
                </Form>
            </div>
        </div>
        </Col>
        </Row>
        </>
    );
};

export default AdminAccept;
