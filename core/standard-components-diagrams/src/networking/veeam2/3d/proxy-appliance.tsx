import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROXY_APPLIANCE = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.proxy_appliance;',
  },
  _original_width: 46,
  _original_height: 46,
}

export function ProxyAppliance(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROXY_APPLIANCE}
      {...props}
      _style={extendStyle(PROXY_APPLIANCE, props)}
    />
  )
}
