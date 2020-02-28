const { replace } = require('@bit/amazingdesign.utils.variables-in-string')
const { exec } = require('node-exec-promise')

const {
  getDirectories,
} = require('./fsHelpers')

module.exports = (answers) => {
  const { createGitHubReposAndPush, repoNamePattern, path } = answers

  if (!createGitHubReposAndPush) return Promise.resolve(answers)

  const mainDirName = path.split('/').slice(-1)[0]
  const repos = getDirectories(path)

  const reposCreationPromises = repos.map(({ name, path }) => {
    const githubName = replace(repoNamePattern, { mainDir: mainDirName, dir: name })

    return exec(`cd ${path} && git init && git add -A && git commit -m "Automatic commit"`)
      .catch(() => {
        // prevent to fail when "nothing to commit"          
      })
      .then(() => exec(`cd ${path} && git remote remove origin`))
      .then(() => console.log('Creating repo: ' + githubName))
      .then(() => exec(`cd ${path} && hub create ${githubName}`))
      .then(() => console.log('Created repo: ' + githubName))
      .then(() => exec(`cd ${path} && git push -u origin master`))
      .then(() => console.log('Pushed to repo: ' + githubName))
  })

  return Promise.all(reposCreationPromises)
    .then(() => console.log('All repos created and pushed!'))
}