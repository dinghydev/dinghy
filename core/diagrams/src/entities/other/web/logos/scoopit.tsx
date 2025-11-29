import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCOOPIT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.scoopit;fillColor=#6CAB36;strokeColor=none',
  },
  _original_width: 58,
  _original_height: 70,
}

export function Scoopit(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCOOPIT)} />
}
