// UserManagement.js

import SideBar from './SideBar'

import { Col, Row } from 'react-bootstrap';
const AdminAccept = () => {
   

    return (
        <>
        <Row>
            <Col sm={2}>
        <div>
            <SideBar/>
        </div>
        </Col>
        
        </Row>
        </>
    );
};

export default AdminAccept;
