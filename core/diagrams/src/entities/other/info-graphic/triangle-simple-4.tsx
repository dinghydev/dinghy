import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRIANGLE_SIMPLE_4 = {
  _style: {
    entity:
      'triangle;direction=north;strokeWidth=4;html=1;fillColor=#23445D;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 3,
  _height: 350,
}

export function TriangleSimple4(props: NodeProps) {
  return (
    <Shape
      {...TRIANGLE_SIMPLE_4}
      {...props}
      _style={extendStyle(TRIANGLE_SIMPLE_4, props)}
    />
  )
}
