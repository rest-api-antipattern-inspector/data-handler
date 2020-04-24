import IDataObj from '../interfaces/IDataObj'
import ICorrelations from '../interfaces/ICorrelations'

export const getCorrelations = (designData: IDataObj[]) => {
  // l - linguistic
  // d - design
  const correlations: ICorrelations = {
    linguistic: {},
    design: {},
  }

  // in func with a & b
  designData.forEach((obj) => {
    Object.keys(obj.linguisticAntipatterns).forEach((lKey) => {
      if (obj.linguisticAntipatterns[lKey] /** Antipattern */) {
        // creates object with initial values if doesn't exist
        if (!correlations.linguistic[lKey]) {
          correlations.linguistic[lKey] = {
            amount: 0,
          }
        }

        correlations.linguistic[lKey].amount++

        Object.keys(obj.designAntipatterns).forEach((dKey) => {
          if (obj.designAntipatterns[dKey] /** Antipattern */) {
            // creates key with initial value if doesn't exist
            if (!correlations.linguistic[lKey][dKey]) {
              correlations.linguistic[lKey][dKey] = 0
            }

            correlations.linguistic[lKey][dKey]++
          }
        })
      }
    })
  })

  return correlations
}

const appendCorrelations = ()

export const presentCorrelations = (
  endpointsAmount: number,
  correlations: ICorrelations
) => {
  console.log(correlations)

  // TODO change this to write to file? Txt file

  let presentationString = ''

  presentationString += `Total amount of endpoints: ${endpointsAmount}`
}
