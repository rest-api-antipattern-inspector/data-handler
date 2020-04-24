export default interface ICorrelation {
  [antipatternTypeAKey: string]: {
    amount: number
    bTypes: {
      [antipatternTypeBKey: string]: number
    }
  }
}
