import fs from 'fs'
import IMeta from '../interfaces/IMeta'
import IAntipatternBinaries from '../interfaces/IAntipatternBinaries'
import IAntipatternAbbreviation from '../interfaces/IAntipatternAbbreviation'

// template:

// BSD,FH,IMT,IC,MC,ISC,AMO,CRD,UVU,CRN,NHN,SPN
// 0,0,0,0,0,0,0,0,0,0,0,1
// 0,0,0,0,0,0,0,0,0,0,0,0

// UVU = unversioned uri

const antipatternAbbrevation: IAntipatternAbbreviation = {
  isBreakingSelfDescriptiveness: 'breakingSelfDescriptiveness',
  isForgettingHypermedia: 'forgettingHypermedia',
  isIgnoringCaching: 'ignoringCaching',
  isIgnoringMIMEType: 'ignoringMIMEType',
  isIgnoringStatusCode: 'ignoringStatusCode',
  isMisusingCookies: 'misusingCookies',
  AmorphousURI: 'amorphousURI',
  ContextlessResource: 'contextlessResource',
  CRUDyURI: 'CRUDyURI',
  NonHierarchicalNodes: 'nonHierarchicalNodes',
  PluralisedNodes: 'pluralisedNodes',
}

export const writeSingleCSV = (metas: IMeta[]) => {
  const csvData: IAntipatternBinaries = {}

  metas.forEach((m) => {
    appendData(csvData, m, 'designAntipatterns')
    appendData(csvData, m, 'linguisticAntipatterns')
  })

  let csvString = ''

  const csvHeadings = Object.keys(csvData)

  csvHeadings.forEach((heading, i) => {
    csvString += `${heading}${comma(i, csvHeadings)}`
  })

  csvString += '\n'

  const endpointsAmount = metas.length

  for (let i = 0; i < endpointsAmount; i++) {
    csvHeadings.forEach((heading, headingsIndex) => {
      csvString += `${csvData[heading][i]}${comma(headingsIndex, csvHeadings)}`
    })

    // newline if it isn't last line
    if (i !== endpointsAmount - 1) {
      csvString += '\n'
    }
  }

  fs.writeFileSync('./correlation-data/results.csv', csvString)
}

const comma = (index: number, headings: string[]): string =>
  index === headings.length - 1 ? '' : ','

const appendData = (
  csvData: IAntipatternBinaries,
  meta: IMeta,
  antipatternType: string
): void => {
  Object.keys(meta[antipatternType]).forEach((apKey) => {
    const antipattern = antipatternAbbrevation[apKey]

    if (!csvData[antipattern] /** initializes if doesn't exist */) {
      csvData[antipattern] = []
    }

    // if, add pattern

    const apValue = meta[antipatternType][apKey] ? 1 : 0
    csvData[antipattern].push(apValue)

    // TODO change, to also include some design ones
    if (antipatternType === 'linguisticAntipatterns') {
      if (!csvData[`pattern-${antipattern}`]) {
        csvData[`pattern-${antipattern}`] = []
      }

      const patternValue = meta[antipatternType][apKey] ? 0 : 1
      csvData[`pattern-${antipattern}`].push(patternValue)
    }
  })
}
