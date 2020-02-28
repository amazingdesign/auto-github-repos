module.exports = [
  {
    type: 'input',
    name: 'path',
    default: __dirname + '/repos',
    message: 'Absolute path to folder with repos inside'
  },
  {
    type: 'confirm',
    name: 'includeFiles',
    default: true,
    message: 'Do you want to include files to every repo?'
  },
  {
    type: 'input',
    name: 'includeFilesPath',
    default: __dirname + '/files',
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
    default: 'coderoadpl/{{mainDir}}--{{dir}}',
    message: 'Pattern to create repo name. You can use {{mainDir}} and {{dir}} variables.'
  }
]