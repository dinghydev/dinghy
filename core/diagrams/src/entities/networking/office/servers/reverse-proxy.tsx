import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REVERSE_PROXY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.reverse_proxy;',
  },
  _original_width: 41,
  _original_height: 53,
}

export function ReverseProxy(props: NodeProps) {
  return (
    <Shape
      {...REVERSE_PROXY}
      {...props}
      _style={extendStyle(REVERSE_PROXY, props)}
    />
  )
}
