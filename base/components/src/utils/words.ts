export const camelCaseToWords = (str: string, spacer: string = ' ') => {
  return str.match(/[A-Z][a-z0-9_]*/g)!.reduce((acc: string[], c) => {
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
  }, []).join(spacer)
}
