import { createDebugger } from './debugUtils.ts'
import { deepClone } from './deepClone.ts'
import { deepResolve } from './deepResolve.ts'
import { camelCaseToWords } from './words.ts'
import { toId, toName } from './stringUtils.ts'

export const utils = {
  createDebugger,
  deepClone,
  deepResolve,
  camelCaseToWords,
  toId,
  toName,
}
