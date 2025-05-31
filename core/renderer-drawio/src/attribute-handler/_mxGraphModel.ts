export const _mxGraphModel = (
  xml: string,
) => {
  const styleString = xml.split('style="')[1].split('"')[0]
  const attributes = styleString.split(';').filter(Boolean).map((attr) =>
    attr.split('=')
  )
  const style = attributes.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {} as Record<string, string>)
  return {
    element: {
      style,
    },
  }
}
