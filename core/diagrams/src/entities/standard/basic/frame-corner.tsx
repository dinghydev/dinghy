import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FRAME_CORNER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.frame_corner;dx=10;whiteSpace=wrap;',
  },
  _width: 100,
  _height: 60,
}

export function FrameCorner(props: NodeProps) {
  return (
    <Shape
      {...FRAME_CORNER}
      {...props}
      _style={extendStyle(FRAME_CORNER, props)}
    />
  )
}
