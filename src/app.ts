import { getData } from './data/data'
import { getCorrelations, getCorrelationsString } from './lib/correlations'
import fs from 'fs'

const data = getData()
const correlations = getCorrelations(data)
const presentationString = getCorrelationsString(data.length, correlations)

fs.writeFileSync('correlations.md', presentationString)
