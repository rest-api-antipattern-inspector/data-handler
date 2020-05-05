import fs from 'fs'
import IMeta from '../interfaces/IMeta'

export const writeCSVs = (metas: IMeta[]) => {
  // TODO after this has been filled
  // write each to file
  const csvCorrData = {
    // design1VSling1: {
    //   design1: [0, 1, 0],
    //   ling1: [1, 1, 0],
    // },
    // design1VSling2: {
    //   design2: [0, 1, 0],
    //   ling2: [1, 1, 0],
    // },
  }

  metas.forEach((m) => {
    Object.keys(m.designAntipatterns).forEach((dKey) => {
      Object.keys(m.linguisticAntipatterns).forEach((lKey) => {
        // initializes if doesn't exist
        if (!csvCorrData[`${dKey}VS${lKey}`]) {
          csvCorrData[`${dKey}VS${lKey}`] = {}
          csvCorrData[`${dKey}VS${lKey}`][dKey] = []
          csvCorrData[`${dKey}VS${lKey}`][lKey] = []
        }

        const dAnti = m.designAntipatterns[dKey] ? 1 : 0
        const lAnti = m.linguisticAntipatterns[lKey] ? 1 : 0

        csvCorrData[`${dKey}VS${lKey}`][dKey].push(dAnti)
        csvCorrData[`${dKey}VS${lKey}`][lKey].push(lAnti)
      })
    })
  })

  console.log(csvCorrData)
}
