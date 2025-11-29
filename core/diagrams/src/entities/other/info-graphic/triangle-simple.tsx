import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRIANGLE_SIMPLE = {
  _style: {
    entity:
      'triangle;direction=north;strokeWidth=4;html=1;fillColor=#10739E;strokeColor=#ffffff;shadow=0;fontSize=10;fontColor=#FFFFFF;align=center;fontStyle=0;whiteSpace=wrap;spacing=10;',
  },
  _width: 0,
  _height: 350,
}

export function TriangleSimple(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRIANGLE_SIMPLE)} />
}
