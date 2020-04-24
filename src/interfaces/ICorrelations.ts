export default interface ICorrelations {
  // for linguistic antipatterns
  l: {
    [linguisticAntipattern: string]: {
      amount: number
      [designAntipattern: string]: number
    }
  }

  // for design antipatterns
  d: {
    [designAntipattern: string]: {
      amount: number
      [linguisticAntipattern: string]: number
    }
  }
}
