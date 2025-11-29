import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const USE_CASE = {
  _style: {
    entity:
      'shape=ellipse;html=1;strokeWidth=3;fontStyle=1;whiteSpace=wrap;align=center;perimeter=ellipsePerimeter;',
  },
  _width: 120,
  _height: 60,
}

export function UseCase(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, USE_CASE)} />
}
