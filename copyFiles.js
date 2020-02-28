const {
  getFiles,
  getDirectories,
  copyFilesToRepos,
} = require('./fsHelpers')

module.exports = (answers) => {
  const { path, includeFilesPath } = answers

  if (!includeFilesPath) return Promise.resolve(answers)

  const filesToInclude = getFiles(includeFilesPath)
  const repos = getDirectories(path)

  console.log(`Found ${filesToInclude.length} files to include.`)
  console.log(`Found ${repos.length} repos.`)

  return copyFilesToRepos(filesToInclude, repos)
    .then(({ length }) => {
      console.log(`${length} files were copied to ${repos.length} repos successfully (${filesToInclude.length} files per repo)!`)
      return answers
    })
    .catch((error) => {
      console.error('Error when copying files! Aborting')
      console.error(error)
      return Promise.reject(error)
    })
}