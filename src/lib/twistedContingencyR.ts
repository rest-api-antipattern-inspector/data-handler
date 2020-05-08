import IMeta from '../interfaces/IMeta'
import ITwistedRData from '../interfaces/ITwistedRData'

// restdesign antipattern som kolumner och lingvistiska som rader
// du gjorde en sådan fast det var apier som rader och antipattern som kolumner

export const getTwistedContingencyR = (metas: IMeta[]): string => {
  const twistedData: ITwistedRData = {
    linguisticAps: new Set(),
    designAps: new Set(),
    apData: {},
  }

  Object.keys(metas[0].linguisticAntipatterns).forEach((lA) => {
    twistedData.linguisticAps.add(lA)
  })

  Object.keys(metas[0].designAntipatterns).forEach((dA) => {
    twistedData.linguisticAps.add(dA)
  })

  metas.forEach((m) => {
    appendAntipatternData(twistedData, m, 'linguisticAntipatterns')
    appendAntipatternData(twistedData, m, 'designAntipatterns')
  })

  let RVars = '# antipattern count variables:\n\n'
  let RMatrixValues = ''

  let cols = 0

  Object.keys(twistedData.apData).forEach((key) => {
    RVars += `${key}=${twistedData.apData[key]}\n`

    RMatrixValues += `${key}, `

    cols++

    if (cols === twistedData.linguisticAps.size) {
      RVars += '\n'
      RMatrixValues += '\n'
      cols = 0
    }
  })

  // removes last comma with space
  RMatrixValues = RMatrixValues.substring(0, RMatrixValues.length - 3)

  let apCalculation = `#antipatterns

mydata <- matrix(c(${RMatrixValues}), nrow=${twistedData.linguisticAps.size},
ncol=${twistedData.designAps.size},byrow = TRUE)

dimnames(mydata) = list(c(${setToString(twistedData.linguisticAps)}),
c(${setToString(twistedData.designAps)})

chisq.test(mydata)
`

  return `${RVars}${apCalculation}`
}

const appendAntipatternData = (
  data: ITwistedRData,
  m: IMeta,
  antipatternType: string
) => {
  Object.keys(m[antipatternType]).forEach((ap) => {
    if (!data.apData[ap] /** Create if doesn't exist */) {
      data.apData[ap] = 0
    }

    data.apData[ap] += m[antipatternType][ap] ? 1 : 0
  })
}

const setToString = (strSet: Set<string>): string =>
  [...strSet].map((str) => `"${str}"`).join(', ')
