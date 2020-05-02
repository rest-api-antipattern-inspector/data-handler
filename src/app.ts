import { getData } from './data/data'
import { getCorrelations, getCorrelationsMDString } from './lib/correlations'
import { getRDataCode } from './lib/createRCode'

import fs from 'fs'

!fs.existsSync('./correlation-data') && fs.mkdirSync('./correlation-data')

const data = getData()
const sourceR = getRDataCode(data)
fs.writeFileSync('./correlation-data/data.R', sourceR)
console.log('Wrote stats to ./correlation-data/data.R')

const correlations = getCorrelations(data)
const presentation = getCorrelationsMDString(data.length, correlations)
fs.writeFileSync('./correlation-data/correlations.md', presentation)
console.log('Wrote stats to ./correlation-data/correlations.md')
