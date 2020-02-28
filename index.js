#! /usr/bin/env node

const inquirer = require('inquirer')
const { PathPrompt } = require('inquirer-path')

const questions = require('./questions')
const copyFiles = require('./copyFiles')
const pushRepos = require('./pushRepos')

inquirer.prompt.registerPrompt('path', PathPrompt)

inquirer.prompt(questions)
  .then(copyFiles)
  .then(pushRepos)
  .then(() => console.log('All work done!'))
  .catch(console.error)