module.exports = [
  {
    type: 'path',
    name: 'path',
    default: process.cwd(),
    message: 'Absolute path to folder with repos inside'
  },
  {
    type: 'confirm',
    name: 'includeFiles',
    default: true,
    message: 'Do you want to include files to every repo?'
  },
  {
    type: 'path',
    name: 'includeFilesPath',
    default: process.cwd(),
    message: 'Path to folder with files to include in every repo',
    when: (answers) => answers.includeFiles === true
  },
  {
    type: 'confirm',
    name: 'createGitHubReposAndPush',
    default: true,
    message: 'Do you want to create GitHub repos and push all?'
  },
  {
    type: 'input',
    name: 'repoNamePattern',
    default: '{{mainDir}}--{{dir}}',
    message: 'Pattern to create repo name. You can use {{mainDir}} and {{dir}} variables.'
  }
]