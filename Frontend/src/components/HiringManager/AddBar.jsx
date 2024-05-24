import { Nav } from 'react-bootstrap';


const Addbar = ({ onSelect }) => (
  <Nav defaultActiveKey="#addjob" className="flex-column bg-light p-3">
    <Nav.Link href="#addjob" onClick={() => onSelect('addjob')}>Add Job</Nav.Link>
    <Nav.Link href="#addjobdetails" onClick={() => onSelect('addjobdetails')}>Add Job Details</Nav.Link>
  </Nav>
);

export default Addbar;


