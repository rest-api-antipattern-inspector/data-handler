import { getData } from './data/data'
import { getCorrelations, getCorrelationsMDString } from './lib/correlations'
import { getRDataCode } from './lib/createRCode'
import { writeCSVs } from './lib/csvCorrelations'
import { writeSingleCSV } from './lib/singleCSV'
import fs from 'fs'

// TODO
/**
 * In this repo:
 * 2. fix linguistic txt files, not just at runtime but rewrite files
 * 3. fix bug for pluralised nodes in linguistic txts
 * 4. return to branch one-csv-to-rule-them-all, fix one csv file
 * 5. fix excel files for each api
 */

!fs.existsSync('./correlation-data') && fs.mkdirSync('./correlation-data')
!fs.existsSync('./correlation-data/csvs-foreach-antipattern') &&
  fs.mkdirSync('./correlation-data/csvs-foreach-antipattern')

const data = getData()

writeSingleCSV(data)
console.log('Wrote csv data to correlation-data/total.csv')

writeCSVs(data)
console.log(
  'Wrote more csv files to ./correlation-data/csvs-foreach-antipattern'
)

const sourceR = getRDataCode(data)
fs.writeFileSync('./correlation-data/data.R', sourceR)
console.log('Wrote stats to ./correlation-data/data.R')

const correlations = getCorrelations(data)
const presentation = getCorrelationsMDString(data.length, correlations)
fs.writeFileSync('./correlation-data/correlations.md', presentation)
console.log('Wrote stats to ./correlation-data/correlations.md')
