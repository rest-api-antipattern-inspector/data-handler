export default interface IDesignObj {
  api: string
  endpoint: string

  wholeURI: string

  httpMethod: string
  statusCode: number

  nonstandardHeaders: string[]

  designAntipatterns: {
    isBreakingSelfDescriptiveness: boolean

    isForgettingHypermedia: boolean

    isIgnoringCaching: boolean

    isIgnoringMIMEType: boolean

    isIgnoringStatusCode: boolean

    isMisusingCookies: boolean
  }

  linguisticAntipatterns: {
    [key: string]: boolean
  }
}
