import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BEBO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.bebo;fillColor=#695D5D;gradientColor=#100E0E',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Bebo(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BEBO)} />
}
