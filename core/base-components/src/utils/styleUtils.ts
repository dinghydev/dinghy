export const extendStyle = (priorityProps: any, ...styles: any): any => {
  const _style: any[] = []
  for (const style of styles) {
    if (style._style) {
      if (Array.isArray(style._style)) {
        _style.push(...style._style)
      } else {
        _style.push(style._style)
      }
    } else {
      _style.push(style)
    }
  }
  if (priorityProps._style) {
    if (Array.isArray(priorityProps._style)) {
      _style.push(...priorityProps._style)
    } else {
      _style.push(priorityProps._style)
    }
  }
  return _style
}
