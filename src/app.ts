import { getData } from './data/data'
import { getCorrelations } from './lib/correlations'

const correlations = getCorrelations(getData())

console.log(correlations)
