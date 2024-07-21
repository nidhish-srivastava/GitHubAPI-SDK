# GitHubAPI-SDK

A simple GitHub SDK for interacting with the GitHub API.

## Installation

```bash
npm install @nidhish_10/github-sdk
```
## Usage

Import the modules from the sdk
```
const GitHubClient = require('githubapi-sdk/src/client');
const Issues = require('githubapi-sdk/src/issues');
const Repositories = require('githubapi-sdk/src/repositories');
```
Create your auth token from developer settings of your github account
``` 
const authToken = 'your_github_auth_token';
```

Create instances
```
const client = new GitHubClient(authToken);
const issues = new Issues(client);
const repos = new Repositories(client);
```

Now use methods of these instances
Available methods right now
```
client.getUser()

issues.createIssue(owner, repo, issueDetails)
issues.listIssues(owner, repo)
issues.updateIssue(repo, issueNumber, updateDetails)
issues.closeIssue(repo, issueNumber)

repos.createRepo(repoDetails)
repos.listRepos(username)
repos.getRepo(owner, repo)
repos.deleteRepo(owner, repo)
```