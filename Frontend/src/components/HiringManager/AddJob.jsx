import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
/* import { useNavigate } from 'react-router-dom'; */
import "react-toastify/dist/ReactToastify.css";

import { IoLocationOutline } from "react-icons/io5";

const AddJob = () => {
  /* const navigate = useNavigate(); */ // Initialize useHistory
  const [jobData, setJobData] = useState({
    companyName: "",
    jobLocation: "",
    jobRole: "",
    workplaceType: "",
    jobType: "",
    datePosted: "",
    applicationDeadline: "",
  });

  const [yearsExperience, setYearsExperience] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [roleDescription, setRoleDescription] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [skills, setSkills] = useState('');
  const [source, setSource] = useState('');
  const [current, setCurrent] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveAndContinue =  (e) => {
    console.log(current);
    e.preventDefault();
    setCurrent(1);
    /*  const { companyName, jobLocation, jobRole, workplaceType, jobType, datePosted, applicationDeadline } = jobData; */

    /*    try {
      if (!companyName || !jobLocation || !jobRole || !workplaceType || !jobType || !datePosted || !applicationDeadline) {
        toast.info('Please fill the form completely');
      } else {
        const response = await postJobAPI(jobData) // Call postJobAPI function and pass jobData
        console.log(response.data); // Log response data
        localStorage.setItem('jobData', JSON.stringify(jobData)); // Store jobData in localStorage (if needed)
     
      }
    } catch (error) {
      console.error('Error posting job:', error.message);
      toast.error('Failed to post job. Please try again.');
    } */
  };
  console.log(current);
  return (
    <>
      {current == 0 && (
        <Container className="mt-5">
          <Row className="justify-content-sm-center">
            <Col md={8}>
              <div className="p-5 bg-white rounded shadow">
                <Form>
                  <h5 className="text-center mb-3">Post a job</h5>
                  <Form.Group controlId="formFullName" className="mt-4">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter company name"
                      name="companyName"
                      value={jobData.companyName}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formJobLocation" className="mt-4">
                    <Form.Label>Job Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter job location"
                      name="jobLocation"
                      value={jobData.jobLocation}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formJobRole" className="mt-4">
                    <Form.Label>Job Role</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter job role"
                      name="jobRole"
                      value={jobData.jobRole}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formWorkplaceType" className="mt-4">
                    <Form.Label>Workplace Type</Form.Label>
                    <Form.Control
                      as="select"
                      name="workplaceType"
                      value={jobData.workplaceType}
                      onChange={handleChange}
                    >
                      <option value="">Select type</option>
                      <option value="On-site">On-site</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Remote">Remote</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formJobType" className="mt-4">
                    <Form.Label>Job Type</Form.Label>
                    <Form.Control
                      as="select"
                      name="jobType"
                      value={jobData.jobType}
                      onChange={handleChange}
                    >
                      <option value="">Select type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Internship">Internship</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formDatePosted" className="mt-4">
                    <Form.Label>Date Posted</Form.Label>
                    <Form.Control
                      type="date"
                      name="datePosted"
                      value={jobData.datePosted}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="formApplicationDeadline"
                    className="mt-4"
                  >
                    <Form.Label>Application Deadline</Form.Label>
                    <Form.Control
                      type="date"
                      name="applicationDeadline"
                      value={jobData.applicationDeadline}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between mt-4">
                    <Button variant="outline-secondary">Cancel</Button>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleSaveAndContinue}
                    >
                      Save & Continue
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
          <ToastContainer
            theme="colored"
            position="top-center"
            autoClose={2000}
          />
        </Container>
      )}
      {current == 1 && (
        <Row>
          <Col md={9}>
            <div className="text-center p-3">
              <p>Application Form</p>
              <h3>Help us target the right candidates</h3>
            </div>

            <div className="shadow p-5 text-center" style={{ width: "1200px" }}>
              <h3>{jobData.jobRole}</h3>
              <div className="d-flex justify-content-center">
                <h6 className="mt-3">{jobData.companyName}</h6>
                <h6 className="mt-3 ms-5">
                  <IoLocationOutline className="me-2" />
                  {jobData.jobLocation}
                </h6>
                <h6 className="mt-3 ms-5">{jobData.workplaceType}</h6>
                <h6 className="mt-3 ms-5">
                  <strong>Date Posted:</strong> {jobData.datePosted}
                </h6>
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

                <Button variant="primary" type="submit" className="mt-4">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default AddJob;
