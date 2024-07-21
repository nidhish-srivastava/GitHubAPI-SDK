const axios = require('axios')

class GitHubClient {
    constructor(authToken) {
        this.authToken = authToken
        this.axiosInstance = axios.create({
            baseURL: "https://api.github.com",
            headers: {
                Authorization: `token ${this.authToken}`,
                'Content-Type': 'application/json',
            },
        })
    }
    async getUser() {
        try {
            const response = await this.axiosInstance.get('/user');
            return response.data;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }
}

module.exports = GitHubClient;