import IMeta from '../interfaces/IMeta'
import ICorrelations from '../interfaces/ICorrelations'
import ICorrelation from '../interfaces/ICorrelation'

export const getCorrelations = (metas: IMeta[]) => {
  const correlations: ICorrelations = {
    linguistic: {},
    design: {},
  }

  appendCorrelations(
    correlations.linguistic,
    'linguisticAntipatterns',
    'designAntipatterns',
    metas
  )

  appendCorrelations(
    correlations.design,
    'designAntipatterns',
    'linguisticAntipatterns',
    metas
  )

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
}

const appendCorrelations = (
  corrObj: ICorrelation,
  antipatternsTypeA: string,
  antipatternsTypeB: string,
  metas: IMeta[]
) => {
  metas.forEach((meta) => {
    Object.keys(meta[antipatternsTypeA]).forEach((keyA) => {
      if (meta[antipatternsTypeA][keyA] /** Antipattern */) {
        if (!corrObj[keyA] /** initializes if doesn't exist*/) {
          corrObj[keyA] = { amount: 0 }
        }

        corrObj[keyA].amount++

        Object.keys(meta[antipatternsTypeB]).forEach((keyB) => {
          if (meta[antipatternsTypeB][keyB] /** Antipattern */) {
            if (!corrObj[keyA][keyB] /** initializes if doesn't exist*/) {
              corrObj[keyA][keyB] = 0
            }

            corrObj[keyA][keyB]++
          }
        })
      }
    })
  })
}
