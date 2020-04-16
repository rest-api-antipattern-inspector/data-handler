import { getCorrelations } from './lib/correlations'
import { getDesignData, getLinguisticData } from './data/data'

const correlations = getCorrelations(getDesignData(), getLinguisticData())

console.log(correlations)
