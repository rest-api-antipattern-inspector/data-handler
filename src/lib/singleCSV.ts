import fs from 'fs'
import IMeta from '../interfaces/IMeta'
import ISingleCSVData from '../interfaces/ISingleCSVData'
import IAntipatternAbbreviation from '../interfaces/IAntipatternAbbreviation'

// template:

// BSD,FH,IMT,IC,MC,ISC,AMO,CRD,UVU,CRN,NHN,SPN
// 0,0,0,0,0,0,0,0,0,0,0,1
// 0,0,0,0,0,0,0,0,0,0,0,0

// UVU = unversioned uri

const antipatternAbbrevation: IAntipatternAbbreviation = {
  isBreakingSelfDescriptiveness: 'BSD',
  isForgettingHypermedia: 'FH',
  isIgnoringCaching: 'IC',
  isIgnoringMIMEType: 'IMT',
  isIgnoringStatusCode: 'ISC',
  isMisusingCookies: 'MC',
  AmorphousURI: 'AMO',
  ContextlessResource: 'CRN',
  CRUDyURI: 'CRD',
  NonHierarchicalNodes: 'NHN',
  PluralisedNodes: 'SPN',
}

// antipattern += ',\n'
// for each in arr, += ',\n'

export const writeSingleCSV = (metas: IMeta[]) => {
  const csvData: ISingleCSVData = {}

  metas.forEach((m) => {
    appendData(csvData, m, 'designAntipatterns')
    appendData(csvData, m, 'linguisticAntipatterns')
  })

  console.log(csvData)
}

const appendData = (
  csvData: ISingleCSVData,
  meta: IMeta,
  antipatternType: string
): void => {
  Object.keys(meta[antipatternType]).forEach((apKey) => {
    const antipattern = antipatternAbbrevation[apKey]

    if (!csvData[antipattern] /** initializes if doesn't exist */) {
      csvData[antipattern] = []
    }

    const apValue = meta[antipatternType][apKey] ? 1 : 0
    csvData[antipattern].push(apValue)
  })
}
