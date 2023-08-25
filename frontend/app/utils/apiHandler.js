const axios = require('axios');
const env = require('dotenv').config();

const apiHandler = axios.create({
    baseURL: 'https://your-base-api-url.com',  // Base URL for internal services or microservices
    timeout: 10000,  // Request timeout in milliseconds
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor for adding authentication token or other headers
apiHandler.interceptors.request.use(
    config => {
        const token = 'YOUR_AUTH_TOKEN';  // Fetch token from session, database, or environment variables.
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Response interceptor for handling global API response errors
apiHandler.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {
            console.log("Unauthorized!");
            // Handle unauthorized errors, maybe redirect to login page, etc.
        }
        // Handle other common errors like 404 (Not Found), 500 (Internal Server Error), etc.
        return Promise.reject(error);
    }
);

module.exports = apiHandler;
