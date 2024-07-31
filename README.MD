# GitHubAPI-SDK

A simple SDK for interacting with the GitHub API.

## Installation

```bash
npm install @nidhish_10/github-sdk
```
## Usage

Import the modules from the sdk
```
import GitHubClient from '@nidhish_10/githubapi-sdk/src/client';
import Issues from '@nidhish_10/githubapi-sdk/src/issues';
import Repositories from '@nidhish_10/githubapi-sdk/src/repositories';
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

Available methods right now : 
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
