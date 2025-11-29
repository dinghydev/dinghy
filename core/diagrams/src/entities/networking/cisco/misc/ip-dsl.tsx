import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IP_DSL = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ip_dsl;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 70,
  _original_height: 64,
}

export function IpDsl(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IP_DSL)} />
}
