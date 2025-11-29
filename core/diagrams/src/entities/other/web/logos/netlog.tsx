import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETLOG = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.netlog;fillColor=#F42424;strokeColor=none',
  },
  _original_width: 76.60000000000001,
  _original_height: 68.8,
}

export function Netlog(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETLOG)} />
}
