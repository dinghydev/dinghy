export const renderKey = (str: string) =>
  str.startsWith('__') ? str.slice(2) : str

export const capitalise = (str: string) => str[0].toLowerCase() + str.slice(1)

export const toId = (str: string) => str.toLowerCase().replace(/\W/g, '')
export const toName = (str: string) =>
  str.toLowerCase()
    .replace(/ /g, '_')
    .replace(/\W/g, '')
    .replace(/_/g, '-')
