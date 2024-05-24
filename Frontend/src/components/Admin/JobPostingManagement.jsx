import { useState, useEffect } from 'react';
import { getJobPostings, approveJobPosting, rejectJobPosting, removeJobPosting } from '../../api/admin';
import SideBar from './SideBar'
import { Col, Row } from 'react-bootstrap';

const JobPostingManagement = () => {
    const [jobPostings, setJobPostings] = useState([]);

    useEffect(() => {
        async function fetchJobPostings() {
            const data = await getJobPostings();
            setJobPostings(data);
        }
        fetchJobPostings();
    }, []);

    const handleApprove = async (id) => {
        // Call API to approve job posting
        await approveJobPosting(id);
        // Update UI
        setJobPostings(jobPostings.map(posting => posting.id === id ? { ...posting, status: 'approved' } : posting));
    };

    const handleReject = async (id) => {
        // Call API to reject job posting
        await rejectJobPosting(id);
        // Update UI
        setJobPostings(jobPostings.map(posting => posting.id === id ? { ...posting, status: 'rejected' } : posting));
    };

    const handleRemove = async (id) => {
        // Call API to remove job posting
        await removeJobPosting(id);
        // Update UI
        setJobPostings(jobPostings.filter(posting => posting.id !== id));
    };

    return (
        <div>
           <Row>
            <Col sm={2}>
        <div>
            <SideBar/>
        </div>
        </Col>
        <Col sm={2}>
            <h2>Job Posting Management</h2>
            <ul>
                {jobPostings.map(posting => (
                    <li key={posting.id}>
                        <div>
                            <strong>Title:</strong> {posting.title}
                        </div>
                        <div>
                            <strong>Status:</strong> {posting.status}
                        </div>
                        <div>
                            <button onClick={() => handleApprove(posting.id)}>Approve</button>
                            <button onClick={() => handleReject(posting.id)}>Reject</button>
                            <button onClick={() => handleRemove(posting.id)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            </Col>
            </Row>
        </div>
    );
};

export default JobPostingManagement;
