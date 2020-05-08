export default interface ITwistedRData {
  linguisticAps: Set<string>
  designAps: Set<string>
  apData: {
    [variable: string]: number
  }
}
