import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROXY_APPLIANCE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.proxy_appliance;',
  _width: 46,
  _height: 46,
}

export function ProxyAppliance(props: DiagramNodeProps) {
  return <Shape {...PROXY_APPLIANCE} {...props} />
}
