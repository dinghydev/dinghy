export const extendStyle = (originalProps: any, extendedProps: any): any => {
  let _style = originalProps._style
  if (extendedProps._style) {
    if (_style) {
      if (Array.isArray(_style)) {
        _style.push(extendedProps._style)
      } else {
        _style = [_style, extendedProps._style]
      }
    } else {
      _style = extendedProps._style
    }
  }
  return _style
}
