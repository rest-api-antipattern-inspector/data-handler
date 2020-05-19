import fs from 'fs'
import IMeta from '../interfaces/IMeta'

interface ITable {
  keyOne: string
  keyTwo: string
  a: number // both
  b: number
  c: number
  d: number // neither
}

export const writeTablesJSON = (metas: IMeta[]) => {
  const tables: ITable[] = []

  metas.forEach((m) => {
    // TODO put in function, for all combinations
    Object.keys(m.linguisticAntipatterns).forEach((lKey) => {
      Object.keys(m.designAntipatterns).forEach((dKey) => {
        if (!existsTable(tables, lKey, dKey)) {
          tables.push({
            keyOne: lKey,
            keyTwo: dKey,
            a: 0,
            b: 0,
            c: 0,
            d: 0,
          })
        }

        const t = getTables(tables, lKey, dKey)[0]

        if (m.linguisticAntipatterns[lKey] && m.designAntipatterns[dKey]) {
          t.a++
        }

        if (m.linguisticAntipatterns[lKey] && !m.designAntipatterns[dKey]) {
          t.b++
        }

        if (!m.linguisticAntipatterns[lKey] && m.designAntipatterns[dKey]) {
          t.c++
        }

        if (!m.linguisticAntipatterns[lKey] && !m.designAntipatterns[dKey]) {
          t.d++
        }
      })
    })
  })

  fs.writeFileSync(
    './data-files/design-antipatterns/tables.json',
    JSON.stringify(tables)
  )
}

const getTables = (tables: ITable[], keyOne: string, keyTwo: string) =>
  tables.filter((t) => t.keyOne === keyOne && t.keyTwo === keyTwo)

const existsTable = (tables: ITable[], keyOne: string, keyTwo: string) =>
  getTables(tables, keyOne, keyTwo).length !== 0
