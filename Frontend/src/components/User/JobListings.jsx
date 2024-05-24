import { CiBookmarkPlus, CiClock1  } from "react-icons/ci";

// Dummy data
const jobs = [
  {
    id: 1,
    company: 'ABC Corporation',
    logo: 'https://d3ogvqw9m2inp7.cloudfront.net/assets/dynamic/assets/recruiters/images/782809/logo.png',
    position: 'Frontend Developer',
    location: 'New York, NY',
    datePosted: 'May 10, 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget aliquam lorem, eu tempus magna. Duis tincidunt justo ut ante congue, at bibendum metus suscipit.',
  },
  {
    id: 2,
    company: 'XYZ Inc.',
    logo: 'https://d3ogvqw9m2inp7.cloudfront.net/assets/dynamic/assets/recruiters/images/782809/logo.png',
    position: 'UX Designer',
    location: 'San Francisco, CA',
    datePosted: 'May 11, 2024',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In consequat sagittis lacus, id tincidunt justo lobortis in.',
  },
  // Add more dummy job objects as needed
];

function JobListings() {
  return (
    <div>
      <div className="job-listings" >
        {jobs.map(job => (
          <div key={job.id} className="job-card d-flex" style={{ marginBottom: '2rem'}}>
            <div>
            <img src={job.logo} alt={job.company} className="company-logo" style={{width:'100px',height:'90p'}}/>
            </div>
            <div className="job-details">
              <h4  style={{ marginBottom: '0.5rem' }}>{job.position}</h4>
              <h6  style={{ marginBottom: '0.5rem' }}>{job.company}</h6>
              <p  style={{ marginBottom: '0.5rem' }}>{job.location}</p>
              <p  style={{ marginBottom: '0.5rem' }}> <CiClock1  size={15} className='mb-1'/> {job.datePosted}</p>
            </div>
            <div className='ms-2' >
            <CiBookmarkPlus size={25}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListings;
