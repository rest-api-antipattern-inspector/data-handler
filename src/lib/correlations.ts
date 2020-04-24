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
  let presentationString = `Total amount of endpoints: ${endpointsAmount}`

  Object.keys(correlations).forEach((antipatternType) => {
    Object.keys(correlations[antipatternType]).forEach((antipatternA) => {
      const amountA = correlations[antipatternType][antipatternA].amount
      const percentageA = getRoundedPercentage(amountA, endpointsAmount)
      presentationString += `\n${antipatternA} endpoints: ${amountA} (${percentageA}%)`

      Object.keys(correlations[antipatternType][antipatternA].bTypes).forEach(
        (antipatternB) => {
          const amountB =
            correlations[antipatternType][antipatternA].bTypes[antipatternB]
          const percentageB = getRoundedPercentage(amountB, amountA)
          presentationString += `\n${antipatternA} & ${antipatternB}: ${amountB} (${percentageB}% of ${antipatternA})`
        }
      )
    })
  })

  console.log(presentationString)
}

const appendCorrelations = (
  corr: ICorrelation,
  antipatternsTypeA: string,
  antipatternsTypeB: string,
  metas: IMeta[]
) => {
  metas.forEach((meta) => {
    Object.keys(meta[antipatternsTypeA]).forEach((keyA) => {
      if (meta[antipatternsTypeA][keyA] /** Antipattern */) {
        if (!corr[keyA] /** initializes if doesn't exist*/) {
          corr[keyA] = { amount: 0, bTypes: {} }
        }

        corr[keyA].amount++

        Object.keys(meta[antipatternsTypeB]).forEach((keyB) => {
          if (meta[antipatternsTypeB][keyB] /** Antipattern */) {
            if (!corr[keyA].bTypes[keyB] /** initializes if doesn't exist*/) {
              corr[keyA].bTypes[keyB] = 0
            }

            corr[keyA].bTypes[keyB]++
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
