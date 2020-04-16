import IDesignObj from '../interfaces/IDesignObj'
import ILinguisticObj from '../interfaces/ILinguisticObj'

export const getCorrelations = (
  designData: IDesignObj[],
  linguisticData: ILinguisticObj[]
) => {
  // console.log('Design data:\n', designData)
  // console.log('\nLinguistic data:\n', linguisticData)

  const bothCrudyAndBreakingSelfDesc = []

  linguisticData.forEach((lingObj) => {
    lingObj.antipatternEndpoints.forEach((lingEndpoint) => {
      const designObj = getDesignObj(designData, lingEndpoint)
      if (designObj.isBreakingSelfDescriptiveness) {
        bothCrudyAndBreakingSelfDesc.push(lingEndpoint)
      }
    })
  })

  return `These endpoints are both CRUDY and break self descriptiveness: ${bothCrudyAndBreakingSelfDesc.join(
    ', '
  )}`
}

const getDesignObj = (
  designData: IDesignObj[],
  apiEndpoint: string
): IDesignObj => designData.find((obj) => obj.endpoint === apiEndpoint)
