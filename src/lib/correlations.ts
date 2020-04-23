import IDesignObj from '../interfaces/IDesignObj'
import ILinguisticObj from '../interfaces/ILinguisticObj'

export const getCorrelations = (
  designData: IDesignObj[],
  linguisticData: ILinguisticObj[]
) => {
  const CRUDyAndBreakingSelfDescriptivenessCorr = getLinguisticCorrelation(
    linguisticData,
    designData,
    'CRUDyURI',
    'isBreakingSelfDescriptiveness'
  )

  return [CRUDyAndBreakingSelfDescriptivenessCorr]
}

// TODO also make a function for design & ling
// or perhaps make this work for both

const getLinguisticCorrelation = (
  linguisticData: ILinguisticObj[],
  designData: IDesignObj[],
  linguisticAntipattern: string,
  designAntipattern: string
): string => {
  // TODO check for all design antipatterns of all lingustic while here
  // & loop is running

  // have these in the loop
  let CRUDyAmount = 0
  let bothAmount = 0

  const CRUDy = []
  const boths = []

  linguisticData.forEach((lingObj) => {
    // TODO ah just do the same w. all here
    // No need to check which antipatterns, can just check
    // no if statement
    // then basically the same w opposite, design & linguistic
    if ((lingObj.antipattern = linguisticAntipattern)) {
      lingObj.antipatternEndpoints.forEach((lingEndpoint) => {
        CRUDyAmount++
        CRUDy.push(lingEndpoint)
        const designObj = getDesignObj(designData, lingEndpoint)
        if (designObj[designAntipattern]) {
          bothAmount++
          boths.push(lingEndpoint)
        }
      })
    }
  })

  // TODO have string gen in func, push to string
  return `
    ${CRUDyAmount} ${linguisticAntipattern}:
    ${CRUDy.join(', ')}

    ${bothAmount} both ${linguisticAntipattern} and ${designAntipattern}:
    ${boths.join(', ')}

    ${Math.round(
      (bothAmount / CRUDyAmount) * 100
    )}% of ${linguisticAntipattern} endpoints also ${designAntipattern}
  `
}

const getDesignObj = (
  designData: IDesignObj[],
  apiEndpoint: string
): IDesignObj => designData.find((obj) => obj.endpoint === apiEndpoint)
