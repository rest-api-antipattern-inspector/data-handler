import fs from 'fs'

export const getLinguisticData = async () => {
  const path = './data-files/linguistic-antipatterns'

  const files = await getFiles(path)

  // TODO get better data from every file
  const fileContents = files.map((f) => getInfoObj(`${path}/${f}`))
  console.log(fileContents)
}

const getFiles = (directory: string) => fs.promises.readdir(directory)

const getInfoObj = (path: string) => {
  const fileContent = getFileContent(path)

  const lines = fileContent.split('\n')

  const emptyLineIndex = lines.indexOf('')
  const patternHeaderIndex = lines.indexOf('***Pattern***')

  const antipatternCount = parseInt(lines[1].replace('Count: ', ''))
  const patternCount = parseInt(
    lines[patternHeaderIndex + 1].replace('Count: ', '')
  )

  const antipatternEndpoints = getEndPoints(lines, 2, emptyLineIndex)
  const patternEndpoints = getEndPoints(
    lines,
    patternHeaderIndex + 2,
    lines.length
  )

  // TODO add api name, antipattern name to object

  return {
    antipatternCount,
    patternCount,
    antipatternEndpoints,
    patternEndpoints,
  }
}

const getFileContent = (path: string) => fs.readFileSync(path, 'utf8')

const getEndPoints = (
  lines: string[],
  startIndex: number,
  endIndex: number
) => {
  const endPoints = []

  for (let i = startIndex; i < endIndex; i++) {
    endPoints.push(lines[i])
  }

  return endPoints
}
