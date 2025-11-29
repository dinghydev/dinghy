import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ORACLE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.oracle;fillColor=#FA3743;gradientColor=#E10E11',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Oracle(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ORACLE)} />
}
