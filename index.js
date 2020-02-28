
const inquirer = require('inquirer')

const questions = require('./questions')
const copyFiles = require('./copyFiles')
const pushRepos = require('./pushRepos')

inquirer.prompt(questions)
  .then(copyFiles)
  .then(pushRepos)
  .then(() => console.log('All work done!'))
  .catch(console.error)