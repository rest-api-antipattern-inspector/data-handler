import IDataObj from '../interfaces/IDataObj'
import ICorrelations from '../interfaces/ICorrelations'

export const getCorrelations = (designData: IDataObj[]) => {
  // l - linguistic
  // d - design
  const correlations: ICorrelations = {
    l: {},
    d: {},
  }

  // in func with a & b
  designData.forEach((obj) => {
    Object.keys(obj.linguisticAntipatterns).forEach((lKey) => {
      if (obj.linguisticAntipatterns[lKey] /** Antipattern */) {
        // creates object with initial values if doesn't exist
        if (!correlations.l[lKey]) {
          correlations.l[lKey] = {
            amount: 0,
          }
        }

        correlations.l[lKey].amount++

        Object.keys(obj.designAntipatterns).forEach((dKey) => {
          if (obj.designAntipatterns[dKey] /** Antipattern */) {
            // creates key with initial value if doesn't exist
            if (!correlations.l[lKey][dKey]) {
              correlations.l[lKey][dKey] = 0
            }

            correlations.l[lKey][dKey]++
          }
        })
      }
    })
  })

  return correlations
}

export const presentCorrelations = (
  endpointsAmount: number,
  correlations: ICorrelations
) => {
  console.log(correlations)

  // TODO change this to write to file? Txt file

  let presentationString = ''

  presentationString += `Total amount of endpoints: ${endpointsAmount}`

  Object.keys(correlations)
}
