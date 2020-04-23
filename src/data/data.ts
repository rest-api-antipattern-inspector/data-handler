import fs from 'fs'
import IDesignObj from '../interfaces/IDesignObj'
import ILinguisticObj from '../interfaces/ILinguisticObj'

export const getData = (): IDesignObj[] => {
  // TODO change to the real file
  const jsonPath = './data-files/design-antipatterns/dummy_responses.json'
  const data: IDesignObj[] = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))

  const linguisticDirPath = './data-files/linguistic-antipatterns'
  const linguisticFileNames = getFileNames(linguisticDirPath)

  linguisticFileNames.forEach((f) => {
    appendLinguisticData(data, `${linguisticDirPath}/${f}`, f)
  })

  return data
}

const getFileNames = (directory: string) => fs.readdirSync(directory)

const appendLinguisticData = (
  data: IDesignObj[],
  filePath: string,
  fileName: string
): ILinguisticObj => {
  // TODO couldn't I here put this with the endpoint of the design obj
  // find the obj in obj[] w. the same endpoint, append linguistic data

  // or hmm, for every endpoint do that

  // I have all endpoints in the IDesignObj[]

  // see if the endpoint belongs in anti or pattern

  try {
    const api = getAPIName(fileName)
    const linguisticAntipattern = getAntipattern(fileName)

    // for each obj in data,
    // also make sure api is the same
    // [linguisticAntipattern] = patternEndpoints.includes(endpoint)

    const fileContent = getFileContent(filePath)
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
): string[] => {
  const endPoints = []

  for (let i = startIndex; i < endIndex; i++) {
    endPoints.push(lines[i])
  }

  return endPoints
}

const getAPIName = (fileName: string) => fileName.split('-')[0]

const getAntipattern = (fileName: string) =>
  fileName.split('-')[1].replace('.txt', '')
