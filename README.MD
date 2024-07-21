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
Create tokens
``` 
const authToken = 'your_github_auth_token';
```

Create instances
```
const client = new GitHubClient(authToken);
const issues = new Issues(client);
const repos = new Repositories(client);
```
