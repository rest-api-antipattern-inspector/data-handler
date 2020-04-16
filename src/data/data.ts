import fs from 'fs'
import IDesignObj from '../interfaces/IDesignObj'
import ILinguisticObj from '../interfaces/ILinguisticObj'

export const getDesignData = (): IDesignObj[] => {
  // TODO change to the real file
  const filePath = './data-files/design-antipatterns/dummy_responses.json'
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

export const getLinguisticData = (): ILinguisticObj[] => {
  const path = './data-files/linguistic-antipatterns'
  const files = getFiles(path)
  return files.map((f) => getDataObj(`${path}/${f}`, f))
}

const getFiles = (directory: string) => fs.readdirSync(directory)

const getDataObj = (path: string, fileName: string): ILinguisticObj => {
  try {
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

    return {
      api: getAPIName(fileName),
      antipattern: getAntipattern(fileName),
      antipatternCount,
      antipatternEndpoints,
      patternCount,
      patternEndpoints,
    }
  } catch (err) {
    console.error(err)
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

const getAPIName = (fileName: string) => fileName.split('-')[0]

const getAntipattern = (fileName: string) =>
  fileName.split('-')[1].replace('.txt', '')
