// admin.js

// Mock data for demonstration purposes
const mockJobPostings = [
    { id: 1, title: 'Software Engineer', status: 'pending' },
    { id: 2, title: 'Product Manager', status: 'pending' },
    // More mock data...
];

// Mock API functions to fetch job postings and perform actions
export const getJobPostings = async () => {
    // Simulate an asynchronous API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockJobPostings);
        }, 1000); // Simulate a 1-second delay
    });
};

export const approveJobPosting = async (id) => {
    // Simulate an asynchronous API call
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Job posting with ID ${id} approved.`);
            resolve();
        }, 500); // Simulate a 0.5-second delay
    });
};

export const rejectJobPosting = async (id) => {
    // Simulate an asynchronous API call
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Job posting with ID ${id} rejected.`);
            resolve();
        }, 500); // Simulate a 0.5-second delay
    });
};

export const removeJobPosting = async (id) => {
    // Simulate an asynchronous API call
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Job posting with ID ${id} removed.`);
            resolve();
        }, 500); // Simulate a 0.5-second delay
    });
};
