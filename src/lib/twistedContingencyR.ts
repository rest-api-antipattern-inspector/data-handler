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
