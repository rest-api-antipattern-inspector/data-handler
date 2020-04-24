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

  let presentationString = ''

  presentationString += `Total amount of endpoints: ${endpointsAmount}`

  Object.keys(correlations).forEach((antipatternType) => {
    Object.keys(correlations[antipatternType]).forEach((antipatternA) => {
      const amount = correlations[antipatternType][antipatternA].amount
      const percentage = getRoundedPercentage(amount, endpointsAmount)
      presentationString += `\n${antipatternA} endpoints: ${amount} (${percentage}%)`

      Object.keys(correlations[antipatternType][antipatternA]).forEach(
        (antipatternB) => {
          // if not number
        }
      )
    })
  })

  console.log(presentationString)
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

/**
 * @returns (numerator / denominator) * 100
 */
const getRoundedPercentage = (numerator: number, denominator: number): number =>
  Math.round((numerator / denominator) * 100)
