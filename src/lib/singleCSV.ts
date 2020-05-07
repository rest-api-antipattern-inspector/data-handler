import fs from 'fs'
import IMeta from '../interfaces/IMeta'

// template:

// BSD,FH,IMT,IC,MC,ISC,AMO,CRD,UVU,CRN,NHN,SPN
// 0,0,0,0,0,0,0,0,0,0,0,1
// 0,0,0,0,0,0,0,0,0,0,0,0

// UVU = unversioned uri?

export const writeSingleCSV = (metas: IMeta[]) => {
  // TODO have object with abbrevations, compared to ours
  // if not in abbreviations, write out full name
}

const antipatternAbbrevation = {
  isBreakingSelfDescriptiveness: 'BSD',
  isForgettingHypermedia: 'FH',
  isIgnoringCaching: 'IC',
  isIgnoringMIMEType: 'IMT',
  isIgnoringStatusCode: 'ISC',
  isMisusingCookies: 'MC',
  AmorphousURI: 'AMO',
  ContextlessResource: 'CRN',
  CRUDyURI: 'CRD',
  NonHierarchicalNodes: 'NHN',
  PluralisedNodes: 'SPN',
}
