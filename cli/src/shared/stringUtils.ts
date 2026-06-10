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

/**
 * Substitute `${VAR}` / `${VAR-default}` placeholders in `input` from `env`
 * if provided, otherwise from `Deno.env`. Only uppercase identifiers
 * (`[A-Z][A-Z0-9_]*`) are matched, so lowercase-or-mixed-case interpolations
 * like `${aws_ecr_repository.x.url}` pass through untouched.
 *
 * Throws if a placeholder is unset and no `-default` is given.
 */
export const expandEnvPlaceholders = (
  input: string,
  env?: Record<string, string | undefined>,
): string =>
  input.replace(
    /\$\{([A-Z][A-Z0-9_]*)(?:-([^}]*))?\}/g,
    (_, name, def) => {
      const value = env !== undefined ? env[name] : Deno.env.get(name)
      if (value !== undefined) return value
      if (def !== undefined) return def
      const available = Object.keys(env ?? Deno.env.toObject()).join(', ')
      throw new Error(
        `env var '${name}' not set — referenced in '${input}'.\nAvailable: ${available}`,
      )
    },
  )

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
