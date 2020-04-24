import IDesignObj from '../interfaces/IDesignObj'
import ICorrelations from '../interfaces/ICorrelations'

// const getLinguisticCorrelation = (
//   designData: IDesignObj[],
//   linguisticAntipattern: string,
//   designAntipattern: string
// ): string => {
//   // TODO check for all design antipatterns of all lingustic while here
//   // & loop is running

//   // have these in the loop
//   let CRUDyAmount = 0
//   let bothAmount = 0

//   const CRUDy = []
//   const boths = []

//   linguisticData.forEach((lingObj) => {
//     // TODO ah just do the same w. all here
//     // No need to check which antipatterns, can just check
//     // no if statement
//     // then basically the same w opposite, design & linguistic
//     if ((lingObj.antipattern = linguisticAntipattern)) {
//       lingObj.antipatternEndpoints.forEach((lingEndpoint) => {
//         CRUDyAmount++
//         CRUDy.push(lingEndpoint)
//         const designObj = getDesignObj(designData, lingEndpoint)

//         // hmm, loop with all designAntipatterns.
//         if (designObj[designAntipattern]) {
//           bothAmount++
//           boths.push(lingEndpoint)
//         }
//       })
//     }
//   })

//   // TODO have string gen in func, push to string
//   return `
//     ${CRUDyAmount} ${linguisticAntipattern}:
//     ${CRUDy.join(', ')}

//     ${bothAmount} both ${linguisticAntipattern} and ${designAntipattern}:
//     ${boths.join(', ')}

//     ${Math.round(
//       (bothAmount / CRUDyAmount) * 100
//     )}% of ${linguisticAntipattern} endpoints also ${designAntipattern}
//   `
// }

// const getDesignObj = (
//   designData: IDesignObj[],
//   apiEndpoint: string
// ): IDesignObj => designData.find((obj) => obj.endpoint === apiEndpoint)

export const getCorrelations = (designData: IDesignObj[]) => {
  // l - linguistic
  // d - design
  const correlations: ICorrelations = {
    totalAmountOfEndpoints: designData.length,
    l: {},
    d: {},
  }

  // TODO use debugger
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
