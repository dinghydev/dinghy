export class DinghyError extends Error {
  code?: string
  constructor(message: string, code?: string) {
    super(message)
    this.name = 'DinghyError'
    this.code = code
    Object.setPrototypeOf(this, DinghyError.prototype)
  }
}

export const throwDinghyError = (message: string, code?: string) => {
  throw new DinghyError(message, code)
}

export const HANDLED_ERROR_EXIT_CODE = 66
