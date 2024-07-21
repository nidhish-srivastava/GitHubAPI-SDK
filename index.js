const GitHubClient = require('./src/client')
const Repositories = require('./src/repositories');
const Issues = require('./src/issues');
const dotenv = require('dotenv')
dotenv.config()

const authToken = process.env.auth_token
const check = async () => {
    try {
        const client = new GitHubClient(authToken);

        // Test the user fetching
        const userData = await client.getUser();
        console.log('User Data:', userData);

        // Instantiate the repositories class with the client
        const repoManager = new Repositories(client)
        const newRepoDetails = {
            name: 'my-new-repo',
            description: 'This is my new repository',
            private: true
        }
        const newRepo = await repoManager.createRepo(newRepoDetails);
        console.log('New Repository:', newRepo);

        // List repositories for a specific user
        const repos = await repoManager.listRepos('nidhish-srivastava');
        console.log('Repositories:', repos);

        const issueManager = new Issues(client)
        const newIssueDetails = {
            title: 'New Issue',
            body: 'Description of the issue'
        };
        const newIssue = await issueManager.createIssue('nidhish-srivastava','my-new-repo', newIssueDetails)
        console.log('New Issue:', newIssue);

        // List issues for a specific repository
        const issues = await issueManager.listIssues('nidhish-srivastava','my-new-repo');
        console.log('Issues:', issues);

        const issueNumber = newIssue.number;
        const updateIssueDetails = {
          title: 'Updated Issue Title',
          body: 'Updated issue description'
        };
        const updatedIssue = await issueManager.updateIssue(fullRepoPath, issueNumber, updateIssueDetails);
        console.log('Updated Issue:', updatedIssue);
        
        const closedIssue = await issueManager.closeIssue(fullRepoPath, issueNumber);
        console.log('Closed Issue:', closedIssue);

    } catch (error) {
        // console.error('Error:', error);
    }
}

check()
