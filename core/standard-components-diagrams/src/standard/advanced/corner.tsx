import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CORNER = {
  _style: 'shape=corner;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function Corner(props: DiagramNodeProps) {
  return <Shape {...CORNER} {...props} _style={extendStyle(CORNER, props)} />
}
