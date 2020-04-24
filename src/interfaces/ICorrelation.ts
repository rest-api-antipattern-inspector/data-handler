export default interface ICorrelation {
  [antipatternTypeAKey: string]: {
    amount: number
    [antipatternTypeBKey: string]: number
  }
}
