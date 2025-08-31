import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTHENTICATE = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#188918;fillColor=#f5fae5;fontColor=#266f3a;strokeWidth=1.5;',
  _width: 125,
  _height: 16,
}

export function Authenticate(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTHENTICATE}
      {...props}
      _style={extendStyle(AUTHENTICATE, props)}
    />
  )
}
