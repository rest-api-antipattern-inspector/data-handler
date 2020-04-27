import { getData } from './data/data'
import { getCorrelations, getCorrelationsString } from './lib/correlations'
import fs from 'fs'

console.log(process.argv[2])

const data = getData()
const correlations = getCorrelations(data)
const presentationString = getCorrelationsString(data.length, correlations)

fs.writeFileSync('correlations.md', presentationString)

console.log('Wrote stats to correlations.md')
