// user.js

// Mock data for demonstration purposes
const mockApplications = [
    { id: 1, jobTitle: 'Software Engineer', company: 'ABC Inc.' },
    { id: 2, jobTitle: 'Product Manager', company: 'XYZ Corp.' },
    // More mock data...
  ];
  
  const mockSavedJobs = [
    { id: 1, title: 'Software Engineer', company: 'ABC Inc.' },
    { id: 2, title: 'Product Manager', company: 'XYZ Corp.' },
    // More mock data...
  ];
  
  // Mock API functions to fetch user applications and saved jobs
  export const getApplications = async () => {
    // Simulate an asynchronous API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockApplications);
      }, 1000); // Simulate a 1-second delay
    });
  };
  
  export const getSavedJobs = async () => {
    // Simulate an asynchronous API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockSavedJobs);
      }, 1000); // Simulate a 1-second delay
    });
  };
  