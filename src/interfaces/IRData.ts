export default interface IRData {
  apis: Set<string>
  antipatternTypes: Set<string>
  apData: {
    [variable: string]: number
  }
}
