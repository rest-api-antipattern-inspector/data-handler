import fs from 'fs'
import IDesignObj from '../interfaces/IDesignObj'

export const getData = (): IDesignObj[] => {
  // TODO change to the real file
  const jsonPath = './data-files/design-antipatterns/dummy_responses.json'
  const data: IDesignObj[] = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))

  const linguisticDirPath = './data-files/linguistic-antipatterns'
  const linguisticFileNames = getFileNames(linguisticDirPath)

  linguisticFileNames.forEach((f) => {
    appendLinguisticData(data, `${linguisticDirPath}/${f}`, f)
  })

  console.log(data)

  return data
}

const getFileNames = (directory: string) => fs.readdirSync(directory)

const appendLinguisticData = (
  data: IDesignObj[],
  filePath: string,
  fileName: string
): void => {
  try {
    const api = getAPIName(fileName)
    const linguisticAntipattern = getAntipattern(fileName)

    const fileContent = getFileContent(filePath)
    const lines = fileContent.split('\n')
    const emptyLineIndex = lines.indexOf('')

    const antipatternEndpoints = getEndPoints(lines, 2, emptyLineIndex)

    data.forEach((obj) => {
      if (obj.api === api) {
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
