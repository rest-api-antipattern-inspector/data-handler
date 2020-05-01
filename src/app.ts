import { getData } from './data/data'
import { getCorrelations, getCorrelationsString } from './lib/correlations'

import fs from 'fs'

// console.log(process.argv[2])

// TODO try putting for all uris in one table, .xlsx
// or start w. creating one for each api
// interested in correlations between antipatterns, not apis necessarily

const data = getData()
const correlations = getCorrelations(data)
const presentation = getCorrelationsString(data.length, correlations)

fs.writeFileSync('correlations.md', presentation)

!fs.existsSync('./test') && fs.mkdirSync('./test')

fs.writeFileSync('./test/test.txt', 'hej då')

console.log('Wrote stats to correlations.md')
