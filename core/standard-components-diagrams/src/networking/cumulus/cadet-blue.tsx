import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CADET_BLUE = {
  _style: 'fillColor=#AEB8C3;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function CadetBlue(props: DiagramNodeProps) {
  return (
    <Shape {...CADET_BLUE} {...props} _style={extendStyle(CADET_BLUE, props)} />
  )
}
