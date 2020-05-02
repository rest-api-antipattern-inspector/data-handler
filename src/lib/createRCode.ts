import IMeta from '../interfaces/IMeta'

export const getRDataCode = (metas: IMeta[]): string => {
  const data = {}

  // TODO can make reusaqble func for both design & linguistic
  metas.forEach((m) => {
    Object.keys(m.designAntipatterns).forEach((ap) => {
      if (m.designAntipatterns[ap] /** Antipattern */) {
        if (!data[`${m.api}_${ap}`] /** Create if doesn't exist */) {
          data[`${m.api}_${ap}`] = 0
        }

        // increments count of that antipattern for that api
        data[`${m.api}_${ap}`]++
      }
    })
  })

  let sourceR = ''

  Object.keys(data).forEach((key) => {
    sourceR += `${key} = ${data[key]}\n`
  })

  return sourceR
}
