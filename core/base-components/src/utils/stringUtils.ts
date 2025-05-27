import { capitalise } from './words.ts'

export const renderKey = (str: string) =>
  str.startsWith('__') ? str.slice(2) : str

export const toId = (str: string) => str.toLowerCase().replace(/\W/g, '')
export const toName = (str: string) =>
  str.toLowerCase()
    .replace(/ /g, '_')
    .replace(/\W/g, '')
    .replace(/_/g, '-')

export const toTitle = (str: string) =>
  str.split(/\W/g).map(capitalise).join(' ')
