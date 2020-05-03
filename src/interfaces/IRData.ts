export default interface IRData {
  apis: Set<string>
  antipatternTypes: Set<string>
  apData: {
    [apType: string]: number
  }
}
