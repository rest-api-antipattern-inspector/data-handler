export default interface ICorrelations {
  forLinguisticAntipatterns: {
    [linguisticAntipattern: string]: {
      totalAmount: number
      [designAntipattern: string]: number
    }
  }

  forDesignAntipatterns: {
    [designAntipattern: string]: {
      totalAmount: number
      [linguisticAntipattern: string]: number
    }
  }
}
