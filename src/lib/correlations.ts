import IDesignObj from '../interfaces/IDesignObj'
import ILinguisticObj from '../interfaces/ILinguisticObj'

export const getCorrelations = (
  designData: IDesignObj[],
  linguisticData: ILinguisticObj[]
) => {
  // console.log('Design data:\n', designData)
  // console.log('\nLinguistic data:\n', linguisticData)

  // now looking for correlation between CRUDy & breaks self descriptiveness

  let CRUDyAmount = 0
  let bothAmount = 0

  const CRUDy = []
  const boths = []

  linguisticData.forEach((lingObj) => {
    if ((lingObj.antipattern = 'CRUDyURI')) {
      lingObj.antipatternEndpoints.forEach((lingEndpoint) => {
        CRUDyAmount++
        CRUDy.push(lingEndpoint)
        const designObj = getDesignObj(designData, lingEndpoint)
        if (designObj.isBreakingSelfDescriptiveness) {
          bothAmount++
          boths.push(lingEndpoint)
        }
      })
    }
  })

  return `
    ${CRUDyAmount} CRUDy endpoints:
    ${CRUDy.join(', ')}

    ${bothAmount} both CRUDy and breaks self desc:
    ${boths.join(', ')}

    ${Math.round(
      (bothAmount / CRUDyAmount) * 100
    )} % of CRUDy endpoints also break self descriptiveness
  `
}

const getDesignObj = (
  designData: IDesignObj[],
  apiEndpoint: string
): IDesignObj => designData.find((obj) => obj.endpoint === apiEndpoint)
