import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const JAMESPOT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.jamespot;fillColor=#695D5D;gradientColor=#100E0E',
  },
  _original_width: 78,
  _original_height: 78,
}

export function Jamespot(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, JAMESPOT)} />
}
