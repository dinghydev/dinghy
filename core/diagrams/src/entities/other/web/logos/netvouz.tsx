import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETVOUZ = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.netvouz',
  },
  _original_width: 57.2,
  _original_height: 57.400000000000006,
}

export function Netvouz(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETVOUZ)} />
}
