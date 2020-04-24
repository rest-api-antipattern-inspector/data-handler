import { getData } from './data/data'
import { getCorrelations, presentCorrelations } from './lib/correlations'

const data = getData()
const correlations = getCorrelations(data)
presentCorrelations(data.length, correlations)
