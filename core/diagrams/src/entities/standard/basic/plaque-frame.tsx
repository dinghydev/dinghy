import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PLAQUE_FRAME = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.plaque_frame;dx=10;whiteSpace=wrap;',
  },
  _width: 100,
  _height: 60,
}

export function PlaqueFrame(props: NodeProps) {
  return (
    <Shape
      {...PLAQUE_FRAME}
      {...props}
      _style={extendStyle(PLAQUE_FRAME, props)}
    />
  )
}
