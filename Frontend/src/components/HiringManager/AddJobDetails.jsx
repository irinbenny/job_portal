/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { postJobAPI } from '../../services/allAPI'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddJobDetails({ companyName, jobLocation, jobRole, workplaceType, datePosted }) {
    const navigate = useNavigate();
    const [yearsExperience, setYearsExperience] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [roleDescription, setRoleDescription] = useState('');
    const [qualifications, setQualifications] = useState('');
    const [skills, setSkills] = useState('');
    const [source, setSource] = useState('');

    console.log(companyName, jobLocation, jobRole, workplaceType, datePosted);
    //backend alle
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!yearsExperience || !companyDescription || !roleDescription || !qualifications || !skills || !source) {
            toast.info('Please fill the form completely');
            return;
        }

        try {
            const formData = {
                yearsExperience,
                companyDescription,
                roleDescription,
                qualifications,
                skills,
                source,
            };

            const result = await postJobAPI(formData);
            console.log(result);

            if (result.status === 201) {
                toast.success('Registration successful');
                setYearsExperience('');
                setCompanyDescription('');
                setRoleDescription('');
                setQualifications('');
                setSkills('');
                setSource('');
                navigate.push('/confirmation');
            } else {
                toast.error('Failed to submit job');
            }
        } catch (error) {
            console.error('Error posting job:', error.message);
            toast.error('Failed to post job. Please try again.');
        }
    };

    return (
        <>
        <Row>
            <Col md={9}>
                <div className='text-center p-3'>
                    <p>Application Form</p>
                    <h3>Help us target the right candidates</h3>
                </div>

                <div className='shadow p-5 text-center' style={{ width: '1200px' }}>
                    <h3>{jobRole}</h3>
                    <div className='d-flex justify-content-center'>
                        <h6 className='mt-3'>{companyName}</h6>
                        <h6 className='mt-3 ms-5'><IoLocationOutline className='me-2' />{jobLocation}</h6>
                        <h6 className='mt-3 ms-5'>{workplaceType}</h6>
                        <h6 className='mt-3 ms-5'><strong>Date Posted:</strong> {datePosted}</h6>
                    </div>
                </div>

                <div className="mt-5">
                    <h3>Company Description</h3>
                    <Form.Group controlId="companyDescription">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter company description"
                            value={companyDescription}
                            onChange={(e) => setCompanyDescription(e.target.value)}
                            required
                        />
                    </Form.Group>
                </div>

                <div className="mt-4">
                    <h3>Role Description</h3>
                    <Form.Group controlId="roleDescription">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter role description"
                            value={roleDescription}
                            onChange={(e) => setRoleDescription(e.target.value)}
                            required
                        />
                    </Form.Group>
                </div>

                <div className="mt-5">
                    <h3>Work Experience</h3>
                    <p>Add relevant work experience here for this job.</p>
                    <Form onSubmit={handleFormSubmit} className="mt-3">
                        <Form.Group controlId="yearsExperience">
                            <Form.Control
                                type="number"
                                placeholder="Enter years of experience"
                                value={yearsExperience}
                                onChange={(e) => setYearsExperience(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <div className="mt-5">
                            <h3>Qualifications</h3>
                            <Form.Group controlId="qualifications">
                                <Form.Label>Qualifications</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter qualifications"
                                    value={qualifications}
                                    onChange={(e) => setQualifications(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </div>

                        <div className="mt-5">
                            <h3>Skills</h3>
                            <Form.Group controlId="skills">
                                <Form.Label>Skills</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter skills"
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </div>

                        <div className="mt-5">
                            <h3>How did you hear about LinkedIn jobs?</h3>
                            <Form.Group controlId="source">
                                <Form.Label>Source</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter source"
                                    value={source}
                                    onChange={(e) => setSource(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </div>

                        <Button variant="primary" type="submit" className="mt-4">Submit</Button>
                    </Form>
                </div>
            </Col>
        </Row>
        <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </>
    );
}

export default AddJobDetails;
