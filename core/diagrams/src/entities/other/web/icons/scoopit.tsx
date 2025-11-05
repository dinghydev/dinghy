import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCOOPIT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.scoopit;fillColor=#8CD845;gradientColor=#4E7A27',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Scoopit(props: NodeProps) {
  return <Shape {...SCOOPIT} {...props} _style={extendStyle(SCOOPIT, props)} />
}
