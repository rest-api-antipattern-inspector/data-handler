export default interface ICorrelations {
  // for linguistic antipatterns
  l: {
    [linguisticAntipattern: string]: {
      totalAmount: number
      [designAntipattern: string]: number
    }
  }

  // for design antipatterns
  d: {
    [designAntipattern: string]: {
      totalAmount: number
      [linguisticAntipattern: string]: number
    }
  }
}
