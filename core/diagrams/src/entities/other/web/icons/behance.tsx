import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BEHANCE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.behance;fillColor=#695D5D;gradientColor=#100E0E',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Behance(props: NodeProps) {
  return <Shape {...BEHANCE} {...props} _style={extendStyle(BEHANCE, props)} />
}
