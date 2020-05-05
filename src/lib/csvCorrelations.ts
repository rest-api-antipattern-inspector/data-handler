import fs from 'fs'
import IMeta from '../interfaces/IMeta'
import ICSVData from '../interfaces/ICSVData'

export const writeCSVs = (metas: IMeta[]) => {
  const csvData: ICSVData = {}

  metas.forEach((meta) => {
    appendData(csvData, meta, 'designAntipatterns', 'linguisticAntipatterns')
    appendData(csvData, meta, 'linguisticAntipatterns', 'designAntipatterns')
  })

  console.log(csvData)
}

const appendData = (
  csvData: ICSVData,
  meta: IMeta,
  antipatternTypeA: string,
  antipatternTypeB: string
) => {
  Object.keys(meta[antipatternTypeA]).forEach((dKey) => {
    Object.keys(meta[antipatternTypeB]).forEach((lKey) => {
      // initializes if doesn't exist
      if (!csvData[`${dKey}VS${lKey}`]) {
        csvData[`${dKey}VS${lKey}`] = {
          a: [],
          b: [],
        }
      }

      const dAnti = meta[antipatternTypeA][dKey] ? 1 : 0
      const lAnti = meta[antipatternTypeB][lKey] ? 1 : 0

      csvData[`${dKey}VS${lKey}`].a.push(dAnti)
      csvData[`${dKey}VS${lKey}`].b.push(lAnti)
    })
  })
}
