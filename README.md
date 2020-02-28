# auto-github-repos

Small script to batch create and push Github repositories from all directories in selected folder!

## Usage

```
npx auto-github-repos
```

or 


```
npm install -g auto-github-repos

auto-github-repos
```

## Posibilities

- passing path to main folders containing folders which should be published
- auto creating GithubRepos with name form user defined pattern
- auto committing and pushing repos to newly created remotes
- [optional] copying files to all repos form provided directory (eg. the same README in all repos etc.)

## Requirements

[github/hub](https://github.com/github/hub) installed and authenticated on the machine. The package use it as GitHub CLI.