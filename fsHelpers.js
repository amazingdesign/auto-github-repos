const { readdirSync } = require('fs')
const fse = require('fs-extra')

const copyFiles = (files, destinationPath) => {
  const copyPromises = files.map(({ path, name }) => (
    fse.copy(path, destinationPath + '/' + name)
  ))

  return copyPromises
}
const makeFileObject = (source) => (dirent) => ({
  path: source + '/' + dirent.name,
  name: dirent.name,
})
const getFiles = (source) => (
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => !dirent.isDirectory())
    .map(makeFileObject(source))
)
const getDirectories = (source) => (
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(makeFileObject(source))
)


const copyFilesToRepos = (files, repos) => {
  const copyPromises = repos.flatMap(({ name, path }) => copyFiles(files, path))

  return Promise.all(copyPromises)
}

module.exports = {
  copyFiles,
  makeFileObject,
  getFiles,
  getDirectories,
  copyFilesToRepos,
}