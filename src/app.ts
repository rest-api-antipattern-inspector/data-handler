import { getData } from './data/data'
import { getCorrelations, getCorrelationsMDString } from './lib/correlations'
import { getRDataCode } from './lib/createRCode'
import { writeCSVs } from './lib/csvCorrelations'

import fs from 'fs'

!fs.existsSync('./correlation-data') && fs.mkdirSync('./correlation-data')
!fs.existsSync('./correlation-data/csv') &&
  fs.mkdirSync('./correlation-data/csv')

const data = getData()

writeCSVs(data)
console.log('Wrote csv files to ./correlation-data/csv')

const sourceR = getRDataCode(data)
fs.writeFileSync('./correlation-data/data.R', sourceR)
console.log('Wrote stats to ./correlation-data/data.R')

const correlations = getCorrelations(data)
const presentation = getCorrelationsMDString(data.length, correlations)
fs.writeFileSync('./correlation-data/correlations.md', presentation)
console.log('Wrote stats to ./correlation-data/correlations.md')
