import { getData } from './data/data'
import { getCorrelations, getCorrelationsMDString } from './lib/correlations'
import { getRDataCode } from './lib/createRCode'
import { getTwistedContingencyR } from './lib/twistedContingencyR'
import { writeCSVs } from './lib/csvCorrelations'
import { writeSingleCSV } from './lib/singleCSV'
import { writeTxt } from './lib/txtResults'
import fs from 'fs'

!fs.existsSync('./correlation-data') && fs.mkdirSync('./correlation-data')
!fs.existsSync('./correlation-data/csvs-foreach-antipattern') &&
  fs.mkdirSync('./correlation-data/csvs-foreach-antipattern')

const data = getData()

writeTxt(data)
console.log('Wrote txt data to correlation-data/results.txt')

writeSingleCSV(data)
console.log('Wrote csv data to correlation-data/results.csv')

writeCSVs(data)
console.log(
  'Wrote more csv files to ./correlation-data/csvs-foreach-antipattern'
)

const twistedR = getTwistedContingencyR(data)
fs.writeFileSync('./correlation-data/twisted.R', twistedR)
console.log(
  'Wrote Twisted Contingency R source code to ./correlation-data/twisted.R'
)

const sourceR = getRDataCode(data)
fs.writeFileSync('./correlation-data/data.R', sourceR)
console.log('Wrote more R code to ./correlation-data/data.R')

const correlations = getCorrelations(data)
const presentation = getCorrelationsMDString(data.length, correlations)
fs.writeFileSync('./correlation-data/correlations.md', presentation)
console.log('Wrote stats to ./correlation-data/correlations.md')
