export const renderKey = (str: string) =>
  str.startsWith('__') ? str.slice(2) : str

export const toId = (str: string) => str.toLowerCase().replace(/\W/g, '')
export const toName = (str: string) =>
  str.toLowerCase()
    .replace(/-/g, '_')
    .replace(/ /g, '_')
    .replace(/\W/g, '')
    .replace(/_/g, '-')

export const toTitle = (str: string) =>
  str.split(/\W/g).map(capitalise).join(' ')

export const decapitalise = (str: string) => str[0].toLowerCase() + str.slice(1)
export const capitalise = (str: string) => str[0].toUpperCase() + str.slice(1)

export const camelCaseToWords = (str: string, spacer: string = ' ') => {
  try {
    return capitalise(str).match(/[A-Z][a-z0-9_]*/g)!.reduce(
      (acc: string[], c) => {
        if (acc.length == 0 || c.length > 1) {
          acc.push(c)
        } else {
          const lastWord = acc.pop()
          const lastChar = lastWord!.charAt(lastWord!.length - 1)
          if (lastChar >= 'A' && lastChar <= 'Z') {
            acc.push(lastWord + c)
          } else {
            acc.push(lastWord!)
            acc.push(c)
          }
        }
        return acc
      },
      [],
    ).join(spacer)
  } catch (e) {
    console.error('Error capitalising', str)
    throw e
  }
}
