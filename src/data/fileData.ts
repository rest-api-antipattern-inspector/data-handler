import fs from 'fs'

export const getLinguisticData = async () => {
  const path = './data-files/linguistic-antipatterns'

  const files = await getFiles(path)
  const fileContents = files.map((f) => getFileContent(`${path}/${f}`))
  console.log(fileContents)
}

const getFiles = (directory: string) => fs.promises.readdir(directory)

const getFileContent = (path: string) => fs.readFileSync(path, 'utf8')
