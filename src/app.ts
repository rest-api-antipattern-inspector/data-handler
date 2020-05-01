import { getData } from './data/data'
import { getCorrelations, getCorrelationsString } from './lib/correlations'
import Excel from 'exceljs'
import fs from 'fs'

// console.log(process.argv[2])

// TODO try putting for all uris in one table, .xlsx
// or start w. creating one for each api
// interested in correlations between antipatterns, not apis necessarily

// const data = getData()
// const correlations = getCorrelations(data)
// const presentation = getCorrelationsString(data.length, correlations)

// fs.writeFileSync('correlations.md', presentation)

// console.log('Wrote stats to correlations.md')

!fs.existsSync('./test') && fs.mkdirSync('./test')

const workbook = new Excel.Workbook()
const sheet = workbook.addWorksheet('stats')

sheet.columns = [
  { header: 'URI', key: 'uri' },
  { header: 'antipattern 1', key: 'ap_1' },
  { header: 'antipattern 2', key: 'ap_2' },
  { header: 'antipattern 3', key: 'ap_3' },
]

sheet.addRow({
  uri: 'google.com',
  ap_1: 1,
  ap_2: 0,
  ap_3: 1,
})

sheet.addRow({
  uri: 'test.com',
  ap_1: 0,
  ap_2: 1,
  ap_3: 0,
})

// fs.writeFileSync('./test/test.xlsx', workbook)

workbook.xlsx.writeFile('./test/test.xlsx')
