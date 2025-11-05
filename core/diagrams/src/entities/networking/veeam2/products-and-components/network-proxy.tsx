import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_PROXY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.network_proxy;',
  },
  _original_width: 28.000000000000004,
  _original_height: 28.000000000000004,
}

export function NetworkProxy(props: NodeProps) {
  return (
    <Shape
      {...NETWORK_PROXY}
      {...props}
      _style={extendStyle(NETWORK_PROXY, props)}
    />
  )
}
