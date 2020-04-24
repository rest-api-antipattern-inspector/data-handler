export default interface ICorrelations {
  totalAmountOfEndpoints: number

  // for linguistic antipatterns
  l: {
    // TODO perhaps make an ICorrelation
    [linguisticAntipattern: string]: {
      amount: number
      [designAntipattern: string]: number
    }
  }

  // for design antipatterns
  d: {
    [designAntipattern: string]: {
      amount: number
      [designAntipattern: string]: number
    }
  }
}
