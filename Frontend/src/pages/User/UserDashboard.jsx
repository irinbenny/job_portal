import React, { useEffect, useState } from 'react';
import { getApplications, getSavedJobs } from '../../api/user'; // Mock API calls

const UserDashboard = () => {
    const [applications, setApplications] = useState([]);
    const [savedJobs, setSavedJobs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const userApplications = await getApplications();
                const userSavedJobs = await getSavedJobs();
                setApplications(userApplications);
                setSavedJobs(userSavedJobs);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []); // Empty dependency array to run the effect only once

    return (
        <div>
            {/* Display user applications */}
            <h2>Applications</h2>
            <ul>
                {applications.map(application => (
                    <li key={application.id}>
                        {application.jobTitle} - {application.company}
                    </li>
                ))}
            </ul>

            {/* Display saved jobs */}
            <h2>Saved Jobs</h2>
            <ul>
                {savedJobs.map(job => (
                    <li key={job.id}>
                        {job.title} - {job.company}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserDashboard;
