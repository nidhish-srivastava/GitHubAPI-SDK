class Issues {
    constructor(client) {
        this.client = client
    }
    async createIssue(owner, repo, issueDetails) {
        try {
            const response = await this.client.axiosInstance.post(`/repos/${owner}/${repo}/issues`, issueDetails)
            return response.data
        } catch (error) {
            console.error("error catching issue: ", error);
            throw error
        }
    }

    async listIssues(owner, repo) {
        try {
            const response = await this.client.axiosInstance.get(`/repos/${owner}/${repo}/issues`);
            return response.data;
        } catch (error) {
            console.error('Error listing issues:', error);
            throw error;
        }
    }

    async updateIssue(repo, issueNumber, updateDetails) {
        try {
          const response = await this.client.axiosInstance.patch(`/repos/${repo}/issues/${issueNumber}`, updateDetails);
          return response.data;
        } catch (error) {
          console.error('Error updating issue:', error.response ? error.response.data : error.message);
          throw error;
        }
      }
    
      async closeIssue(repo, issueNumber) {
        try {
          const response = await this.client.axiosInstance.patch(`/repos/${repo}/issues/${issueNumber}`, { state: 'closed' });
          return response.data;
        } catch (error) {
          console.error('Error closing issue:', error.response ? error.response.data : error.message);
          throw error;
        }
      }


}

module.exports = Issues;