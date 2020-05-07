import fs from 'fs'
import IMeta from '../interfaces/IMeta'

export const getData = (): IMeta[] => {
  const jsonPath = './data-files/design-antipatterns/responses.json'
  const data: IMeta[] = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))

  data.forEach((obj) => {
    obj.endpoint = `/${obj.endpoint}`
  })

  const linguisticDirPath = './data-files/linguistic-antipatterns'
  const linguisticFileNames = getFileNames(linguisticDirPath)

  linguisticFileNames.forEach((f) => {
    appendLinguisticData(data, `${linguisticDirPath}/${f}`, f)
  })

  return data
}

const getFileNames = (directory: string) => fs.readdirSync(directory)

const appendLinguisticData = (
  data: IMeta[],
  filePath: string,
  fileName: string
): void => {
  try {
    const api = getAPIName(fileName)
    const linguisticAntipattern = getAntipattern(fileName)

    const fileContent = getFileContent(filePath)
    const rawLines = fileContent.split('\n')
    const lines = rawLines.map((rl) =>
      removeEndNullAndJunk(getOnlyEndpoint(rl))
    )

    const emptyLineIndex = lines.indexOf('')

    const antipatternEndpoints = getEndPoints(lines, 2, emptyLineIndex)

    data.forEach((obj) => {
      if (obj.api.toUpperCase() === api.toUpperCase()) {
        obj.linguisticAntipatterns[
          linguisticAntipattern
        ] = antipatternEndpoints.includes(obj.endpoint)
      }
    })
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

const removeEndNullAndJunk = (line: string): string => {
  const endpoint = line.split(' ')[0]
  const lastFourChars = endpoint.substring(endpoint.length - 4, endpoint.length)

  return lastFourChars === 'null'
    ? endpoint.substring(0, endpoint.length - 4)
    : endpoint
}

const getOnlyEndpoint = (line: string): string =>
  line.charAt(0) === '/'
    ? line
    : line.substring(line.indexOf('/'), line.length - 1).split(' ')[0]
