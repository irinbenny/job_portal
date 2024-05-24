import  { useState} from 'react';
import SideBar from './SideBar'
import Report from './Report';
import { Col, Row } from 'react-bootstrap';

const ReportContainer = () => {
  // Sample data (replace with actual data fetched from API)
  const [reportData, setReportData] = useState([
    { user: 'User 1', activity: 'Logged in' },
    { user: 'User 2', activity: 'Registered' },
    { user: 'User 3', activity: 'Created job posting' },
    // Add more sample data as needed
  ]);

  return (
    <div>
        <Row>
            <Col sm={2}>
        <div>
            <SideBar/>
        </div>
        </Col>
        <Col sm={10}>
      <h1>Reports</h1>
      <Report data={reportData} />
      </Col>
        </Row>
    </div>
  );
};

export default ReportContainer;
