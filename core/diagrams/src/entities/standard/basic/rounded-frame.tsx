import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROUNDED_FRAME = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.rounded_frame;dx=10;whiteSpace=wrap;',
  },
  _width: 100,
  _height: 60,
}

export function RoundedFrame(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ROUNDED_FRAME)} />
}
