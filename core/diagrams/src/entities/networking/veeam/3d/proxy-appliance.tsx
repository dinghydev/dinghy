import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROXY_APPLIANCE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.proxy_appliance;',
  },
  _original_width: 46,
  _original_height: 46,
}

export function ProxyAppliance(props: NodeProps) {
  return (
    <Shape
      {...PROXY_APPLIANCE}
      {...props}
      _style={extendStyle(PROXY_APPLIANCE, props)}
    />
  )
}
