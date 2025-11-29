import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETVIBES = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.netvibes;fillColor=#84BD00;strokeColor=none',
  },
  _original_width: 61.800000000000004,
  _original_height: 61.800000000000004,
}

export function Netvibes(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETVIBES)} />
}
