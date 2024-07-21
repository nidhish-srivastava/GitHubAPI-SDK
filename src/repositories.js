class Repositories {
    constructor(client) {
        this.client = client
    }

    async createRepo(repoDetails) {
        try {
            const response = await this.client.axiosInstance.post('/user/repos', repoDetails)
            return response.data
        } catch (error) {
            console.error('Error creating repository:', error);
            throw error;
        }
    }

    async listRepos(username) {
        try {
            const response = await this.client.axiosInstance.get(`/users/${username}/repos`);
            return response.data;
        } catch (error) {
            console.error('Error listing repositories:', error);
            throw error;
        }
    }

    async getRepo(owner, repo) {
        try {
          const response = await this.client.axiosInstance.get(`/repos/${owner}/${repo}`);
          return response.data;
        } catch (error) {
          console.error('Error fetching repository:', error.response ? error.response.data : error.message);
          throw error;
        }
      }
    
      async deleteRepo(owner, repo) {
        try {
          const response = await this.client.axiosInstance.delete(`/repos/${owner}/${repo}`);
          return response.data;
        } catch (error) {
          console.error('Error deleting repository:', error.response ? error.response.data : error.message);
          throw error;
        }
      }
}

module.exports = Repositories;