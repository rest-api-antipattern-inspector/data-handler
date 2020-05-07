import { getData } from './data/data'
import { getCorrelations, getCorrelationsMDString } from './lib/correlations'
import { getRDataCode } from './lib/createRCode'
import { writeCSVs } from './lib/csvCorrelations'
import fs from 'fs'

// TODO
/**
 * In other repo:
 * 1. fix status, patch, only check get/post/put/delete ignore any other http methods
 * 2. investigate mime type
 *
 * In this repo:
 * 1. insert updated json file
 * 2. fix linguistic txt files, not just at runtime but rewrite files
 * 3. fix bug for pluralised nodes in linguistic txts
 * 4. return to branch one-csv-to-rule-them-all, fix one csv file
 * 5. fix excel files for each api
 */

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
